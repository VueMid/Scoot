<template>
    <div class="ml-auto">
        <div
            class="header__button flex flex-row justify-center items-center gap-8 md:flex md:flex-row md:justify-center md:items-center md:gap-8">
            <TheDarkMode class="hidden md:block" />
            <TheButton class="hidden md:block" @action="openModals">
                Get Scootin
            </TheButton>
            <button class="block md:hidden" v-if="!isOpen" @click="$emit('openMenu')">
                <img class="w-[24px] h-[24px]" src="@/assets/icons/open__menu.svg" alt="open__menu">
            </button>
            <button class="block md:hidden" v-else @click="$emit('closeMenu')">
                <img class=" w-[24px] h-[24px]" src="@/assets/icons/close__menu.svg" alt="close__menu">
            </button>
        </div>
        <Transition name="modal" class="relative z-[1111]">
            <div class="header__main-modal" v-if="isModalOpened">
                <HeaderButtonComponent @closeModal="closeModal" />
            </div>
        </Transition>
    </div>
</template>
<script>
import TheButton from '../../../MaterialUI/TheButton.vue';
import TheDarkMode from '../../../MaterialUI/TheDarkMode.vue';
import HeaderButtonComponent from './HeaderButtonComponent.vue';
export default {
    data() {
        return {
            isModalOpened: false,
            isOpen: false,
        }
    },
    methods: {
        openModals() {
            this.isModalOpened = true;
            document.body.style.overflow = 'hidden';
        },
        closeModal() {
            this.isModalOpened = false;
            document.body.style.overflow = 'auto';
        }
    },
    props: {
        isOpen: {
            type: Boolean,
        }
    },
    components: { TheButton, TheDarkMode, HeaderButtonComponent }
}
</script>