<template>
    <section class="wallet pb-[120px] md:pb-[104px] xl:pb-[200px] pt-[120px] md:pt-[145px] lg:pt-[200px]">
        <div
            class="container wallet__container flex flex-col justify-center items-center lg:flex lg:flex-row-reverse lg:justify-between lg:items-center">
            <img class="wallet__image rounded-[50%] w-max-[311px] md:w-[445px] target duration-[600ms]"
                v-motion-slide-visible-once-bottom src="@/assets/images/wallet.png" alt="guy__holding-phone">
            <div class="wallet__box flex flex-col justify-center items-center lg:flex-col lg:justify-center lg:items-start">
                <h3 class="wallet__title w-max-[314px] text-dark-navy text-center text-[32px] font-bold leading-8 mt-14 md:w-[471px] md:text-5xl md:leading-[48px] lg:w-[471px] lg:text-5xl lg:text-start lg:mt-0 dark:text-white target duration-[400ms]"
                    v-motion-slide-visible-once-left>
                    Zero hassle payments
                </h3>
                <p class="wallet__text w-max-[311px] text-dim-grey text-center text-[15px] font-normal leading-[25px] mt-8 md:w-[573px] md:mt-10 lg:w-[445px] lg:text-start lg:mt-6 dark:text-white/70 target duration-[500ms]"
                    v-motion-slide-visible-once-left>
                    Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link
                    your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a
                    month.
                </p>
                <TheButton class="wallet__button mt-8 md:mt-10 target duration-[600ms]" v-motion-slide-visible-once-left
                    data-modal-target="staticModal" data-modal-toggle="staticModal" type="button" @click="openModal">
                    Learn More
                </TheButton>
            </div>
        </div>
    </section>
    <!-- Modal -->
    <Transition name="modal" class="relative z-[1111]">
        <div class="wallet__main-modal" v-if="isModalOpened">
            <WalletComponent @closeModal="closeModal" />
        </div>
    </Transition>
</template>
<script>
import TheButton from '../../../MaterialUI/TheButton.vue';
import WalletComponent from '../components/WalletComponent.vue'
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
        WalletComponent
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

.wallet {
    position: relative;

    &::after {
        pointer-events: none;
        margin-top: 150px;
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

    &::before {
        z-index: 2;
        pointer-events: none;
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

        &::after {
            pointer-events: none;
            margin-top: 120px;
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

        &::before {
            z-index: 2;
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
    .wallet {
        position: relative;

        &::after {
            pointer-events: none;
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

        &::before {
            pointer-events: none;
            content: '';
            position: absolute;
            display: inline-block;
            width: 100%;
            max-width: 219px;
            height: 151px;
            top: 14%;
            right: 0px;
            background-image: url('@/assets/icons/yellow__third-left-cursor-path.svg');
            background-repeat: no-repeat;
        }
    }
}
</style>