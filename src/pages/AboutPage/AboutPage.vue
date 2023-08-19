<template>
    <div class="About-page">
        <AboutSection />
        <MobiliytSection />
        <UrbanSection />
        <ValueSection />
    </div>
</template>
<script>
import AboutSection from './AboutSections/AboutSection.vue';
import MobiliytSection from './AboutSections/MobiliytSection.vue';
import UrbanSection from './AboutSections/UrbanSection.vue';
import ValueSection from './AboutSections/ValueSection.vue';
export default {
    components: { AboutSection, MobiliytSection, UrbanSection, ValueSection }
}
</script>
<style></style>