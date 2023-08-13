<template>
    <div class="home-page">
        <HeroSection />
        <ScooterSection />
        <EasySection />
    </div>
</template>
<script>
import EasySection from './HomeSections/EasySection.vue';
import HeroSection from './HomeSections/HeroSection.vue';
import ScooterSection from './HomeSections/ScooterSection.vue';
export default {
    components: { HeroSection, ScooterSection, ScooterSection, EasySection }
}
</script>
<style></style  >