<template>
    <header class="header fixed z-[1111] bg-white w-full lg:static dark:bg-tailwind-dark">
        <div class="container px-8 py-[22px] md:px-10 flex flex-row justify-between items-center">
            <HeaderLogo />
            <HeaderNavbar />
            <HeaderButton @openMenu="toggleMenu" :isOpen="isOpen" />
            <Transition name="menu">
                <HeaderHiddenNavbar class="fixed block md:hidden" v-if="isOpen" @closeMenu="toggleMenu" />
            </Transition>
        </div>
    </header>
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
        toggleMenu() {
            this.isOpen = !this.isOpen
        }
    },
    components: {
        HeaderLogo,
        HeaderNavbar,
        HeaderButton,
        HeaderHiddenNavbar
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
.menu-enter-active,
.menu-leave-active {
    transition: 0.4s ease;
}

.menu-enter-from,
.menu-leave-to {
    transform: translate(100%);
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