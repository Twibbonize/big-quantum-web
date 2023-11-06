FROM node:14 as frontweb-builder

ARG AWS_ACCESS_KEY_ID 
ARG AWS_SECRET_ACCESS_KEY
ARG SSH_PRIVATE_KEY
ARG ENV_FILENAME
ARG NPM_TWB
ARG REGION
ENV BUCKET_ENV_FILE_LOCATION="s3://twibbonize-devops/frontend-bigquantumweb/env-vars/${ENV_FILENAME}"

# add credentials on build
RUN mkdir -p /root/.ssh/ && \
    echo "${SSH_PRIVATE_KEY}" | base64 --decode > /root/.ssh/id_rsa && chmod 400 /root/.ssh/id_rsa  && \
    # make sure your domain is accepted
    touch /root/.ssh/known_hosts  && \
    ssh-keyscan github.com >> /root/.ssh/known_hosts && \
    apt update -y && apt install python python-pip -y && \
    pip install awscli && \
    mkdir -p /root/.aws/ && \
    mkdir -p /bigquantumweb-frontend && \
    echo "[default]" > /root/.aws/credentials && \
    echo "aws_access_key_id = "$AWS_ACCESS_KEY_ID >> /root/.aws/credentials && \
    echo "aws_secret_access_key = "$AWS_SECRET_ACCESS_KEY >> /root/.aws/credentials && \
    chmod 600 /root/.aws/credentials && \
    echo "[default]" > /root/.aws/config && \
    echo "region = "$REGION >> /root/.aws/config && \
    echo "output = yaml" >> /root/.aws/config && \
    chmod 600 /root/.aws/config

WORKDIR /bigquantumweb-frontend

# Copy All files and dirs
COPY . .

WORKDIR /bigquantumweb-frontend/app

RUN rm -rf node_modules && \
    yarn cache clean && \
    echo "aws s3 cp ${BUCKET_ENV_FILE_LOCATION} /bigquantumweb-frontend/app/" > /bigquantumweb-frontend/app/run.sh && \
    chmod +x /bigquantumweb-frontend/app/run.sh && \
    sh -c /bigquantumweb-frontend/app/run.sh && \
    mv $ENV_FILENAME .env && \
    npm config set //registry.npmjs.org/:_authToken ${NPM_TWB} && \
    npm install && npm run build

FROM kebonce40/aws-cli:latest

ARG AWS_ACCESS_KEY_ID 
ARG AWS_SECRET_ACCESS_KEY
ARG BUCKET_NAME_PREFIX
ARG REGION

RUN mkdir -p /root/.aws/ && \
    mkdir -p /app && \
    echo "[default]" > /root/.aws/credentials && \
    echo "aws_access_key_id = "$AWS_ACCESS_KEY_ID >> /root/.aws/credentials && \
    echo "aws_secret_access_key = "$AWS_SECRET_ACCESS_KEY >> /root/.aws/credentials && \
    chmod 600 /root/.aws/credentials && \
    echo "[default]" > /root/.aws/config && \
    echo "region = "$REGION >> /root/.aws/config && \
    echo "output = yaml" >> /root/.aws/config && \
    chmod 600 /root/.aws/config && \
    echo "aws s3 cp . "$BUCKET_NAME_PREFIX" --recursive" > /app/run.sh && \
    chmod +x /app/run.sh

# Add timezone asia/jakarta
RUN apk --no-cache --update add tzdata ca-certificates curl && \
	cp /usr/share/zoneinfo/Asia/Jakarta /etc/localtime && \
	echo "Asia/Jakarta" > /etc/timezone && \
	apk del tzdata

WORKDIR /app

COPY --from=frontweb-builder /bigquantumweb-frontend/app/dist ./

CMD ["/bin/sh", "-c", "/app/run.sh"]
