<template>
    <section class="easy">
        <div class="container easy__container flex flex-col justify-center items-center mt-[120px]">
            <img class="easy__image rounded-[50%] w-[311px] md:w-[445px]" src="@/assets/images/guy__holding-phone.png"
                alt="guy__holding-phone">
            <div class="easy__box flex flex-col justify-center items-center">
                <h3 class="easy__title w-[314px] text-dark-navy text-center text-[32px] font-bold leading-8 mt-8">
                    Easy to use riding telemetry
                </h3>
                <p class="easy__text w-[311px] text-dim-grey text-center text-[15px] font-normal leading-[25px] mt-8">
                    The Scoot app is available with riding telemetry. This means it can show you your average speed, how
                    long you've been using the scooter, your traveling distance, and many more things all in an easy to use
                    app.
                </p>
                <TheButton class="easy__button mt-8">Learn More</TheButton>
            </div>
        </div>
    </section>
</template>
<script>
import TheButton from '../../../MaterialUI/TheButton.vue';
export default {
    components: { TheButton }
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
    }
}
</style>