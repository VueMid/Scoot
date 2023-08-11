<template>
    <div class="home-page">
        <HeroSection />
        <ScooterSection />
    </div>
</template>
<script>
import HeroSection from './HomeSections/HeroSection.vue';
import ScoooterSection from './HomeSections/ScooterSection.vue';
export default {
    components: { HeroSection, ScoooterSection }
}
</script>
<style></style  >