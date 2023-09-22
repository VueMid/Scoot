<template>
    <section class="urban">
        <div
            class="container urban__container flex flex-col-reverse justify-center items-center mt-[120px] gap-14 lg:flex lg:flex-row-reverse lg:justify-between lg:items-center lg:gap-0 lg:mt-[170px]">
            <div
                class="urban__box flex flex-col justify-center items-center lg:flex lg:flex-col lg:justify-center lg:items-start">
                <h3
                    class="urban__title w-max-[311px] text-center dark:text-white text-dark-navy text-[32px] font-bold leading-8 tracking-[-1.429px] md:w-[457px] md:text-5xl md:leading-[48px] md:tracking-[-2.143px] lg:w-[445px] lg:text-start">
                    Better urban living
                </h3>
                <p
                    class="urban__text w-max-[311px] text-center dark:text-white/70 text-dim-grey text-[15px] font-normal leading-[25px] mt-8 md:w-[573px] md:mt-10 lg:w-[445px] lg:text-start lg:mt-6">
                    We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and
                    we offset the minimal carbon footprint for each ride.
                </p>
            </div>
            <img class="urban__image rounded-[50%] w-max-[311px] md:w-[445px]" src="@/assets/images/urban.png" alt="girl">
        </div>
    </section>
</template>
<style lang="scss">
.urban {
    position: relative;

    &::after {
        transform: rotate(180deg);
        position: absolute;
        content: '';
        display: inline-block;
        width: 100%;
        max-width: 101px;
        height: 445px;
        top: 0;
        left: 0;
        background-image: url('@/assets/icons/grey__circle-mask.svg');
        background-repeat: no-repeat;
    }

    &::before {
        z-index: 2;
        position: absolute;
        content: '';
        display: inline-block;
        width: 100%;
        max-width: 355px;
        height: 151px;
        top: 0;
        left: 0;
        background-image: url('@/assets/icons/urban__yellow-cursor.svg');
        background-repeat: no-repeat;
    }

    &__text {
        font-family: 'Lexend Deca';
    }
}

@media(max-width: 820px) {
    .urban {
        position: relative;

        &::after {
            transform: rotate(180deg);
            position: absolute;
            content: '';
            display: inline-block;
            width: 100%;
            max-width: 101px;
            height: 445px;
            top: 0;
            left: 0;
            background-image: url('@/assets/icons/grey__circle-mask.svg');
            background-repeat: no-repeat;
        }

        &::before {
            z-index: 2;
            position: absolute;
            content: '';
            display: inline-block;
            width: 100%;
            max-width: 355px;
            height: 151px;
            top: 0;
            left: 0;
            background-image: url('@/assets/icons/urban__yellow-cursor.svg');
            background-repeat: no-repeat;
        }
    }
}

@media(max-width: 700px) {
    .urban {
        position: relative;

        &::after {
            z-index: -1;
            transform: rotate(180deg);
            position: absolute;
            content: '';
            display: none;
            width: 100%;
            max-width: 101px;
            height: 445px;
            top: 0;
            left: 0;
            background-image: url('@/assets/icons/grey__circle-mask.svg');
            background-repeat: no-repeat;
        }

        &::before {
            position: absolute;
            content: '';
            display: inline-block;
            width: 100%;
            max-width: 267px;
            height: 151px;
            top: 0;
            left: 0;
            background-image: url('@/assets/icons/yellow__third-cursor-path.svg');
            background-repeat: no-repeat;
        }
    }
}
</style>