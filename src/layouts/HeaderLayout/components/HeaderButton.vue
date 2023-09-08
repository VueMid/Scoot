<template>
    <div>
        <div class="header__button flex flex-row justify-center items-center gap-8
    md:flex md:flex-row md:justify-center md:items-center md:gap-8">
            <TheDarkMode class="hidden md:block" />
            <TheButton @action="openModals" class="hidden md:block">
                Get Scootin
            </TheButton>
            <button class="block md:hidden" v-if="!isOpen" @click="$emit('openMenu')">
                <img class="w-[24px] h-[24px]" src="@/assets/icons/open__menu.svg" alt="open__menu">
            </button>
            <button class="block md:hidden" v-else @click="$emit('closeMenu')" data-modal-target="staticModal"
                data-modal-toggle="staticModal">
                <img class=" w-[24px] h-[24px]" src="@/assets/icons/close__menu.svg" alt="close__menu">
            </button>
        </div>
        <!-- Sign-up -->
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
            isModalOpened: false
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
<style lang="scss">
.modal-enter-active,
.modal-leave-active {
    transition: 0.4s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}
</style>