<template>
    <section class="location mb-[134px] md:mb-[96px]">
        <div
            class="container location__container flex flex-row justify-center items-center py-[60px] md:flex md:flex-row md:justify-start md:items-center md:px-[97px] md:py-[72px] lg:flex lg:flex-row lg:justify-start lg:items-center lg:px-0">
            <h2 class="location__text text-white text-[40px] font-bold leading-10 tracking-tighter-[-1.786px]">
                Location
            </h2>
        </div>
    </section>
</template>
<style lang="scss">
.location {
    width: 100%;
    background-image: url('@/assets/images/location__background-image.png');
    background-position: center right;
    background-repeat: no-repeat;
    background-size: cover;
}

@media(max-width: 1023px) {
    .location {
        width: 100%;
        transform: translateY(97px);
        background-image: url('@/assets/images/location__background-image.png');
        background-position: center right;
        background-repeat: no-repeat;
        background-size: cover;
    }
}

@media(max-width: 820px) {
    .location {
        width: 100%;
        transform: translateY(97px);
        background-image: url('@/assets/images/location__second-background-image.png');
        background-position: center right !important;
        background-repeat: no-repeat;
        background-size: cover;
    }
}

@media(max-width: 767px) {
    .location {
        width: 100%;
        transform: translateY(68px);
        background-image: url('@/assets/images/location__third-background-image.png');
        background-position: center right;
        background-repeat: no-repeat;
        background-size: cover;
    }
}

@media(max-width: 700px) {
    .location {
        width: 100%;
        transform: translateY(68px);
        background-image: url('@/assets/images/location__third-background-image.png');
        background-position: center right;
        background-repeat: no-repeat;
        background-size: cover;
    }
}
</style>