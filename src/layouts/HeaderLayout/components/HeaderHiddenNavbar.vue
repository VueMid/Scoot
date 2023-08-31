<template>
    <nav
        class="w-[80%] h-[100vh] mt-[68px] pt-[64px] pl-[0px] z-20 bg-dark-grey fixed top-0 right-0 mx-auto flex justify-center items-start">
        <div class="">
            <ul class="flex flex-col justify-center items-center gap-10">
                <li class="text-[18px] font-bold" v-for="item in headerMenu" :key="item">
                    <router-link :to="item.link" class="text-white" @click="$emit('closeMenu')">
                        {{ item.name }}
                    </router-link>
                </li>
                <div class="flex flex-row justify-center items-center gap-8 mr-[50px] md:hidden">
                    <TheDarkMode />
                    <p class="text-[18px] font-bold text-white">Theme</p>
                </div>
            </ul>
            <TheButton class="mt-[100px]">Get Scootin</TheButton>
        </div>
    </nav>
</template>
<script>
import TheButton from '../../../MaterialUI/TheButton.vue';
import TheDarkMode from '../../../MaterialUI/TheDarkMode.vue';
import headerJs from '../header.js';
export default {
    data() {
        return {
            headerMenu: headerJs,
            isOpen: false,
        }
    },
    methods: {},
    components: { TheButton, TheDarkMode }
}
</script>
<style scoped>
.router-link-exact-active {
    color: #FCB72B;
}
</style>