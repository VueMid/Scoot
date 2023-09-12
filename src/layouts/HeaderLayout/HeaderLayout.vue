<template>
    <header class="header fixed z-[1111] bg-white w-full lg:static dark:bg-tailwind-dark">
        <div class="container px-8 py-[22px] md:px-10 lg:px-0 flex flex-row justify-between items-center">
            <HeaderLogo />
            <HeaderNavbar />
            <HeaderButton @openMenu="openMenu" :isOpen="isOpen" @closeMenu="closeMenu" />
        </div>
    </header>
    <Transition name="navbar">
        <HeaderHiddenNavbar v-if="isOpen" @closeMenu="closeMenu" />
    </Transition>
</template>
<script>
import HeaderLogo from './components/HeaderLogo.vue';
import HeaderNavbar from './components/HeaderNavbar.vue';
import HeaderButton from './components/HeaderButton.vue';
import HeaderHiddenNavbar from './components/HeaderHiddenNavbar.vue';
export default {
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        openMenu() {
            this.isOpen = true;
            document.body.style.overflow = 'hidden';
        },
        closeMenu() {
            this.isOpen = false;
            document.body.style.overflow = 'auto';
        },
    },
    components: {
        HeaderLogo,
        HeaderNavbar,
        HeaderButton,
        HeaderHiddenNavbar,
    },
}
</script>
<style lang="scss">
.navbar-enter-active,
.navbar-leave-active {
    transition: opacity 0.5s ease;
}

.navbar-enter-from,
.navbar-leave-to {
    opacity: 0;
}

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