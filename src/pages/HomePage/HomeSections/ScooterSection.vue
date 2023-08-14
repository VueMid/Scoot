<template>
    <section class="scooter">
        <div
            class="container scooter__container mt-[120px] flex flex-col justify-center items-center gap-12 md:flex md:flex-col md:justify-center md:items-center md:gap-10 lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-0">
            <div
                class="scooter__boxes flex flex-col justify-center items-center gap-6 md:flex md:flex-row md:justify-center md:items-start md:gap-20 lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-0">
                <img class="scooter__images w-[56px] md:w-[96px]" src="@/assets/icons/phone.svg" alt="mobile">
                <div
                    class="scooter__mini-boxes flex flex-col justify-center items-center md:flex md:flex-col md:justify-start md:items-start lg:flex lg:flex-col lg:justify-center lg:items-start">
                    <TheTitle
                        class="scooter__titles w-[311px] text-xl text-dark-navy font-bold md:w-[398px] md:text-2xl md:text-start lg:text-2xl lg:w-[350px] lg:mt-10">
                        Locate with app
                    </TheTitle>
                    <TheText
                        class="scooter__texts w-[311px] text-[15px] font-normal leading-[25px] md:w-[398px] md:text-start md:mt-[7px] lg:w-[350px] lg:mt-[20px]">
                        Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas
                        with most demand, so one should never be too far away.
                    </TheText>
                </div>
            </div>
            <div
                class="scooter__boxes flex flex-col justify-center items-center gap-6 md:flex md:flex-row md:justify-center md:items-start md:gap-20 lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-0">
                <img class="scooter__images w-[56px] md:w-[96px]" src="@/assets/icons/scoot.svg" alt="scoot">
                <div
                    class="scooter__mini-boxes flex flex-col justify-center items-center md:flex md:flex-col md:justify-start md:items-start lg:flex lg:flex-col lg:justify-center lg:items-start">
                    <TheTitle
                        class="scooter__titles w-[311px] text-xl text-dark-navy font-bold md:w-[398px] md:text-2xl md:text-start lg:text-2xl lg:w-[350px] lg:mt-10">
                        Pick your scooter
                    </TheTitle>
                    <TheText
                        class="scooter__texts w-[311px] text-[15px] font-normal leading-[25px] md:w-[398px] md:text-start md:mt-[7px] lg:w-[350px] lg:mt-[20px]">
                        We show the most important info for the scooters closest to you. So you know how much charge they
                        have left and can see roughly how much it will cost.
                    </TheText>
                </div>
            </div>
            <div
                class="scooter__boxes flex flex-col justify-center items-center gap-6 md:flex md:flex-row md:justify-center md:items-start md:gap-20 lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-0">
                <img class="scooter__images w-[56px] md:w-[96px]" src="@/assets/icons/scooter.svg" alt="scooter">
                <div
                    class="scooter__mini-boxes flex flex-col justify-center items-center md:flex md:flex-col md:justify-start md:items-start lg:flex lg:flex-col lg:justify-center lg:items-start">
                    <TheTitle
                        class="scooter__titles w-[311px] text-xl text-dark-navy font-bold md:w-[398px] md:text-2xl md:text-start lg:text-2xl lg:w-[350px] lg:mt-10">
                        Enjoy the ride
                    </TheTitle>
                    <TheText
                        class="scooter__texts w-[311px] text-[15px] font-normal leading-[25px] md:w-[398px] md:text-start md:mt-[7px] lg:w-[350px] lg:mt-[20px]">
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
    &__texts {
        color: #939CAA !important;
        font-family: 'Lexend Deca';
    }
}

@media(max-width: 820px) {
    .scooter {
        &__mini-boxes {
            position: relative;

            ::before {
                z-index: -1;
                position: absolute;
                content: '';
                display: inline-block;
                width: 16px;
                height: 512px;
                top: -305%;
                left: -33.5%;
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
</style>