<template>
    <nav
        class="w-full h-[110vh] mt-[0px] pt-[134px] z-[999] pl-8 bg-dark-grey/95 fixed top-0 right-0 mx-auto flex justify-between items-start md:hidden">
        <div class="">
            <ul class="flex flex-col justify-between items-start gap-10">
                <li class="text-[18px] font-bold" v-for="item in headerMenu" :key="item">
                    <router-link :to="item.link" class="text-white" @click="$emit('closeMenu')">
                        {{ item.name }}
                    </router-link>
                </li>
                <div class="md:hidden">
                    <p class="text-[18px] font-bold text-white">Theme</p>
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
            isOpen: false,
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
<style lang="scss" scoped>
.router-link-exact-active {
    color: #FCB72B;
}
</style>