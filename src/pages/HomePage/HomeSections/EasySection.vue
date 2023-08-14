<template>
    <section class="easy ">
        <div
            class="container easy__container mt-[120px] flex flex-col justify-center items-center md:mt-[145px] lg:flex lg:flex-row-reverse lg:justify-between lg:items-center">
            <img class="easy__image rounded-[50%] md:w-[445px]" src="@/assets/images/guy__holding-phone.png"
                alt="guy__holding-phone" width="311" height="311">
            <div class="easy__box flex flex-col justify-center items-center lg:flex lg:flex-col lg:items-start">
                <TheTitle
                    class="easy__title text-dark-navy w-[311px] text-[31px] font-bold mt-[56px] leading-8 md:w-[549px] md:leading-[48px] lg:mt-[0] lg:leading-[56px]">
                    Easy to use riding telemetry
                </TheTitle>
                <TheText
                    class="easy__text text-[15px] font-normal leading-[25px] mt-8 md:mt-10 md:w-[573px] md:leading-[25px] lg:mt-6 lg:w-[445px]">
                    The Scoot app is available with riding telemetry. This means it can show you your average speed, how
                    long you've been using the scooter, your traveling distance, and many more things all in an easy to use
                    app.
                </TheText>
                <TheButton class="easy__button mt-8 md:mt-10">Learn More</TheButton>
            </div>
        </div>
    </section>
</template>
<script>
import TheButton from '../../../MaterialUI/TheButton.vue';
import TheText from '../../../MaterialUI/TheText.vue';
import TheTitle from '../../../MaterialUI/TheTitle.vue';
export default {
    components: { TheTitle, TheText, TheButton }
}
</script>
<style lang="scss">
.easy {
    position: relative;

    ::after {
        position: absolute;
        content: '';
        display: inline-block;
        width: 741px;
        height: 151px;
        top: 67%;
        right: 0;
        background-image: url('@/assets/icons/yellow__right-cursor-path.svg');
        background-repeat: no-repeat;
    }

    ::before {
        position: absolute;
        content: '';
        display: inline-block;
        width: 101px;
        height: 445px;
        top: 0;
        right: 0%;
        background-image: url('@/assets/icons/grey__circle-mask.svg');
        background-repeat: no-repeat;
    }

    &__text {
        color: #939CAA !important;
        font-family: 'Lexend Deca';
    }
}

@media(max-width: 820px) {
    .easy {
        position: relative;

        ::after {
            position: absolute;
            content: '';
            display: inline-block;
            width: 741px;
            height: 151px;
            top: 36%;
            right: 0;
            background-image: url('@/assets/icons/yellow__right-cursor-path.svg');
            background-repeat: no-repeat;
        }

        ::before {
            position: absolute;
            content: '';
            display: inline-block;
            width: 101px;
            height: 445px;
            top: 0;
            right: 0%;
            background-image: url('@/assets/icons/grey__circle-mask.svg');
            background-repeat: no-repeat;
        }

        &__text {
            color: #939CAA !important;
            font-family: 'Lexend Deca';
        }
    }
}

@media(max-width: 700px) {
    .easy {
        position: relative;

        ::after {
            position: absolute;
            content: '';
            display: inline-block;
            width: 325px;
            height: 151px;
            top: 22.5%;
            right: 0;
            background-image: url('@/assets/icons/yellow__second-right-cursor-path.svg');
            background-repeat: no-repeat;
        }

        ::before {
            position: absolute;
            content: '';
            display: none;
            width: 101px;
            height: 445px;
            top: 0;
            right: 0%;
            background-image: url('@/assets/icons/grey__circle-mask.svg');
            background-repeat: no-repeat;
        }

        &__text {
            color: #939CAA !important;
            font-family: 'Lexend Deca';
        }
    }
}
</style>