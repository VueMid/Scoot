<template>
    <section class="mobility">
        <div
            class="container mobility__container flex flex-col-reverse justify-center items-center mt-[182px] gap-14 md:mt-[250px] lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-0 lg:mt-[120px]">
            <div
                class="mobility__box flex flex-col justify-center items-center lg:flex lg:flex-col lg:justify-center lg:items-start">
                <h3
                    class="mobility__title w-max-[311px] text-center dark:text-white text-dark-navy text-[32px] font-bold leading-8 tracking-[-1.429px] md:w-[457px] md:text-5xl md:leading-[48px] md:tracking-[-2.143px] lg:w-[445px] lg:text-start">
                    Mobility for the digital era
                </h3>
                <p
                    class="mobility__text w-max-[311px] text-center dark:text-white/70 text-dim-grey text-[15px] font-normal leading-[25px] mt-8 md:w-[573px] md:mt-10 lg:w-[445px] lg:text-start lg:mt-6">
                    Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost,
                    smart access to scooters at your fingertips.
                </p>
            </div>
            <img class="mobility__image rounded-[50%] w-max-[311px] md:w-[445px]" src="@/assets/images/girl__second.png"
                alt="girl">
        </div>
    </section>
</template>
<style lang="scss">
.mobility {
    position: relative;

    ::after {
        position: absolute;
        content: '';
        display: inline-block;
        width: 100%;
        max-width: 101px;
        height: 445px;
        top: 0;
        right: 0;
        background-image: url('@/assets/icons/grey__circle-mask.svg');
        background-repeat: no-repeat;
    }

    ::before {
        z-index: 2;
        position: absolute;
        content: '';
        display: inline-block;
        width: 100%;
        max-width: 735px;
        height: 151px;
        top: 60%;
        right: 0;
        background-image: url('@/assets/icons/about__yellow-cursor.svg');
        background-repeat: no-repeat;
    }

    &__text {
        font-family: 'Lexend Deca';
    }
}

@media(max-width: 820px) {
    .mobility {
        position: relative;

        ::after {
            position: absolute;
            content: '';
            display: inline-block;
            width: 100%;
            max-width: 101px;
            height: 445px;
            top: 0;
            right: 0;
            background-image: url('@/assets/icons/grey__circle-mask.svg');
            background-repeat: no-repeat;
        }

        ::before {
            z-index: 2;
            position: absolute;
            content: '';
            display: inline-block;
            width: 100%;
            max-width: 735px;
            height: 151px;
            top: 38%;
            right: 0;
            background-image: url('@/assets/icons/about__yellow-cursor.svg');
            background-repeat: no-repeat;
        }

        &__text {
            font-family: 'Lexend Deca';
        }
    }
}

@media(max-width: 700px) {
    .mobility {
        position: relative;

        ::after {
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

        ::before {
            transform: rotate(180deg);
            position: absolute;
            content: '';
            display: inline-block;
            width: 100%;
            max-width: 367px;
            height: 151px;
            top: 18%;
            right: 0;
            background-image: url('@/assets/icons/yellow__third-cursor-path.svg');
            background-repeat: no-repeat;
        }

        &__text {
            font-family: 'Lexend Deca';
        }
    }
}
</style>