<template>
    <section class="city overflow-hidden pt-[120px] md:pt-[128px] lg:pt-[160px]">
        <div
            class="container city__container flex flex-col justify-center items-center lg:flex lg:flex-row lg:justify-between lg:items-center">
            <img class="city__image rounded-[50%] z-[2] w-max-[311px] md:w-[445px] target duration-[400ms]"
                v-motion-slide-visible-once-bottom src="@/assets/images/city.png" alt="guy__holding-phone">
            <div class="city__box flex flex-col justify-center items-center lg:flex-col lg:justify-center lg:items-start">
                <h3 class="city__title w-max-[314px] text-dark-navy text-center text-[32px] font-bold leading-8 mt-14 md:w-[471px] md:text-5xl md:leading-[48px] lg:w-[471px] lg:text-5xl lg:text-start lg:mt-0 dark:text-white target duration-200"
                    v-motion-slide-visible-once-right>
                    Coming to a city near you
                </h3>
                <p class="city__text w-max-[311px] text-dim-grey text-center text-[15px] font-normal leading-[25px] mt-8 md:w-[573px] md:mt-10 lg:w-[445px] lg:text-start lg:mt-6 dark:text-white/70 target duration-300"
                    v-motion-slide-visible-once-right>
                    Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you
                    want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming
                    year.
                </p>
                <TheButton class="city__button mt-8 md:mt-10 target duration-[400ms]" v-motion-slide-visible-once-right
                    data-modal-target="staticModal" data-modal-toggle="staticModal" type="button" @click="openModal">
                    Learn More
                </TheButton>
            </div>
        </div>
    </section>
    <!-- Modal -->
    <Transition name="modal" class="relative z-[1111]">
        <div class="city__main-modal" v-if="isModalOpened">
            <CityComponent @closeModal="closeModal" />
        </div>
    </Transition>
</template>
<script>
import TheButton from '../../../MaterialUI/TheButton.vue';
import CityComponent from '../components/CityComponent.vue'
export default {
    data() {
        return {
            isModalOpened: false
        }
    },
    methods: {
        openModal(idx) {
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
        CityComponent
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

.city {
    position: relative;

    &::after {
        z-index: 1;
        transform: rotate(180deg);
        pointer-events: none;
        content: '';
        position: absolute;
        display: inline-block;
        width: 101px;
        height: 445px;
        top: 27%;
        left: 0px;
        background-image: url('@/assets/icons/grey__circle-mask.svg');
        background-repeat: no-repeat;
    }

    &::before {
        transform: rotate(180deg);
        z-index: 3;
        pointer-events: none;
        content: '';
        position: absolute;
        display: inline-block;
        width: 311px;
        height: 151px;
        top: 30%;
        left: 0%;
        background-image: url('@/assets/icons/yellow__second-left-cursor-path.svg');
        background-repeat: no-repeat;
    }

    &__text {
        font-family: 'Lexend Deca';
    }
}

@media(max-width: 820px) {
    .city {
        position: relative;

        &::after {
            z-index: 1;
            transform: rotate(180deg);
            pointer-events: none;
            content: '';
            position: absolute;
            display: inline-block;
            width: 101px;
            height: 445px;
            top: 13%;
            left: 0px;
            background-image: url('@/assets/icons/grey__circle-mask.svg');
            background-repeat: no-repeat;
        }

        &::before {
            transform: rotate(180deg);
            z-index: 3;
            pointer-events: none;
            content: '';
            position: absolute;
            display: inline-block;
            width: 381px;
            height: 151px;
            top: 19%;
            right: 0%;
            background-image: url('@/assets/icons/yellow__second-left-cursor-path.svg');
            background-repeat: no-repeat;
        }
    }
}

@media(max-width: 700px) {
    .city {
        position: relative;

        &::after {
            z-index: -1;
            transform: rotate(180deg);
            pointer-events: none;
            content: '';
            position: absolute;
            display: none;
            width: 101px;
            height: 445px;
            top: 14%;
            left: 0px;
            background-image: url('@/assets/icons/grey__circle-mask.svg');
            background-repeat: no-repeat;
        }

        &::before {
            transform: rotate(180deg);
            z-index: 3;
            pointer-events: none;
            content: '';
            position: absolute;
            display: inline-block;
            width: 100%;
            max-width: 219px;
            height: 151px;
            top: 24%;
            right: 0px;
            background-image: url('@/assets/icons/yellow__third-left-cursor-path.svg');
            background-repeat: no-repeat;
        }
    }
}
</style>    