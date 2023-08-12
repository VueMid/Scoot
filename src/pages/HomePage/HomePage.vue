<template>
    <div class="home-page">
        <HeroSection />
        <ScooterSection />
    </div>
</template>
<script>
import HeroSection from './HomeSections/HeroSection.vue';
import ScooterSection from './HomeSections/ScooterSection.vue';
export default {
    components: { HeroSection, ScooterSection, ScooterSection }
}
</script>
<style></style  >