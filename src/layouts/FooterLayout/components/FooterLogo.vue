<template>
    <div class="footer__image-box mt-16 cursor-pointer duration-100 active:opacity-70 md:mt-0"
        @click="$router.push({ name: 'home' })">
        <img class=" footer__logo" src="@/assets/icons/logo__second-image.svg" alt="logo__image">
    </div>
</template>