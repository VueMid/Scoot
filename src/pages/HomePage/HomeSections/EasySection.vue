<template>
    <section class="easy pt-[120px] md:pt-[145px] lg:pt-[200px]">
        <div
            class="container easy__container flex flex-col justify-center items-center  lg:flex lg:flex-row-reverse lg:justify-between lg:items-center">
            <img class="easy__image rounded-[50%] z-[1] w-max-[311px] md:w-[445px] target duration-[400ms]"
                v-motion-slide-visible-once-bottom src="@/assets/images/guy__holding-phone.png" alt="guy__holding-phone">
            <div class="easy__box flex flex-col justify-center items-center lg:flex-col lg:justify-center lg:items-start">
                <h3 class="easy__title w-max-[314px] text-dark-navy text-center text-[32px] font-bold leading-8 mt-14 md:w-[471px] md:text-5xl md:leading-[48px] lg:w-[471px] lg:text-5xl lg:text-start lg:mt-0 dark:text-white target duration-200"
                    v-motion-slide-visible-once-left>
                    Easy to use riding telemetry
                </h3>
                <p class="easy__text w-max-[311px] text-dim-grey text-center text-[15px] font-normal leading-[25px] mt-8 md:w-[573px] md:mt-10 lg:w-[445px] lg:text-start lg:mt-6 dark:text-white/70 target duration-300"
                    v-motion-slide-visible-once-left>
                    The Scoot app is available with riding telemetry. This means it can show you your average speed, how
                    long you've been using the scooter, your traveling distance, and many more things all in an easy to use
                    app.
                </p>
                <TheButton class="easy__button mt-8 md:mt-10 target duration-[400ms]" v-motion-slide-visible-once-left
                    data-modal-target="staticModal" data-modal-toggle="staticModal" type="button" @click="openModal">
                    Learn More
                </TheButton>
            </div>
        </div>
    </section>
    <!-- Modal -->
    <Transition name="modal" class="relative z-[1111]">
        <div class="easy__main-modal" v-if="isModalOpened">
            <EasyComponentVue @closeModal="closeModal" />
        </div>
    </Transition>
</template>
<script>
import TheButton from '../../../MaterialUI/TheButton.vue';
import EasyComponentVue from '../components/EasyComponent.vue';
export default {
    data() {
        return {
            isModalOpened: false
        }
    },
    methods: {
        openModal() {
            this.isModalOpened = true;
            document.body.style.overflow = 'hidden';
        },
        closeModal() {
            this.isModalOpened = false;
            document.body.style.overflow = 'auto';
        },
    },
    components: {
        TheButton,
        EasyComponentVue
    }
}
</script>
<style lang="scss">
.modal-enter-active,
.modal-leave-active {
    transition: 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.easy {
    position: relative;

    &::after {
        z-index: 1;
        pointer-events: none;
        position: absolute;
        content: '';
        display: inline-block;
        width: 741px;
        height: 151px;
        top: 77.3%;
        right: -3%;
        background-image: url('@/assets/icons/yellow__right-cursor-path.svg');
        background-repeat: no-repeat;
    }

    &::before {
        z-index: 1;
        pointer-events: none;
        position: absolute;
        content: '';
        display: inline-block;
        width: 101px;
        height: 445px;
        bottom: 0;
        right: 0%;
        background-image: url('@/assets/icons/grey__circle-mask.svg');
        background-repeat: no-repeat;
    }

    &__text {
        font-family: 'Lexend Deca';
    }
}

@media(max-width: 820px) {
    .easy {
        position: relative;

        &::after {
            z-index: 1;
            pointer-events: none;
            position: absolute;
            content: '';
            display: inline-block;
            width: 710px;
            height: 151px;
            top: 46.6%;
            right: 0;
            background-image: url('@/assets/icons/yellow__right-cursor-path.svg');
            background-repeat: no-repeat;
        }

        &::before {
            z-index: 1;
            pointer-events: none;
            position: absolute;
            content: '';
            display: inline-block;
            width: 101px;
            height: 445px;
            top: 15%;
            right: 0;
            background-image: url('@/assets/icons/grey__circle-mask.svg');
            background-repeat: no-repeat;
        }
    }
}

@media(max-width: 700px) {
    .easy {
        position: relative;

        &::after {
            pointer-events: none;
            position: absolute;
            content: '';
            display: inline-block;
            width: 100%;
            max-width: 330px;
            height: 151px;
            top: 33%;
            right: 0;
            background-image: url('@/assets/icons/yellow__second-right-cursor-path.svg');
            background-repeat: no-repeat;
        }

        &::before {
            z-index: -1;
            pointer-events: none;
            position: absolute;
            content: '';
            display: none;
            width: 101px;
            height: 445px;
            top: 15%;
            right: 0;
            background-image: url('@/assets/icons/grey__circle-mask.svg');
            background-repeat: no-repeat;
        }
    }
}
</style>