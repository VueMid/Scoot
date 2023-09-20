<template>
    <section class="faq mt-[145px] md:mt-[120px] xl:mt-[120px]">
        <div class="container faq__container flex flex-col justify-center items-center gap-12 md:gap-16">
            <h2
                class="faq__title text-center dark:text-white text-dark-navy text-[32px] font-bold leading-8 tracking-tighter-[-1.429px] md:text-[48px] md:leading-[48px] md:tracking-tighter-[-2.143px]">
                FAQs</h2>
            <!-- Bottom boxes -->
            <div
                class="faq__bottom-box flex flex-col justify-center items-center gap-8 xl:w-full xl:flex xl:flex-row xl:justify-between xl:items-start xl:gap-0">
                <h5
                    class="faq__mini-title dark:text-white text-dark-navy text-2xl font-bold leading-7 tracking-tighter-[-1.071px] md:text-[40px] md:leading-[48px] md:tracking-tighter-[-1.786px]">
                    How it works
                </h5>
                <FaqComponent :accordionArray="accordionArray" @action="toggleAccordion" />
            </div>
        </div>
    </section>
</template>
<script>
import FaqComponent from '../components/FaqComponent.vue';
export default {
    data() {
        return {
            isOpen: true,
            accordionArray:
                [
                    {
                        question: 'How do I download the app?',
                        answer: `To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.`,
                        isOpen: false,
                    },
                    {
                        question: 'Can I find a nearby Scoots?',
                        answer: `Scoot's map in web site that can makes it easy for users to find and use nearby scooters. Scoot does not matter where you are, it works everywhere you use this web site`,
                        isOpen: false,
                    },
                    {
                        question: 'Do I need a license to ride?',
                        answer: `Short answer is yes. A local or foreign motorcycle license will work fine. In Cape Town (where I live) they frequently have periods where they pull over all the motorbikes in town to do checks. So you can get away without a license, just not indefinitely.`,
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
    components: { FaqComponent }
}
</script>