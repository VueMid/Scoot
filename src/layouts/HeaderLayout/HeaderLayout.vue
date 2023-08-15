<template>
    <header class="header fixed z-50 bg-white w-full lg:static">
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
    components: {
        HeaderLogo,
        HeaderNavbar,
        HeaderButton
    },
    mounted() {
        window.addEventListener("scroll", () => {
            console.log(window);
            if (window.pageYOffset > 0) {
                document.querySelector(".header")?.classList.add("scrolled");
            } else {
                document.querySelector(".header")?.classList.remove("scrolled");
            }
        });
    }
}
</script>
<style lang="scss">
@media(max-width: 820px) {
    .header {
        box-shadow: rgba(252, 183, 43) 0px 2px 8px 0px;
    }
}

@media(max-width:700px) {
    .header {
        transition: 0.2s;

        &.scrolled {
            box-shadow: none;
            background-color: inherit;
            z-index: 1001;
            backdrop-filter: blur(5px);
        }
    }
}
</style>