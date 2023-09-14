<template>
    <section class="hero bg-fixed lg:bg-local relative">
        <div
            class="container hero__container flex flex-col justify-center items-center pt-[115px] pb-[180px] md:pt-[135px] md:pb-[217px] md:flex md:flex-col md:justify-center md:items-center xl:flex xl:flex-col xl:justify-center xl:items-start xl:pt-[153px] xl:pb-[152px] xl:px-0">
            <h2
                class="hero__title w-max-[311px] text-center text-white text-[42px] font-bold leading-[46px] md:w-[573px] md:text-[56px] md:leading-[56px] lg:text-center xl:w-[515px] xl:text-start">
                Scooter sharing made simple
            </h2>
            <div
                class="hero__mini-box flex flex-col justify-center items-center xl:flex xl:flex-col xl:justify-center xl:items-start xl:ml-[112px]">
                <p
                    class="hero__text w-max-[311px] text-center text-white text-[15px] font-normal leading-[25px] mt-6 md:w-[573px] lg:text-center lg:w-[405px] lg:mt-10 xl:w-[405px] xl:text-start xl:mt-10">
                    Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of
                    our
                    cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!
                </p>
                <TheButtonVue @action="openModals" class="hero__button cursor-pointer mt-[34px] md:mt-8 xl:mt-10">
                    Get Scootin
                </TheButtonVue>
            </div>
        </div>
    </section>
    <!-- Modal -->
    <Transition name="modal" class="relative z-[1111]">
        <div class="header__main-modal" v-if="isModalOpened">
            <HeroComponent @closeModal="closeModal" />
        </div>
    </Transition>
</template>
<script>
import TheButtonVue from '../../../MaterialUI/TheButton.vue'
import HeroComponent from '../components/HeroComponent.vue';
export default {
    data() {
        return {
            isModalOpened: false
        }
    },
    methods: {
        openModals() {
            this.isModalOpened = true;
            document.body.style.overflow = 'hidden';
        },
        closeModal() {
            this.isModalOpened = false;
            document.body.style.overflow = 'auto';
        }
    },
    components: {
        TheButtonVue,
        HeroComponent
    }
}
</script>
<style lang="scss">
.modal-enter-active,
.modal-leave-active {
    transition: 0.4s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.hero {
    background-image: url('@/assets/images/hero__backround-image.jpg');
    background-position: top right;
    transform: translateY(0px);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    ::after {
        pointer-events: none;
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
        pointer-events: none;
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

@media(max-width: 1290px) {
    .hero {
        transform: translateY(0px);
        background-image: url('@/assets/images/hero__backround-image.jpg');
        background-repeat: no-repeat;
        background-position: top right;
        background-size: cover;
        position: relative;

        ::after {
            pointer-events: none;
            transform: rotate(180deg);
            position: absolute;
            content: '';
            display: none;
            width: 100%;
            max-width: 768px;
            height: 141px;
            top: 6%;
            left: -10px;
            background-image: url('@/assets/icons/top__circles.svg');
            background-repeat: no-repeat;
        }

        ::before {
            pointer-events: none;
            position: absolute;
            content: '';
            display: none;
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

@media(max-width: 820px) {
    .hero {
        transform: translateY(97px);
        background-image: url('@/assets/images/hero__second-backround-image.jpg');
        background-repeat: no-repeat;
        background-position: top right;
        background-size: cover;
        position: relative;

        ::after {
            pointer-events: none;
            transform: rotate(180deg);
            position: absolute;
            content: '';
            display: inline-block;
            width: 100%;
            max-width: 768px;
            height: 81px;
            top: 0%;
            left: -10px;
            background-image: url('@/assets/icons/top__circles.svg');
            background-repeat: no-repeat;
        }

        ::before {
            pointer-events: none;
            position: absolute;
            content: '';
            display: inline-block;
            width: 452px;
            height: 151px;
            top: 69%;
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
        transform: translateY(68px);
        background-image: url('@/assets/images/hero__third-backround-image.png');
        background-repeat: no-repeat;
        background-position: right;
        background-size: cover;
        position: relative;

        ::after {
            pointer-events: none;
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
            pointer-events: none;
            position: absolute;
            content: '';
            display: inline-block;
            width: 140px;
            height: 151px;
            top: 74%;
            left: 0;
            background-image: url('@/assets/icons/yellow__short-cursor.svg');
            background-repeat: no-repeat;
        }
    }
}
</style>