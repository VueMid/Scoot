<template>
    <section class="signup bg-dark-navy">
        <div
            class="container signup__container flex flex-col justify-center items-center gap-10 py-[88px] md:py-[62px] lg:flex lg:flex-row lg:justify-between lg:items-center lg:py-[102px]">
            <h3 class="signup__title w-max-[333px] text-white text-center text-[32px] font-bold leading-8 tracking-[-2.429px] md:w-[457px] md:text-5xl md:leading-[48px] md:tracking-[-2.143px] md:text-center lg:text-start target duration-500"
                v-motion-slide-visible-once-left>
                Sign up and Scoot off today
            </h3>
            <div class="signup__box-icons flex flex-row justify-center items-center gap-3 target duration-500"
                v-motion-slide-visible-once-top>
                <a class="signup__icon cursor-pointer" target="_blank" href="https://www.apple.com/app-store/">
                    <img class="signup__images w-max-[114px] lg:w-[159px]" src="@/assets/icons/appstore.svg" alt="appstore">
                </a>
                <a class="signup__icon cursor-pointer" target="_blank" href="https://play.google.com/store/games">
                    <img class="signup__images w-max-[130px] lg:w-[182px]" src="@/assets/icons/googleplay.svg"
                        alt="googleplay">
                </a>
            </div>
        </div>
    </section>
</template>
<style lang="scss">
.signup {
    position: relative;

    &::after {
        pointer-events: none;
        z-index: 1;
        position: absolute;
        content: '';
        display: inline-block;
        width: 998px;
        height: 158px;
        bottom: 0;
        right: 0;
        background-image: url('@/assets/icons/triple__circles.svg');
        background-repeat: no-repeat;
    }

    &__icon {
        z-index: 3;
        transition: 140ms ease all;

        :active {
            transition: 140ms ease all;
            box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
        }
    }
}

@media(max-width: 820px) {
    .signup {
        background-image: url('@/assets/images/signup__second-background.png');
        background-position: center bottom;
        background-repeat: no-repeat;
        background-size: cover;

        &::after {
            pointer-events: none;
            z-index: 1;
            position: absolute;
            content: '';
            display: none;
            width: 998px;
            height: 158px;
            bottom: 0;
            right: 0;
            background-image: url('@/assets/icons/triple__circles.svg');
            background-repeat: no-repeat;
        }

        &__icon {
            transition: 140ms ease all;

            :active {
                transition: 140ms ease all;
                box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
            }
        }
    }
}

@media(max-width: 700px) {
    .signup {
        background-image: url('@/assets/images/signup__background.png');
        background-position: center bottom;
        background-repeat: no-repeat;
        background-size: cover;

        &::after {
            pointer-events: none;
            z-index: 1;
            position: absolute;
            content: '';
            display: none;
            width: 998px;
            height: 158px;
            bottom: 0;
            right: 0;
            background-image: url('@/assets/icons/triple__circles.svg');
            background-repeat: no-repeat;
        }

        &__icon {
            transition: 140ms ease all;

            :active {
                transition: 140ms ease all;
                box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
            }
        }
    }
}
</style>