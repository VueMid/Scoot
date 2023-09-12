<template>
    <section class="about">
        <div
            class="container about__container flex flex-row justify-center items-center py-[60px] md:flex md:flex-row md:justify-start md:items-center md:px-[97px] md:py-[72px] lg:flex lg:flex-row lg:justify-start lg:items-center lg:px-0">
            <h2 class="about__text text-white text-[40px] font-bold leading-10 tracking-tighter-[-1.786px]">
                About
            </h2>
        </div>
    </section>
</template>
<style lang="scss">
.about {
    width: 100%;
    background-image: url('@/assets/images/about__background.png');
    background-position: center right;
    background-repeat: no-repeat;
    background-size: cover;
}

@media(max-width: 820px) {
    .about {
        width: 100%;
        transform: translateY(97px);
        background-image: url('@/assets/images/about__second-background.png');
        background-position: center right !important;
        background-repeat: no-repeat;
        background-size: cover;
    }
}

@media(max-width: 767px) {
    .about {
        width: 100%;
        transform: translateY(68px);
        background-image: url('@/assets/images/about__third-background.png');
        background-position: center right;
        background-repeat: no-repeat;
        background-size: cover;
    }
}

@media(max-width: 700px) {
    .about {
        width: 100%;
        transform: translateY(68px);
        background-image: url('@/assets/images/about__third-background.png');
        background-position: center right;
        background-repeat: no-repeat;
        background-size: cover;
    }
}
</style>