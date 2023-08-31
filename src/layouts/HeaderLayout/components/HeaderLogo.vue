<template>
    <div class="header__logo w-[76px] md:w-auto cursor-pointer duration-100 active:opacity-70"
        @click="$router.push('/')">
        <img class="block dark:hidden" src="@/assets/icons/logo__image.svg" alt="logo__image">
        <img class="hidden dark:block" src="@/assets/icons/logo__second-image.svg" alt="logo__image">
    </div>
</template>