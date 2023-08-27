<template>
    <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
        class="easy__modal fixed top-0 left-0 right-0 z-[9999] w-full p-4 overflow-x-hidden overflow-y-auto h-full max-h-full bg-black/50 flex justify-center items-center lg:px-[120px]">
        <div
            class="easy__modal-box relative w-full bg-white flex flex-col justify-center items-center gap-[20px] py-[30px] md:flex md:flex-col md:justify-center md:items-center md:gap-[50px] md:py-[60px] lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-[70px] lg:py-[20px]">
            <button type="easy__x-button button"
                class="text-[#FCB72B] font-bold absolute top-2.5 right-2.5 md:top-5 md:right-5"
                data-modal-hide="staticModal" @click="$emit('closeModal')">
                <svg class="w-4 h-4 md:w-8 md:h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span class="sr-only">Close modal</span>
            </button>
            <img class="easy__modal-image w-[211px] md:w-[445px]" src="@/assets/images/guy__holding-phone.png" alt="">
            <div
                class="easy__modal-right-box flex flex-col justify-center items-center gap-8 md:flex md:flex-col md:justify-center md:items-center md:gap-10 lg:flex lg:flex-col lg:justify-center lg:items-start">
                <h3
                    class="easy__modal-title w-[300px] text-dark-navy text-[28px] font-bold leading-8 text-center md:w-[457px] md:text-[44px] md:leading-[48px] pb-6 border-b-[5px] border-[#FCB72B] lg:text-start">
                    Easy to use
                    riding telemetry
                </h3>
                <p
                    class="easy__modal-text text-center text-dim-grey w-[311px] text-15px font-normal leading-[25px] md:w-[573px] lg:text-start">
                    The Scoot app is available with riding telemetry. This means it can show you your
                    average
                    speed, how long you've been using the scooter, your traveling distance, and many more
                    things
                    all in an easy to use app.
                </p>
                <TheButtonVue class="easy__modal-button" @click="$emit('closeModal')">I accept</TheButtonVue>
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
<style></style>