<template>
    <section class="hero">
        <div class="container hero__container flex flex-col justify-center items-center pt-[155px]">
            <h2 class="hero__title w-[311px] text-center text-white text-[42px] font-bold leading-[46px]">
                Scooter sharing made simple
            </h2>
            <div class="hero__mini-box flex flex-col justify-center items-center">
                <p class="hero__text w-[311px] text-center text-white text-[15px] font-normal leading-[25px] mt-6">
                    Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of
                    our
                    cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!
                </p>
                <TheButtonVue class="hero__button mt-[34px]">Get Scootin</TheButtonVue>
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
    background-position: top right;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: 100vh;

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
}

// @media(max-width: 820px) {
//     .hero {
//         background-attachment: fixed;
//         background-image: url('@/assets/images/hero__second-backround-image.jpg');
//         background-position: top right;
//         background-repeat: no-repeat;
//         background-size: cover;
//         position: relative;


//         ::after {
//             transform: rotate(180deg);
//             position: absolute;
//             content: '';
//             display: inline-block;
//             width: 768px;
//             height: 141px;
//             top: 6%;
//             left: -10px;
//             background-image: url('@/assets/icons/top__circles.svg');
//             background-repeat: no-repeat;
//         }

//         ::before {
//             position: absolute;
//             content: '';
//             display: inline-block;
//             width: 452px;
//             height: 151px;
//             top: 69.5%;
//             right: 58%;
//             background-image: url('@/assets/icons/yellow__left-cursor-path.svg');
//             background-repeat: no-repeat;
//         }

//         &__mini-box {
//             margin-left: 0 !important;
//         }
//     }
// }

@media(max-width: 700px) {
    .hero {
        background-attachment: fixed;
        background-image: url('@/assets/images/hero__third-backround-image.png');
        background-position: top right;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        height: 100vh;

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
            top: 74.5%;
            left:0;
            background-image: url('@/assets/icons/yellow__short-cursor.svg');
            background-repeat: no-repeat;
        }
    }
}
</style>