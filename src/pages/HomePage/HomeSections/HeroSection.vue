<template>
    <section class="hero">
        <div
            class="container hero__container flex flex-col justify-center items-center pt-[120px] pb-[200px] md:pt-[235px] lg:flex lg:flex-col lg:justify-center lg:items-start lg:pt-[123px]">
            <h2
                class="hero__title w-max-[311px] text-center text-white text-[42px] font-bold leading-[46px] md:w-[573px] md:text-[56px] md:leading-[56px] lg:w-[515px] lg:text-start">
                Scooter sharing made simple
            </h2>
            <div
                class="hero__mini-box flex flex-col justify-center items-center lg:flex lg:flex-col lg:justify-center lg:items-start lg:ml-[112px]">
                <p
                    class="hero__text w-max-[311px] text-center text-white text-[15px] font-normal leading-[25px] mt-6 md:w-[573px] lg:w-[405px] lg:text-start lg:mt-10">
                    Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of
                    our
                    cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!
                </p>
                <TheButtonVue class="hero__button cursor-pointer mt-[34px] md:mt-8 lg:mt-10">Get Scootin</TheButtonVue>
            </div>
        </div>
    </section>
</template>
<script>
import TheButtonVue from '../../../MaterialUI/TheButton.vue'
export default {
    components: {
        TheButtonVue,
    }
}
</script>
<style lang="scss">
.hero {
    background-attachment: fixed;
    background-image: url('@/assets/images/hero__backround-image.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    ::after {
        position: absolute;
        content: '';
        display: inline-block;
        width: 203px;
        height: 16px;
        top: 49%;
        left: -2%;
        background-image: url('@/assets/icons/yellow__path.svg');
        background-repeat: no-repeat;
    }

    ::before {
        position: absolute;
        content: '';
        display: inline-block;
        width: 452px;
        height: 151px;
        top: 49%;
        right: 16.5%;
        background-image: url('@/assets/icons/yellow__left-cursor-path.svg');
        background-repeat: no-repeat;
    }

    &__text {
        font-family: 'Lexend Deca';
    }
}

@media(max-width: 820px) {
    .hero {
        width: 100% !important;
        background-attachment: fixed;
        background-image: url('@/assets/images/hero__second-backround-image.jpg');
        background-repeat: no-repeat;
        background-position: top right;
        background-size: cover;
        position: relative;



        ::after {
            transform: rotate(180deg);
            position: absolute;
            content: '';
            display: inline-block;
            width: 100%;
            max-width: 768px;
            height: 141px;
            top: 6%;
            left: -10px;
            background-image: url('@/assets/icons/top__circles.svg');
            background-repeat: no-repeat;
        }

        ::before {
            position: absolute;
            content: '';
            display: inline-block;
            width: 452px;
            height: 151px;
            top: 73%;
            right: 58%;
            background-image: url('@/assets/icons/yellow__left-cursor-path.svg');
            background-repeat: no-repeat;
        }

        &__mini-box {
            margin-left: 0 !important;
        }
    }
}

@media(max-width: 700px) {
    .hero {
        width: 100%;
        background-attachment: fixed;
        background-image: url('@/assets/images/hero__third-backround-image.png');
        background-repeat: no-repeat;
        background-position: top center;
        background-size: cover;
        position: relative;

        ::after {
            position: absolute;
            content: '';
            display: none;
            width: 203px;
            height: 16px;
            top: 44%;
            left: 0;
            background-image: url('@/assets/icons/yellow__path.svg');
            background-repeat: no-repeat;
        }

        ::before {
            position: absolute;
            content: '';
            display: inline-block;
            width: 140px;
            height: 151px;
            top: 70%;
            left: 0;
            background-image: url('@/assets/icons/yellow__short-cursor.svg');
            background-repeat: no-repeat;
        }
    }
}
</style>