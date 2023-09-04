<template>
  <main>
    <HeaderLayout />
    <RouterView />
    <SignupLayout />
    <FooterLayout />
    <a class="scrollup w-[40px] h-[40px] leading-[40px] text-[15px] md:w-[60px] md:h-[60px] md:leading-[60px] md:text-[30px] 
    lg:w-[45px] lg:h-[45px] lg:leading-[45px] lg:text-[20px] bg-[#FCB72B] dark:bg-dark-navy" href="#" id="scroll-up">
      <i class="fa-solid fa-arrow-up fa-beat scroll__icon" style="color: #ffffff;"></i>
    </a>
  </main>
</template>
<script>
import HeaderLayout from './layouts/HeaderLayout/HeaderLayout.vue';
import FooterLayout from './layouts/FooterLayout/FooterLayout.vue';
import SignupLayout from './components/SignupLayout.vue';
export default {
  components: { HeaderLayout, FooterLayout, SignupLayout },
  mounted() {
    window.addEventListener('scroll', () => {
      const scrollUp = document.querySelector('.scrollup');
      if (scrollY > 760) {
        scrollUp.classList.add('show-scroll');
      } else {
        scrollUp.classList.remove('show-scroll');
      }
    })
  }
}
</script>