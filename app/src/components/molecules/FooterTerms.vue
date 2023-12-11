<script setup>
import dayjs from 'dayjs';

const currentYear = dayjs().year();
</script>

<template>
  <div class="footer-terms flex flex-col sm:flex-row gap-2">
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
    @apply mt-12 pt-4 sm:pt-8 flex sm:items-center justify-between text-black;
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    p {
      @apply text-xs sm:text-sm;
    }

    ul {
        @apply flex justify-between gap-x-8;

        li {
            a {
                @apply text-xs sm:text-sm whitespace-nowrap hover:underline;
            }
        }
    }
}
</style>