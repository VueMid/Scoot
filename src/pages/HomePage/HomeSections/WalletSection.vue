<template>
    <section class="wallet">
        <div
            class="container wallet__container flex flex-col justify-center items-center pt-[120px] pb-[120px] md:pb-[104px]lg:flex lg:flex-row-reverse lg:justify-between lg:items-center lg:pt-[150px] lg:pb-[180px]">
            <img class="wallet__image rounded-[50%] w-[311px] md:w-[445px]" src="@/assets/images/wallet.png"
                alt="guy__holding-phone">
            <div class="wallet__box flex flex-col justify-center items-center lg:flex-col lg:justify-center lg:items-start">
                <h3
                    class="wallet__title w-[314px] text-dark-navy text-center text-[32px] font-bold leading-8 mt-16 md:w-[471px] md:text-5xl md:leading-[48px] md:mt-16 lg:w-[471px] lg:text-5xl lg:text-start lg:mt-0 dark:text-white">
                    Zero hassle payments
                </h3>
                <p
                    class="wallet__text w-[311px] text-dim-grey dark:text-white/70 text-center text-[15px] font-normal leading-[25px] mt-8 md:w-[573px] md:mt-10 lg:w-[445px] lg:text-start lg:mt-6">
                    Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link
                    your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a
                    month.
                </p>
                <TheButton class="wallet__button mt-8 md:mt-10">Learn More</TheButton>
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
.wallet {
    position: relative;

    ::after {
        z-index: -1;
        content: '';
        position: absolute;
        display: inline-block;
        width: 101px;
        height: 445px;
        top: 0;
        right: 0px;
        background-image: url('@/assets/icons/grey__circle-mask.svg');
        background-repeat: no-repeat;
    }

    ::before {
        content: '';
        position: absolute;
        display: inline-block;
        width: 311px;
        height: 151px;
        top: 30%;
        right: 0%;
        background-image: url('@/assets/icons/yellow__second-left-cursor-path.svg');
        background-repeat: no-repeat;
    }

    &__text {
        font-family: 'Lexend Deca';
    }
}

@media(max-width: 820px) {
    .wallet {
        position: relative;

        ::after {
            z-index: -1;
            content: '';
            position: absolute;
            display: inline-block;
            width: 101px;
            height: 445px;
            top: 0;
            right: 0px;
            background-image: url('@/assets/icons/grey__circle-mask.svg');
            background-repeat: no-repeat;
        }

        ::before {
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
    .wallet {
        position: relative;

        ::after {
            z-index: -1;
            content: '';
            position: absolute;
            display: none;
            width: 101px;
            height: 445px;
            top: 0;
            right: 0px;
            background-image: url('@/assets/icons/grey__circle-mask.svg');
            background-repeat: no-repeat;
        }

        ::before {
            content: '';
            position: absolute;
            display: inline-block;
            width: 219px;
            height: 151px;
            top: 14%;
            right: 0px;
            background-image: url('@/assets/icons/yellow__third-left-cursor-path.svg');
            background-repeat: no-repeat;
        }
    }
}
</style>