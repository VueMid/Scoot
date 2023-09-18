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
                <div class="faq__main-message flex flex-col justify-center items-start gap-4 md:gap-6 xl:gap-4">
                    <article
                        class="faq__message bg-snow active:bg-light-yellow md:hover:bg-light-yellow px-[32px] pt-[32px] pb-[6px] md:flex md:flex-col md:justify-center md:items-start w-[280px] sm:w-[311px] md:w-[689px] xl:w-[730px]">
                        <div class="faq__header cursor-pointer w-full flex flex-row justify-between items-center pb-6"
                            @click="toggleAccordion">
                            <h6
                                class="faq__message-title text-dark-navy font-bold text-lg leading-6 tracking-tighter-[-0.804px] md:text-[24px] md:leading-7 md:tracking-tighter-[-1.071px]">
                                How do I download the app?
                            </h6>
                            <i class="cursor-pointer fa-solid fa-angle-up fa-xl"
                                :class="[isOpen === true ? 'rotate-0' : 'rotate-180']" style="color: #fcb72b;"></i>
                        </div>
                        <div class="faq__body" :class="accordionClasses">
                            <p
                                class="faq__text text-dark-navy text-[15px] leading-[25px] mb-[32px] max-w-[251px] md:max-w-[617px] xl:w-[650px]">
                                To download the Scoot app, you can search “Scoot” in both the App and Google Play
                                stores. An even simpler way to do it would be to click the relevant link at the
                                bottom
                                of this page and you’ll be re-directed to the correct page.
                            </p>
                        </div>
                    </article>
                    <article
                        class="faq__message bg-snow active:bg-light-yellow md:hover:bg-light-yellow px-[32px] pt-[32px] pb-[6px] md:flex md:flex-col md:justify-center md:items-start w-[280px] sm:w-[311px] md:w-[689px] xl:w-[730px]">
                        <div class="faq__header cursor-pointer w-full flex flex-row justify-between items-center pb-6"
                            @click="toggleAccordionSecond">
                            <h6
                                class="faq__message-title text-dark-navy font-bold text-lg leading-6 tracking-tighter-[-0.804px] md:text-[24px] md:leading-7 md:tracking-tighter-[-1.071px]">
                                Can I find a nearby Scoots?
                            </h6>
                            <i class="cursor-pointer fa-solid fa-angle-up fa-xl"
                                :class="[wasOpen === true ? 'rotate-0' : 'rotate-180']" style="color: #fcb72b;"></i>
                        </div>
                        <div class="faq__body" :class="accordionClassesSecond">
                            <p
                                class="faq__text text-dark-navy text-[15px] leading-[25px] mb-[32px] max-w-[251px] md:max-w-[617px] xl:w-[650px]">
                                Scoot web page scoot map makes it easy for users to find and use nearby scooters. Scoot does
                                not matter where you are, it works everywhere you use this web site
                            </p>
                        </div>
                    </article>
                    <article
                        class="faq__message bg-snow active:bg-light-yellow md:hover:bg-light-yellow px-[32px] pt-[32px] pb-[6px] md:flex md:flex-col md:justify-center md:items-start w-[280px] sm:w-[311px] md:w-[689px] xl:w-[730px]">
                        <div class="faq__header cursor-pointer w-full flex flex-row justify-between items-center pb-6"
                            @click="toggleAccordionThird">
                            <h6
                                class="faq__message-title text-dark-navy font-bold text-lg leading-6 tracking-tighter-[-0.804px] md:text-[24px] md:leading-7 md:tracking-tighter-[-1.071px]">
                                Do I need a license to ride?
                            </h6>
                            <i class="cursor-pointer fa-solid fa-angle-up fa-xl"
                                :class="[wasOpenSecond === true ? 'rotate-0' : 'rotate-180']" style="color: #fcb72b;"></i>
                        </div>
                        <div class="faq__body" :class="accordionClassesThird">
                            <p
                                class="faq__text text-dark-navy text-[15px] leading-[25px] mb-[32px] max-w-[251px] md:max-w-[617px] xl:w-[650px]">
                                Short answer is yes. A local or foreign motorcycle license will work fine. In Cape
                                Town (where I live) they frequently have periods where they pull over all the
                                motorbikes in town to do checks. So you can get away without a license, just not
                                indefinitely.
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
            wasOpen: true,
            wasOpenSecond: true,
        }

    },
    methods: {
        toggleAccordion() {
            this.isOpen = !this.isOpen;
        },
        toggleAccordionSecond() {
            this.wasOpen = !this.wasOpen;
        },
        toggleAccordionThird() {
            this.wasOpenSecond = !this.wasOpenSecond;
        },
    },
    computed: {
        accordionClasses() {
            return {
                'hidden': this.isOpen,
            }
        },
        accordionClassesSecond() {
            return {
                'hidden': this.wasOpen,
            }
        },
        accordionClassesThird() {
            return {

                'hidden': this.wasOpenSecond,
            }
        }
    }
}
</script>
<style lang="scss">
.faq {
    &__text {
        font-family: 'Lexend Deca';
    }
}
</style>