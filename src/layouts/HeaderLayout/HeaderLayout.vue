<template>
    <header class="header">
        <div class="container px-8 py-[22px] md:px-10 lg:px-20 flex justify-between items-center">
            <HeaderLogo />
            <HeaderNavbar />
            <HeaderButton />
        </div>
    </header>
</template>
<script>
import HeaderLogo from './components/HeaderLogo.vue';
import HeaderNavbar from './components/HeaderNavbar.vue';
import HeaderButton from './components/HeaderButton.vue';
export default {
    components: { HeaderLogo, HeaderNavbar, HeaderButton }
}
</script>
<style lang="scss"></style>