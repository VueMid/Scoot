<template>
  <main>
    <HeaderLayout />
    <transition name="fade">
      <RouterView />
    </transition>
    <SignupLayout />
    <FooterLayout />
    <a class="scrollup cursor-pointer w-[40px] h-[40px] leading-[40px] text-[15px] md:w-[60px] md:h-[60px] md:leading-[60px] md:text-[30px] 
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
      if (scrollY > 560) {
        scrollUp.classList.add('show-scroll');
      } else {
        scrollUp.classList.remove('show-scroll');
      }
    })
  }
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: 0.3s ease;
  transform: scale(1);
  pointer-events: none;
}

.fade-enter-from,
.fade-leave-to {
  pointer-events: all;
  opacity: 0;
}
</style>