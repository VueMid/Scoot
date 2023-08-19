<template>
    <section class="about">
        <div
            class="container about__container flex justify-center items-center md:flex md:flex-row md:justify-start md:items-center pt-[106px] pb-[86px] md:pt-[172px] md:pb-[162px]">
            <h2
                class="about__text text-center text-white font-bold w-[311px] text-[40px] leading-10 tracking-[-1.786px] md:w-[162px] md:text-[56px] md:leading-[56px] md:tracking-[-2.5px] md:py-[0px]">
                About
            </h2>
        </div>
    </section>
</template>
<style lang="scss">
.about {
    background-image: url('@/assets/images/about__background.png');
    background-repeat: no-repeat;
    background-position: center right;
    background-size: cover;
}

@media(max-width: 820px) {
    .about {
        background-image: url('@/assets/images/about__second-background.png');
        background-repeat: no-repeat;
        background-size: contain;
    }
}

@media(max-width: 700px) {
    .about {
        background-image: url('@/assets/images/about__third-background.png');
        background-repeat: no-repeat;
        background-size: contain;
    }
}
</style>