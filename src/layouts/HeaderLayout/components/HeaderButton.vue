<template>
    <div class="header__button flex flex-row justify-center items-center gap-8
    md:flex md:flex-row md:justify-center md:items-center md:gap-8">
        <TheDarkMode class="hidden md:block" />
        <TheButton class="hidden md:block">Get Scootin</TheButton>
        <button class="block md:hidden" v-if="!isOpen" @click="$emit('openMenu')">
            <img class="w-[24px] h-[24px]" src="@/assets/icons/open__menu.svg" alt="open__menu">
        </button>
        <button class="block md:hidden" v-else @click="$emit('closeMenu')">
            <img class=" w-[24px] h-[24px]" src="@/assets/icons/close__menu.svg" alt="close__menu">
        </button>
    </div>
</template>
<script>
import TheButton from '../../../MaterialUI/TheButton.vue';
import TheDarkMode from '../../../MaterialUI/TheDarkMode.vue';
export default {
    data() {
        return {}
    },
    props: {
        isOpen: {
            type: Boolean,
        }
    },
    methods: {},
    components: { TheButton, TheDarkMode }
}
</script>