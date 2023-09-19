<template>
    <div class="Location-page dark:bg-tailwind-dark">
        <LocationSection />
        <MapSection />
        <ListSection />
    </div>
</template>
<script>
import LocationSection from './LocationSections/LocationSection.vue';
import MapSection from './LocationSections/MapSection.vue';
import ListSection from './LocationSections/ListSection.vue';
export default {
    components: { LocationSection, MapSection, ListSection }
}
</script>