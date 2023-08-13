<template>
    <section class="scooter">
        <div
            class="container scooter__container flex flex-col justify-center items-center gap-12 mt-[120px] md:mt-[122px] md:flex md:flex-col md:justify-center md:items-center md:gap-10 lg:mt-40 lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-0">
            <div
                class="scooter__boxes flex flex-col justify-center items-center md:flex md:flex-row md:justify-center md:items-start md:gap-[79px] lg:flex lg:flex-col lg:items-start">
                <img class="scooter__image md:w-[96px]" src="@/assets/icons/phone.svg" alt="mobile" width="56" height="56">
                <div
                    class="scooter__mini-boxes flex flex-col justify-center items-center lg:flex lg:flex-col lg:items-start">
                    <TheTitle
                        class="scooter__titles text-xl mt-0 md:w-[398px] md:text-2xl md:font-bold md:leading-7 lg:mt-10 text-dark-navy md:text-start lg:text-2xl lg:font-bold lg:leading-7 lg:w-[350px]">
                        Locate with app
                    </TheTitle>
                    <TheText
                        class="scooter__texts mt-6 w-[311px] md:text-start md:mt-[27px] md:w-[398px] md:leading-[25px] lg:mt-[27px] lg:w-[350px] font-normal lg:leading-[25px]">
                        Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas
                        with most demand, so one should never be too far away.
                    </TheText>
                </div>
            </div>
            <div
                class="scooter__boxes flex flex-col justify-center items-center md:flex md:flex-row md:justify-center md:items-start md:gap-[79px] lg:flex lg:flex-col lg:items-start">
                <img class="scooter__image md:w-[96px]" src="@/assets/icons/scoot.svg" alt="scoot" width="56" height="56">
                <div
                    class="scooter__mini-boxes flex flex-col justify-center items-center lg:flex lg:flex-col lg:items-start">
                    <TheTitle
                        class="scooter__titles text-xl mt-0 md:w-[398px] md:text-2xl md:font-bold md:leading-7 lg:mt-10 text-dark-navy md:text-start lg:text-2xl lg:font-bold lg:leading-7 lg:w-[350px]">
                        Pick your scooter
                    </TheTitle>
                    <TheText
                        class="scooter__texts mt-6 w-[311px] md:text-start md:mt-[27px] md:w-[398px] md:leading-[25px] lg:mt-[27px] lg:w-[350px] font-normal lg:leading-[25px]">
                        We show the most important info for the scooters closest to you. So you know how much charge they
                        have left and can see roughly how much it will cost.
                    </TheText>
                </div>
            </div>
            <div
                class="scooter__boxes flex flex-col justify-center items-center md:flex md:flex-row md:justify-center md:items-start md:gap-[79px] lg:flex lg:flex-col lg:items-start">
                <img class="scooter__image md:w-[96px]" src="@/assets/icons/scooter.svg" alt="scooter" width="56"
                    height="56">
                <div
                    class="scooter__mini-boxes flex flex-col justify-center items-center lg:flex lg:flex-col lg:items-start">
                    <TheTitle
                        class="scooter__titles text-xl mt-0 md:w-[398px] md:text-2xl md:font-bold md:leading-7 lg:mt-10 text-dark-navy md:text-start lg:text-2xl lg:font-bold lg:leading-7 lg:w-[350px]">
                        Enjoy the ride
                    </TheTitle>
                    <TheText
                        class="scooter__texts mt-6 w-[311px] md:text-start md:mt-[27px] md:w-[398px] md:leading-[25px] lg:mt-[27px] lg:w-[350px] font-normal lg:leading-[25px]">
                        Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re
                        off!
                        Always lock bikes away from walkways and accessibility ramps.
                    </TheText>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import TheTitle from '../../../MaterialUI/TheTitle.vue';
import TheText from '../../../MaterialUI/TheText.vue';
export default {
    components: { TheTitle, TheText }
}
</script>
<style lang="scss">
.scooter {
    &__mini-boxes {
        position: relative;

        ::after {
            z-index: -1;
            position: absolute;
            content: '';
            width: 974px;
            height: 15px;
            top: 13%;
            right: 80%;
            display: none;
            background-image: url('@/assets/icons/grey__path.svg');
            background-repeat: no-repeat;
        }
    }

    &__image {
        width: 96px !important;
        height: 96px !important;
    }

    &__texts {
        color: #939CAA !important;
        font-family: 'Lexend Deca';
    }
}

@media(max-width: 820px) {
    .scooter {
        &__mini-boxes {
            position: relative;

            ::after {
                z-index: -1;
                position: absolute;
                content: '';
                width: 16px;
                height: 512px;
                top: -330%;
                right: 129.3%;
                display: inline-block;
                background-image: url('@/assets/icons/grey__second-path.svg');
                background-repeat: no-repeat;
            }
        }

        &__image {
            width: 96px !important;
            height: 96px !important;
        }

        &__texts {
            color: #939CAA !important;
            font-family: 'Lexend Deca';
        }
    }
}

@media(max-width: 768px) {
    .scooter {
        &__mini-boxes {
            position: relative;

            ::after {
                z-index: -1;
                position: absolute;
                content: '';
                width: 16px;
                height: 512px;
                top: -330%;
                right: 129.5%;
                display: inline-block;
                background-image: url('@/assets/icons/grey__second-path.svg');
                background-repeat: no-repeat;
            }
        }

        &__image {
            width: 96px !important;
            height: 96px !important;
        }

        &__texts {
            color: #939CAA !important;
            font-family: 'Lexend Deca';
        }
    }
}

@media(max-width: 700px) {
    .scooter {
        &__mini-boxes {
            position: relative;

            ::after {
                z-index: -1;
                position: absolute;
                content: '';
                width: 974px;
                height: 15px;
                top: 14%;
                right: 74%;
                display: none;
                background-image: url('@/assets/icons/grey__path.svg');
                background-repeat: no-repeat;
            }
        }

        &__image {
            width: 96px !important;
            height: 96px !important;
        }

        &__texts {
            color: #939CAA !important;
            font-family: 'Lexend Deca';
        }
    }
}
</style>