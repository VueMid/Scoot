<template>
    <section class="scooter">
        <div class="container scooter__container flex flex-col justify-center items-center gap-12 mt-[120px]">
            <div class="scooter__boxes flex flex-col justify-center items-center">
                <img class="scooter__images w-[56px] md:w-[96px]" src="@/assets/icons/phone.svg" alt="mobile">
                <div class="scooter__mini-boxes flex flex-col justify-center items-center">
                    <h4 class="scooter__titles w-[311px] text-center text-dark-navy text-xl font-bold leading-7 mt-8">
                        Locate with app
                    </h4>
                    <p
                        class="scooter__texts w-[311px] text-center text-dim-grey text-[15px] font-normal leading-[25px] mt-8">
                        Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas
                        with most demand, so one should never be too far away.
                    </p>
                </div>
            </div>
            <div class="scooter__boxes flex flex-col justify-center items-center">
                <img class="scooter__images w-[56px] md:w-[96px]" src="@/assets/icons/scoot.svg" alt="scoot">
                <div class="scooter__mini-boxes flex flex-col justify-center items-center">
                    <h4 class="scooter__titles w-[311px] text-center text-dark-navy text-xl font-bold leading-7 mt-8">
                        Pick your scooter
                    </h4>
                    <p
                        class="scooter__texts w-[311px] text-center text-dim-grey text-[15px] font-normal leading-[25px] mt-8">
                        We show the most important info for the scooters closest to you. So you know how much charge they
                        have left and can see roughly how much it will cost.
                    </p>
                </div>
            </div>
            <div class="scooter__boxes flex flex-col justify-center items-center">
                <img class="scooter__images w-[56px] md:w-[96px]" src="@/assets/icons/scooter.svg" alt="scooter">
                <div class="scooter__mini-boxes flex flex-col justify-center items-center">
                    <h4 class="scooter__titles w-[311px] text-center text-dark-navy text-xl font-bold leading-7 mt-8">
                        Enjoy the ride
                    </h4>
                    <p
                        class="scooter__texts w-[311px] text-center text-dim-grey text-[15px] font-normal leading-[25px] mt-8">
                        Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re
                        off!
                        Always lock bikes away from walkways and accessibility ramps.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {}
    },
    methods: {}
}
</script>
<style lang="scss">
.scooter {
    &__texts {
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
    }
}
</style>