<template>
    <section class="value">
        <div
            class="container value__container flex flex-col justify-center items-center mt-[120px] gap-14 md:gap-[87px] lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-[10] lg:mt-[120px]">
            <h3
                class="value w-[311px] text-center dark:text-white text-dark-navy text-[32px] font-bold leading-8 tracking-[-1.429px] md:w-[457px] md:text-5xl md:leading-[48px] md:tracking-[-2.143px] lg:w-[540px] lg:text-5xl lg:leading-[48px] lg:tracking-[-2.143px]">
                Our values
            </h3>
            <div
                class="value__main-box flex flex-col justify-center items-center gap-[55px] md:flex md:flex-wrap md:flex-col md:justify-center md:items-center md:gap-[55px] xl:flex xl:flex-row xl:flex-nowrap xl:justify-between xl:items-center">
                <div class="value__boxes flex flex-col justify-center items-center">
                    <img class="value__images w-[240px] md:w-[350px]" src="@/assets/images/about__first.png" alt="Our tech">
                    <h5
                        class="value__titles w-[311px] dark:text-white text-dark-navy text-center text-2xl font-bold leading-7 mt-4 md:w-[457px] md:mt-8 lg:w-[350px]">
                        Our tech</h5>
                    <p
                        class="value__text w-[311px] dark:text-white/70 text-center text-dim-grey text-[15px] leading-[25px] mt-[27px] md:w-[457px] lg:w-[350px]">
                        We’re using cutting edge technology to drive accessible urban transportation forward. Our fully
                        electric
                        scooters are a joy to ride!
                    </p>
                </div>
                <div class="value__boxes flex flex-col justify-center items-center">
                    <img class="value__images w-[240px] md:w-[350px]" src="@/assets/images/about__second.png"
                        alt="Our integrity">
                    <h5
                        class="value__titles w-[311px] dark:text-white text-dark-navy text-center text-2xl font-bold leading-7 mt-4 md:w-[457px] md:mt-8 lg:w-[350px]">
                        Our integrity</h5>
                    <p
                        class="value__text w-[311px] dark:text-white/70 text-center text-dim-grey text-[15px] leading-[25px] mt-[27px] md:w-[457px] lg:w-[350px]">
                        We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every
                        city
                        we serve.
                    </p>
                </div>
                <div class="value__boxes flex flex-col justify-center items-center">
                    <img class="value__images w-[240px] md:w-[350px]" src="@/assets/images/about__third.png"
                        alt="Our community">
                    <h5
                        class="value__titles w-[311px] dark:text-white text-dark-navy text-center text-2xl font-bold leading-7 mt-4 md:w-[457px] md:mt-8 lg:w-[350px]">
                        Our community</h5>
                    <p
                        class="value__text w-[311px] dark:text-white/70 text-center text-dim-grey text-[15px] leading-[25px] mt-[27px] md:w-[457px] lg:w-[350px]">
                        We uses local workforce with neighborhood organizations to greatly improve the overall growth and
                        improve urban living.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss">
.value {
    &__text {
        font-family: 'Lexend Deca';
    }
}
</style>