<template>
    <nav
        class="w-full h-[110vh] mt-[0px] pt-[134px] z-[999] pl-8 backdrop-blur-md bg-white/80 dark:bg-tailwind-dark/90 fixed top-0 right-0 mx-auto flex justify-between items-start md:hidden md:backdrop-blur-none">
        <div class="">
            <ul class="flex flex-col justify-between items-start gap-10">
                <li class="text-[18px] font-bold" v-for="item in headerMenu" :key="item">
                    <router-link :to="item.link" class="text-dark-grey dark:text-white" @click="$emit('closeMenu')">
                        {{ item.name }}
                    </router-link>
                </li>
                <div class="md:hidden">
                    <p class="text-[18px] font-bold text-dark-grey dark:text-white">Theme</p>
                </div>
            </ul>
        </div>
        <TheDarkMode class="pr-8 pt-[195px]" />
    </nav>
</template>
<script>
import TheDarkMode from '../../../MaterialUI/TheDarkMode.vue';
import headerJs from '../header.js';
import HeaderButtonComponent from './HeaderButtonComponent.vue';
export default {
    data() {
        return {
            isModalOpened: false,
            headerMenu: headerJs,
        }
    },
    methods: {
        openModals() {
            this.isModalOpened = true;
        },
        closeModal() {
            this.isModalOpened = false;
        }
    },
    components: { TheDarkMode, HeaderButtonComponent }
}
</script>
<style scoped>
.router-link-exact-active {
    color: #FCB72B !important;
}
</style>