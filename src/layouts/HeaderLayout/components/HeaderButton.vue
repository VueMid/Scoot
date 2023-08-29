<template>
    <div class="header__button flex flex-row justify-center items-center gap-10">
        <TheDarkMode />
        <TheButton class="hidden md:block">Get Scootin</TheButton>
        <button class="header__open-menu flex justify-center items-center md:hidden">
            <img src="@/assets/icons/open__menu.svg" alt="open__menu" width="20" height="16">
        </button>
    </div>
</template>
<script>
import TheButton from '../../../MaterialUI/TheButton.vue';
import TheDarkMode from '../../../MaterialUI/TheDarkMode.vue';
export default {
    components: { TheButton, TheDarkMode }
}
</script>