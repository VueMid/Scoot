<template>
    <section class="safe mt-[48px] md:mt-[64px] pb-[120px] xl:pb-[160px]">
        <div class="container safe__container flex flex-col justify-center items-center gap-12 md:gap-16">
            <!-- Bottom boxes -->
            <div
                class="safe__bottom-box flex flex-col justify-center items-center gap-8 xl:w-full xl:flex xl:flex-row xl:justify-between xl:items-start xl:gap-0">
                <h5
                    class="safe__mini-title dark:text-white text-dark-navy text-2xl font-bold leading-7 tracking-tighter-[-1.071px] md:text-[40px] md:leading-[48px] md:tracking-tighter-[-1.786px]">
                    Safe driving
                </h5>
                <div class="safe__main-message flex flex-col justify-center items-start gap-4 md:gap-6 xl:gap-4">
                    <article v-for="(item, index) in accordionArray" :key="item"
                        class="safe__message dark:bg-tailwind-dark-second xl:dark:hover:bg-dark-navy bg-snow xl:hover:bg-light-yellow px-[32px] pt-[32px] pb-[6px] md:flex md:flex-col md:justify-center md:items-start w-[280px] sm:w-[311px] md:w-[689px] xl:w-[730px]">
                        <div class="safe__header cursor-pointer w-full flex flex-row justify-between items-center pb-6"
                            @click="toggleAccordion(index)">
                            <h6
                                class="safe__message-title dark:text-white text-dark-navy font-bold text-lg leading-6 tracking-tighter-[-0.804px] md:text-[24px] md:leading-7 md:tracking-tighter-[-1.071px] relative z-10">
                                {{ item.title }}
                            </h6>
                            <i class="cursor-pointer fa-solid fa-angle-up fa-xl"
                                :class="[item.isOpen === true ? 'rotate-0' : 'rotate-180']" style="color: #fcb72b;"></i>
                        </div>
                        <div class="safe__body" v-if="item.isOpen">
                            <p
                                class="safe__text text-dark-navy text-[15px] leading-[25px] mb-[32px] max-w-[251px] md:max-w-[617px] xl:w-[650px] dark:text-white/70">
                                {{ item.text }}
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            isOpen: true,
            accordionArray: [
                {
                    title: 'Should I wear a helmet?',
                    text: `Adults aren't required by law to wear helmets, but they're important and potentially life-saving. Helmets help to protect the head when involved in many types of crashes or falls while engaged in active sports.`,
                    isOpen: false,
                },
                {
                    title: 'How about the rules & regulations?',
                    text: `How do I operate a scooter? Most scooters have an automatic transmission, so all you need to do is twist the throttle to get going. To stop, simply release the throttle and brake with your foot. Some scooters also have a handbrake for extra stopping power`,
                    isOpen: false,
                },
                {
                    title: 'What if I damage my Scoot?',
                    text: `If your checked baggage arrives damaged, you will need to report the damage within 7 days of receiving your bag. Our appointed claims adjustor, Charles Taylor Aviation, will assess the damage and attend to the claim, subsequently keeping you informed of the outcome.`,
                    isOpen: false,
                },
            ]
        }

    },
    methods: {
        toggleAccordion(index) {
            this.accordionArray.forEach((item, idx) => {
                if (idx === index) {
                    item.isOpen = !item.isOpen;
                } else {
                    item.isOpen = false;
                }
            });
        }
    },
}
</script>
<style lang="scss">
.safe {
    &__text {
        font-family: 'Lexend Deca';
    }
}
</style>