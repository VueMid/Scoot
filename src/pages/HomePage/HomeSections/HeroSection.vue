<template>
    <section class="hero">
        <div
            class="container hero__container pt-[115px] md:pt-[257px] flex flex-col justify-center items-center lg:pt-[153px] lg:items-start">
            <TheTitleVue class="hero__title text-white text-[40px] font-bold leading-10 md:text-[56px] md:leading-[56px]">
                Scooter sharing made simple
            </TheTitleVue>
            <div class="hero__mini-box flex flex-col justify-center items-center lg:items-start">
                <TheTextVue class="hero__text mt-6 text-[15px] leading-[25px] font-normal md:w-[573px]">
                    Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of
                    our
                    cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!
                </TheTextVue>
                <TheButtonVue class="hero__button mt-[34px] mb-[279px]">Get Scootin</TheButtonVue>
            </div>
        </div>
    </section>
</template>

<script>
import TheTitleVue from '../../../MaterialUI/TheTitle.vue'
import TheTextVue from '../../../MaterialUI/TheText.vue'
import TheButtonVue from '../../../MaterialUI/TheButton.vue'
export default {
    components: {
        TheTitleVue,
        TheTextVue,
        TheButtonVue,
    }
}
</script>
<style lang="scss">
.hero {
    background-attachment: fixed;
    background-image: url('@/assets/images/hero__backround-image.jpg');
    background-position: top right;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    ::after {
        position: absolute;
        content: '';
        display: inline-block;
        width: 203px;
        height: 16px;
        top: 44%;
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
        top: 44%;
        right: 16.5%;
        background-image: url('@/assets/icons/yellow__left-cursor-path.svg');
        background-repeat: no-repeat;
    }

    &__text {
        font-family: 'Lexend Deca';
    }

    &__mini-box {
        margin-left: 114px !important;
    }
}

@media(max-width: 820px) {
    .hero {
        background-attachment: fixed;
        background-image: url('@/assets/images/hero__second-backround-image.jpg');
        background-position: top right;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
   

        ::after {
            transform: rotate(180deg);
            position: absolute;
            content: '';
            display: inline-block;
            width: 768px;
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
            top: 69.5%;
            right: 58%;
            background-image: url('@/assets/icons/yellow__left-cursor-path.svg');
            background-repeat: no-repeat;
        }

        &__mini-box {
            margin-left: 0 !important;
        }
    }
}

@media(max-width: 768px) {
    .hero {
        background-attachment: fixed;
        background-image: url('@/assets/images/hero__second-backround-image.jpg');
        background-position: top right;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;

        ::after {
            transform: rotate(180deg);
            position: absolute;
            content: '';
            display: inline-block;
            width: 768px;
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
            top: 70%;
            right: 58%;
            background-image: url('@/assets/icons/yellow__left-cursor-path.svg');
            background-repeat: no-repeat;
        }

        &__mini-box {
            margin-left: 0 !important;
        }
    }
}

@media(max-width: 414px) {
    .hero {
        padding-top: 80px;
        background-attachment: fixed;
        background-image: url('@/assets/images/hero__third-backround-image.png');
        background-position: top right;
        background-repeat: no-repeat;
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
            width: 452px;
            height: 151px;
            top: 71%;
            right: 66%;
            background-image: url('@/assets/icons/yellow__left-cursor-path.svg');
            background-repeat: no-repeat;
        }

        &__mini-box {
            margin-left: 0 !important;
        }
    }
}

@media(max-width: 412px) {
    .hero {
        padding-top: 90px;
        background-attachment: fixed;
        background-image: url('@/assets/images/hero__third-backround-image.png');
        background-position: top right;
        background-repeat: no-repeat;
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
            width: 452px;
            height: 151px;
            top: 71%;
            right: 66%;
            background-image: url('@/assets/icons/yellow__left-cursor-path.svg');
            background-repeat: no-repeat;
        }

        &__mini-box {
            margin-left: 0 !important;
        }
    }
}

@media(max-width: 375px) {
    .hero {
        padding-top: 60px;
        background-attachment: fixed;
        background-image: url('@/assets/images/hero__third-backround-image.png');
        background-position: top right;
        background-repeat: no-repeat;
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
            width: 452px;
            height: 151px;
            top: 61%;
            right: 66%;
            background-image: url('@/assets/icons/yellow__left-cursor-path.svg');
            background-repeat: no-repeat;
        }

        &__mini-box {
            margin-left: 0 !important;
        }
    }
}

@media(max-width: 360px) {
    .hero {
        padding-top: 70px;
        background-attachment: fixed;
        background-image: url('@/assets/images/hero__third-backround-image.png');
        background-position: top right;
        background-repeat: no-repeat;
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
            width: 452px;
            height: 151px;
            top: 66%;
            right: 66%;
            background-image: url('@/assets/icons/yellow__left-cursor-path.svg');
            background-repeat: no-repeat;
        }

        &__mini-box {
            margin-left: 0 !important;
        }
    }
}
</style>