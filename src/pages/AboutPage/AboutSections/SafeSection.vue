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
                <SafeComponent :accordionArray="accordionArray" @action="toggleAccordion" />
            </div>
        </div>
    </section>
</template>
<script>
import SafeComponent from '../components/SafeComponent.vue';
export default {
    data() {
        return {
            isOpen: true,
            accordionArray: [
                {
                    question: 'Should I wear a helmet?',
                    answer: `Adults aren't required by law to wear helmets, but they're important and potentially life-saving. Helmets help to protect the head when involved in many types of crashes or falls while engaged in active sports.`,
                    isOpen: false,
                },
                {
                    question: 'How about the rules & regulations?',
                    answer: `How do I operate a scooter? Most scooters have an automatic transmission, so all you need to do is twist the throttle to get going. To stop, simply release the throttle and brake with your foot. Some scooters also have a handbrake for extra stopping power`,
                    isOpen: false,
                },
                {
                    question: 'What if I damage my Scoot?',
                    answer: `If your checked baggage arrives damaged, you will need to report the damage within 7 days of receiving your bag. Our appointed claims adjustor, Charles Taylor Aviation, will assess the damage and attend to the claim, subsequently keeping you informed of the outcome.`,
                    isOpen: false,
                },
            ]
        };
    },
    methods: {
        toggleAccordion(index) {
            this.accordionArray.forEach((item, idx) => {
                if (idx === index) {
                    item.isOpen = !item.isOpen;
                }
                else {
                    item.isOpen = false;
                }
            });
        }
    },
    components: { SafeComponent }
}
</script>