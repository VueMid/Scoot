<template>
    <div class="Home-page dark:bg-tailwind-dark">
        <HeroSection />
        <ScooterSection />
        <EasySection />
        <CitySection />
        <WalletSection />
    </div>
</template>
<script>
import HeroSection from './HomeSections/HeroSection.vue';
import ScooterSection from './HomeSections/ScooterSection.vue';
import EasySection from './HomeSections/EasySection.vue';
import CitySection from './HomeSections/CitySection.vue';
import WalletSection from './HomeSections/WalletSection.vue';
export default {
    components: { HeroSection, ScooterSection, EasySection, CitySection, WalletSection }
}
</script>
<style></style  >