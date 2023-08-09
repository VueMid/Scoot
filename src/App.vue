<template>
  <main>
    <HeaderLayout />
    <RouterView />
    <FooterLayout />
  </main>
</template>
<script>
import HeaderLayout from './layouts/HeaderLayout/HeaderLayout.vue';
import FooterLayout from './layouts/FooterLayout/FooterLayout.vue';
export default {
  components: { HeaderLayout, FooterLayout }
}
</script>
<style></style>