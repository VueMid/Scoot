<template>
    <section class="city">
        <div
            class="container city__container flex flex-col justify-center items-center mt-[120px] md:mt-[128px] lg:flex lg:flex-row lg:justify-between lg:items-center lg:mt-40">
            <img class="city__image rounded-[50%] w-[311px] md:w-[445px]" src="@/assets/images/city.png" alt="city">
            <div
                class="city__box flex flex-col justify-center items-center lg:flex lg:flex-col lg:justify-center lg:items-start">
                <h3
                    class="city__title w-[314px] text-dark-navy text-center text-[32px] font-bold leading-8 mt-14 md:w-[471px] md:text-5xl md:leading-[48px] md:mt-16 lg:w-[471px] lg:text-5xl lg:text-start lg:mt-0">
                    Coming to a city near you
                </h3>
                <p
                    class="city__text w-[311px] text-dim-grey text-center text-[15px] font-normal leading-[25px] mt-8 md:w-[573px] md:mt-10 lg:w-[445px] lg:text-start lg:mt-6">
                    Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you
                    want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming
                    year.
                </p>
                <TheButton class="city__button mt-8 md:mt-10">Learn More</TheButton>
            </div>
        </div>
    </section>
</template>
<script>
import TheButton from '../../../MaterialUI/TheButton.vue';
export default {
    components: { TheButton }
}
</script>
<style lang="scss">
.city {
    position: relative;

    ::after {
        z-index: -1;
        transform: rotate(180deg);
        position: absolute;
        content: '';
        display: inline-block;
        width: 101px;
        height: 445px;
        top: 0;
        left: 0;
        background-image: url('@/assets/icons/grey__circle-mask.svg');
        background-repeat: no-repeat;
    }

    ::before {
        position: absolute;
        content: '';
        display: inline-block;
        width: 710px;
        height: 151px;
        top: 0;
        left: -9%;
        background-image: url('@/assets/icons/yellow__left-cursor-path.svg');
        background-repeat: no-repeat;
    }

    &__text {
        font-family: 'Lexend Deca';
    }
}

@media(max-width: 820px) {
    .city {
        position: relative;

        ::after {
            z-index: -1;
            transform: rotate(180deg);
            position: absolute;
            content: '';
            display: inline-block;
            width: 101px;
            height: 445px;
            top: 0;
            left: 0;
            background-image: url('@/assets/icons/grey__circle-mask.svg');
            background-repeat: no-repeat;
        }

        ::before {
            position: absolute;
            content: '';
            display: inline-block;
            width: 710px;
            height: 151px;
            top: 0;
            left: -9%;
            background-image: url('@/assets/icons/yellow__left-cursor-path.svg');
            background-repeat: no-repeat;
        }
    }
}

@media(max-width: 700px) {
    .city {
        position: relative;

        ::after {
            z-index: -1;
            transform: rotate(180deg);
            position: absolute;
            content: '';
            display: none;
            width: 101px;
            height: 445px;
            top: 0;
            left: 0;
            background-image: url('@/assets/icons/grey__circle-mask.svg');
            background-repeat: no-repeat;
        }

        ::before {
            position: absolute;
            content: '';
            display: inline-block;
            width: 267px;
            height: 151px;
            top: 0;
            left: 0;
            background-image: url('@/assets/icons/yellow__third-cursor-path.svg');
            background-repeat: no-repeat;
        }
    }
}
</style>