<template>
    <nav
        class="w-[80%] h-[110vh] mt-[68px] pt-[64px] pl-[0px] z-20 bg-dark-grey fixed top-0 right-0 mx-auto flex justify-center items-start md:hidden">
        <div class="">
            <ul class="flex flex-col justify-center items-center gap-10">
                <li class="text-[18px] font-bold" v-for="item in headerMenu" :key="item">
                    <router-link :to="item.link" class="text-white" @click="$emit('closeMenu')">
                        {{ item.name }}
                    </router-link>
                </li>
                <div class="flex flex-row justify-center items-center gap-8 ml-[-75px] md:hidden">
                    <TheDarkMode />
                    <p class="text-[18px] font-bold text-white">Theme</p>
                </div>
            </ul>
            <TheButton class="mt-[100px]" @action="openModals">Get Scootin</TheButton>
        </div>
    </nav>
    <!-- Sign-up -->
    <Transition name="modal" class="relative z-[1111]">
        <div class="header__main-modal" v-if="isModalOpened">
            <HeaderButtonComponent @closeModal="closeModal" />
        </div>
    </Transition>
</template>
<script>
import TheButton from '../../../MaterialUI/TheButton.vue';
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
    components: { TheButton, TheDarkMode, HeaderButtonComponent }
}
</script>
<style scoped>
.router-link-exact-active {
    color: #FCB72B;
}

.modal-enter-active,
.modal-leave-active {
    transition: 0.4s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}
</style>