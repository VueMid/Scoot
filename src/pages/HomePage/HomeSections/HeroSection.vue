<template>
    <section class="hero heror w-full h-screen flex flex-col items-center px-8 md:px-10 lg:px-40">
        <div class="hero__wrapper lg:mr-auto flex flex-col justify-center items-center lg:items-end">
            <TheTitle class="hero__title mt-[115px] md:mt-[137px] lg:mr-auto">Scooter sharing made simple
            </TheTitle>
            <div class="hero__bottom flex flex-col justify-center items-center lg:items-start">
                <TheText class="hero__text mt-6">
                    Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of
                    our
                    cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!
                </TheText>
                <TheButton class="hero__button mt-[34px]">Get Scootin</TheButton>
            </div>
        </div>
    </section>
</template>
<script>
import TheTitle from '../../../MaterialUI/TheTitle.vue';
import TheText from '../../../MaterialUI/TheText.vue';
import TheButton from '../../../MaterialUI/TheButton.vue';
export default {
    components: { TheTitle, TheText, TheButton }
}
</script>
<style lang="scss">
.hero {
    background-image: url('@/assets/images/hero__backround-image.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: relative;

    ::before {
        position: absolute;
        content: '';
        width: 203px;
        height: 16px;
        display: block;
        background-image: url('@/assets/icons/yellow__path.svg');
        background-repeat: no-repeat;
        top: 48%;
        left: 0;
    }

    ::after {
        position: absolute;
        content: '';
        width: 452px;
        height: 151px;
        display: block;
        background-image: url('@/assets/icons/yellow__left-cursor-path.svg');
        background-repeat: no-repeat;
        top: 48%;
        right: 14%;
    }
}

.hero__text {
    font-family: 'Lexend Deca';
}

@media(max-width: 820px) {
    .hero {
        padding-top: 50px;
        background-image: url('@/assets/images/hero__second-backround-image.jpg');
        background-size: cover;
        background-position: right top;
        background-repeat: no-repeat;
        background-attachment: fixed;
        position: relative;

        ::before {
            transform: rotate(180deg);
            position: absolute;
            content: '';
            width: 768px;
            height: 91px;
            display: block;
            background-image: url('@/assets/icons/top__circles.svg');
            background-repeat: no-repeat;
            top: 0;
            left: 0;
        }

        ::after {
            position: absolute;
            content: '';
            width: 452px;
            height: 151px;
            display: block;
            background-image: url('@/assets/icons/yellow__left-cursor-path.svg');
            background-repeat: no-repeat;
            top: 44%;
            left: -12%;
        }
    }
}

@media(max-width: 768px) {
    .hero {
        padding-top: 20px;
        background-image: url('@/assets/images/hero__second-backround-image.jpg');
        background-size: cover;
        background-position: right top;
        background-repeat: no-repeat;
        background-attachment: fixed;
        position: relative;

        ::before {
            transform: rotate(180deg);
            position: absolute;
            content: '';
            width: 768px;
            height: 91px;
            display: block;
            background-image: url('@/assets/icons/top__circles.svg');
            background-repeat: no-repeat;
            top: 0;
            left: 0;
        }

        ::after {
            position: absolute;
            content: '';
            width: 452px;
            height: 151px;
            display: block;
            background-image: url('@/assets/icons/yellow__left-cursor-path.svg');
            background-repeat: no-repeat;
            top: 47%;
            left: -17%;
        }
    }
}

@media(max-width: 640px) {
    .hero {
        padding-top: 10px;
        background-image: url('@/assets/images/hero__third-backround-image.png');
        background-size: cover;
        background-position: right;
        background-repeat: no-repeat;
        background-attachment: fixed;
        position: relative;

        ::before {
            position: absolute;
            content: '';
            width: 768px;
            height: 363px;
            display: none;
            background-image: url('@/assets/icons/top__circles.svg');
            background-repeat: no-repeat;
            top: -26%;
            left: 0;
        }

        ::after {
            position: absolute;
            content: '';
            width: 452px;
            height: 151px;
            display: block;
            background-image: url('@/assets/icons/yellow__left-cursor-path.svg');
            background-repeat: no-repeat;
            top: 55%;
            left: -70% !important;
        }
    }
}

@media(max-width: 380px) {
    .hero {
        padding-top: 10px;
        background-image: url('@/assets/images/hero__third-backround-image.png');
        background-size: cover;
        background-position: right;
        background-repeat: no-repeat;
        background-attachment: fixed;
        position: relative;

        ::before {
            position: absolute;
            content: '';
            width: 768px;
            height: 363px;
            display: none;
            background-image: url('@/assets/icons/top__circles.svg');
            background-repeat: no-repeat;
            top: -26%;
            left: 0;
        }

        ::after {
            position: absolute;
            content: '';
            width: 452px;
            height: 151px;
            display: block;
            background-image: url('@/assets/icons/yellow__left-cursor-path.svg');
            background-repeat: no-repeat;
            top: 75%;
            left: -90% !important;
        }
    }
}
</style>