<template>
    <section class="scooter">
        <div
            class="container scooter__container mt-[120px] flex flex-col justify-center items-center gap-12 md:mt-[122px] lg:flex lg:flex-row lg:justify-between lg:items-center lg:mt-40">
            <div
                class="scooter__boxes flex flex-col justify-center items-center md:flex-row md:items-start md:gap-[79px] lg:flex-col lg:justify-start lg:items-start">
                <img class="scooter__images md:w-[96px]" src="@/assets/icons/phone.svg" alt="phone" width="56" height="56">
                <div class="scooter__mini-boxes flex flex-col justify-center items-center md:flex-col">
                    <TheTitle
                        class="scooter__titles text-xl mt-6 md:text-start md:w-[398px] md:mt-0 md:text-2xl md:leading-7 text-dark-navy lg:text-2xl lg:w-[350px] font-bold lg:leading-7 lg:mt-10">
                        Locate with app
                    </TheTitle>
                    <TheText
                        class="scooter__texts mt-6 text-[15px] md:text-start md:w-[398px] md:mt-[27px] lg:w-[350px] lg:text-[15px] lg:font-normal lg:leading-[25px] lg:mt-[27px]">
                        Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas
                        with most demand, so one should never be too far away.
                    </TheText>
                </div>
            </div>
            <div
                class="scooter__boxes flex flex-col justify-center items-center md:flex-row md:items-start md:gap-[79px] lg:flex-col lg:justify-start lg:items-start">
                <img class="scooter__images md:w-[96px]" src="@/assets/icons/scoot.svg" alt="scoot" width="56" height="56">
                <div class="scooter__mini-boxes flex flex-col justify-center items-center md:flex-col">
                    <TheTitle
                        class="scooter__titles text-xl mt-6 md:text-start md:w-[398px] md:mt-0 md:text-2xl md:leading-7 text-dark-navy lg:text-2xl lg:w-[350px] font-bold lg:leading-7 lg:mt-10">
                        Pick
                        your scooter
                    </TheTitle>
                    <TheText
                        class="scooter__texts mt-6 text-[15px] md:text-start md:w-[398px] md:mt-[27px] lg:w-[350px] lg:text-[15px] lg:font-normal lg:leading-[25px] lg:mt-[27px]">
                        We show the most important info for the scooters closest to you. So you know how much charge they
                        have left and can see roughly how much it will cost.
                    </TheText>
                </div>
            </div>
            <div
                class="scooter__boxes flex flex-col justify-center items-center md:flex-row md:items-start md:gap-[79px] lg:flex-col lg:justify-start lg:items-start">
                <img class="scooter__images md:w-[96px]" src="@/assets/icons/scooter.svg" alt="scooter" width="56"
                    height="56">
                <div class="scooter__mini-boxes flex flex-col justify-center items-center md:flex-col">
                    <TheTitle
                        class="scooter__titles text-xl mt-6 md:text-start md:w-[398px] md:mt-0 md:text-2xl md:leading-7 text-dark-navy lg:text-2xl lg:w-[350px] font-bold lg:leading-7 lg:mt-10">
                        Enjoy the ride
                    </TheTitle>
                    <TheText
                        class="scooter__texts mt-6 text-[15px] md:text-start md:w-[398px] md:mt-[27px] lg:w-[350px] lg:text-[15px] lg:font-normal lg:leading-[25px] lg:mt-[27px]">
                        Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off!
                        Always lock bikes away from walkways and accessibility ramps.
                    </TheText>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import TheText from '../../../MaterialUI/TheText.vue';
import TheTitle from '../../../MaterialUI/TheTitle.vue';
export default {
    components: { TheTitle, TheText }
}
</script>
<style lang="scss">
.scooter {
    &__boxes {
        position: relative;

        ::after {
            z-index: -1;
            position: absolute;
            content: '';
            width: 974px;
            height: 15px;
            top: 14%;
            right: 74%;
            display: inline-block;
            background-image: url('@/assets/icons/grey__path.svg');
            background-repeat: no-repeat;
        }
    }

    &__texts {
        color: #939CAA;
        font-family: 'Lexend Deca';
    }
}

@media(max-width: 820px) {
    .scooter {
        &__boxes {
            position: relative;

            ::after {
                z-index: -1;
                position: absolute;
                content: '';
                width: 16px;
                height: 512px;
                top: -330%;
                right: 89.5%;
                display: inline-block;
                background-image: url('@/assets/icons/grey__second-path.svg');
                background-repeat: no-repeat;
            }
        }

        &__texts {
            color: #939CAA !important;
            font-family: 'Lexend Deca';
        }
    }
}

@media(max-width: 700px) {
    .scooter {
        &__boxes {
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
    }
}
</style>