<template>
    <div class="About-page dark:bg-tailwind-dark">
        <AboutSection />
        <MobiliytSection />
        <UrbanSection />
        <ValueSection />
        <FaqSection />
        <SafeSection />
    </div>
</template>
<script>
import AboutSection from './AboutSections/AboutSection.vue';
import MobiliytSection from './AboutSections/MobiliytSection.vue';
import UrbanSection from './AboutSections/UrbanSection.vue';
import ValueSection from './AboutSections/ValueSection.vue';
import FaqSection from './AboutSections/FaqSection.vue';
import SafeSection from './AboutSections/SafeSection.vue';
export default {
    components: { AboutSection, MobiliytSection, UrbanSection, ValueSection, FaqSection, SafeSection }
}
</script>