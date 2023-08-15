<template>
    <div class="header__button">
        <TheButton class="hidden md:block">Get Scootin</TheButton>
        <button class="header__open-menu flex justify-center items-center md:hidden">
            <img src="@/assets/icons/open__menu.svg" alt="open__menu" width="20" height="16">
        </button>
    </div>
</template>
<script>
import TheButton from '../../../MaterialUI/TheButton.vue';
export default {
    components: { TheButton }
}
</script>