<template>
    <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
        class="city__modal fixed top-0 left-0 right-0 w-full p-4 overflow-x-hidden overflow-y-auto h-full max-h-full bg-black/50 flex justify-center items-center lg:px-[0px]">
        <div
            class="city__modal-box px-3 z-[1111] relative w-full bg-white dark:bg-dark-navy flex flex-col justify-center items-center gap-[12px] pt-[30px] pb-[20px] md:flex md:flex-col md:justify-center md:items-center md:gap-[50px] md:py-[60px] lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-[70px] lg:py-[15px] lg:w-[1100px]">
            <button type="city__x-button button" class="text-[#FCB72B] font-bold absolute top-3 right-3 md:top-5 md:right-5"
                data-modal-hide="staticModal" @click="$emit('closeModal')">
                <svg class="w-5 h-5 md:w-8 md:h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span class="sr-only">Close modal</span>
            </button>
            <img class="city__modal-image w-[211px] md:w-[445px] lg:ml-4" src="@/assets/images/city.png" alt="">
            <div
                class="city__modal-right-box flex flex-col justify-center items-center gap-3 md:flex md:flex-col md:justify-center md:items-center md:gap-10 lg:flex lg:flex-col lg:justify-center lg:items-start">
                <h3
                    class="city__modal-title w-max-[300px] text-dark-navy text-[28px] font-bold leading-8 text-center md:w-[457px] md:text-[44px] md:leading-[48px] pb-3 border-b-[5px] border-[#FCB72B] lg:text-start dark:text-white">
                    Coming to a city near you
                </h3>
                <p
                    class="city__modal-text text-center text-dim-grey w-max-[311px] text-15px font-normal leading-[25px] md:w-[573px] lg:text-start dark:text-white/70">
                    Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you
                    want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming
                    year.
                </p>
                <TheButtonVue class="city__modal-button" @click="$emit('closeModal')">I accept</TheButtonVue>
            </div>
        </div>
    </div>
</template>
<script>
import TheButtonVue from '../../../MaterialUI/TheButton.vue';
export default {
    components: {
        TheButtonVue
    }
}
</script>
<style lang="scss">
.city {
    &__modal-text {
        font-family: 'Lexend Deca';
    }
}
</style>