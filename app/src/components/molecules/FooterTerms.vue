<script setup>
import dayjs from 'dayjs';

const currentYear = dayjs().year();
</script>

<template>
  <div class="footer-terms">
      <p>© {{ currentYear }} PT Twibbonize Teknologi Indonesia</p>
      <ul>
          <li>
              <a href="#">Terms & Conditions</a>
          </li>
          <li>
              <a href="#">Privacy Policy</a>
          </li>
          <li>
              <a href="#">Cookie Policy</a>
          </li>
      </ul>
  </div>
</template>

<style lang="scss">
.footer-terms {
    @apply mt-12 pt-8 flex items-center justify-between text-black;
    border-top: 1px solid rgba(255, 255, 255, 0.08);

    p {
      @apply text-sm;
    }

    ul {
        @apply flex;

        li {
            @apply ml-8;

            a {
                @apply text-sm whitespace-nowrap hover:underline;
            }
        }
    }
}
</style>