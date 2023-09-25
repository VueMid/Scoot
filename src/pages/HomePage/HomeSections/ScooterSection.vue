<template>
    <section class="scooter pt-[190px] md:pt-[192px] xl:pt-[160px]">
        <div
            class="container scooter__container flex flex-col justify-center items-center gap-12  md:flex md:flex-col md:justify-center md:items-center md:gap-10 xl:flex xl:flex-row xl:justify-between xl:items-start xl:gap-0px">
            <div class="scooter__boxes flex flex-col justify-center items-center gap-6 md:flex md:flex-row md:justify-center md:items-start md:gap-20 x:flex xl:flex-col xl:justify-center xl:gap-10 target duration-200"
                v-motion-slide-visible-once-left>
                <img class="scooter__images w-max-[56px] md:w-[96px]" src="@/assets/icons/phone.svg" alt="mobile">
                <div
                    class="scooter__mini-boxes flex flex-col justify-center items-center gap-6 md:flex md:flex-col md:justify-center md:items-start md:gap-[17px] xl:flex xl:gap-[27px]">
                    <h4
                        class="scooter__titles max-w-[311px] text-dark-navy text-xl font-bold leading-7 tracking-tighter-[-0.893px] md:w-[398px] md:text-2xl md:font-bold md:leading-7 md:tracking-tighter-[-1.071px] lg:text-2xl lg:tracking-tighter-[-1.071px] xl:text-2xl dark:text-white">
                        Locate with app
                    </h4>
                    <p
                        class="scooter__texts text-center w-max-[311px] text-[15px] leading-[25px] text-dim-grey md:w-[398px] md:text-start xl:w-[350px]">
                        Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas
                        with most demand, so one should never be too far away.
                    </p>
                </div>
            </div>
            <div class="scooter__boxes flex flex-col justify-center items-center gap-6 md:flex md:flex-row md:justify-center md:items-start md:gap-20 x:flex xl:flex-col xl:justify-center xl:gap-10 target duration-300"
                v-motion-slide-visible-once-left>
                <img class="scooter__images w-max-[56px] md:w-[96px]" src="@/assets/icons/scoot.svg" alt="scoot">
                <div
                    class="scooter__mini-boxes flex flex-col justify-center items-center gap-6 md:flex md:flex-col md:justify-center md:items-start md:gap-[17px] xl:flex xl:gap-[27px]">
                    <h4
                        class="scooter__titles max-w-[311px] text-dark-navy text-xl font-bold leading-7 tracking-tighter-[-0.893px] md:w-[398px] md:text-2xl md:font-bold md:leading-7 md:tracking-tighter-[-1.071px] lg:text-2xl lg:tracking-tighter-[-1.071px] xl:text-2xl dark:text-white">
                        Pick your scooter
                    </h4>
                    <p
                        class="scooter__texts text-center w-max-[311px] text-[15px] leading-[25px] text-dim-grey md:w-[398px] md:text-start xl:w-[350px]">
                        We show the most important info for the scooters closest to you. So you know how much charge they
                        have left and can see roughly how much it will cost.
                    </p>
                </div>
            </div>
            <div class="scooter__boxes flex flex-col justify-center items-center gap-6 md:flex md:flex-row md:justify-center md:items-start md:gap-20 x:flex xl:flex-col xl:justify-center xl:gap-10 target duration-500"
                v-motion-slide-visible-once-left>
                <img class="scooter__images w-max-[56px] md:w-[96px]" src="@/assets/icons/scooter.svg" alt="scooter">
                <div
                    class="scooter__mini-boxes flex flex-col justify-center items-center gap-6 md:flex md:flex-col md:justify-center md:items-start md:gap-[17px] xl:flex xl:gap-[27px]">
                    <h4
                        class="scooter__titles max-w-[311px] text-dark-navy text-xl font-bold leading-7 tracking-tighter-[-0.893px] md:w-[398px] md:text-2xl md:font-bold md:leading-7 md:tracking-tighter-[-1.071px] lg:text-2xl lg:tracking-tighter-[-1.071px] xl:text-2xl dark:text-white">
                        Enjoy the ride
                    </h4>
                    <p
                        class="scooter__texts text-center w-max-[311px] text-[15px] leading-[25px] text-dim-grey md:w-[398px] md:text-start xl:w-[350px]">
                        Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re
                        off!
                        Always lock bikes away from walkways and accessibility ramps.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss">
.scooter {
    &__texts {
        font-family: 'Lexend Deca';
    }
}

@media(max-width: 1366px) {
    .scooter {
        position: relative;

        &::before {
            z-index: -1;
            position: absolute;
            content: '';
            display: block;
            width: 974px;
            height: 15px;
            top: 44.5%;
            left: 0;
            background-image: url('@/assets/icons/grey__path.svg');
            background-repeat: no-repeat;
        }

        &__texts {
            font-family: 'Lexend Deca';
        }
    }
}

@media(max-width: 1358px) {
    .scooter {
        position: relative;

        &::before {
            z-index: -1;
            position: absolute;
            content: '';
            display: none;
            width: 974px;
            height: 15px;
            top: 15%;
            left: 0;
            background-image: url('@/assets/icons/grey__path.svg');
            background-repeat: no-repeat;
        }
    }
}

@media(max-width: 1024px) {
    .scooter {
        position: relative;

        &::before {
            z-index: -1;
            position: absolute;
            content: '';
            display: none;
            width: 16px;
            height: 512px;
            top: -350%;
            left: -34%;
            background-image: url('@/assets/icons/grey__second-path.svg');
            background-repeat: no-repeat;
        }

        &__mini-boxes {
            position: relative;

            &::before {
                z-index: -1;
                position: absolute;
                content: '';
                display: none;
                width: 16px;
                height: 512px;
                top: -350%;
                left: -34%;
                background-image: url('@/assets/icons/grey__second-path.svg');
                background-repeat: no-repeat;
            }
        }
    }
}
</style>