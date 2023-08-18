<template>
  <main>
    <HeaderLayout />
    <RouterView />
    <SignupLayout />
    <FooterLayout />
  </main>
</template>
<script>
import HeaderLayout from './layouts/HeaderLayout/HeaderLayout.vue';
import FooterLayout from './layouts/FooterLayout/FooterLayout.vue';
import SignupLayout from './components/SignupLayout.vue';
export default {
  components: { HeaderLayout, FooterLayout, SignupLayout }
}
</script>