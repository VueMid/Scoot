<template>
    <header class="heade fixed z-50 bg-white w-full lg:static">
        <div class="container px-8 py-[22px] md:px-10 flex justify-between items-center">
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
<style lang="scss">
@media(max-width: 820px) {
    .header {
        box-shadow: rgba(252, 183, 43) 0px 1px 3px, rgba(252, 183, 43) 0px 1px 2px;
    }
}

@media(max-width: 768px) {
    .header {
        box-shadow: rgba(252, 183, 43) 0px 1px 3px, rgba(252, 183, 43) 0px 1px 2px;
    }
}

@media(max-width: 700px) {
    .header {
        box-shadow: rgba(252, 183, 43) 0px 1px 3px, rgba(252, 183, 43) 0px 1px 2px;
    }
}
</style>