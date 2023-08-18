<template>
    <footer class="footer bg-dark-grey">
        <div
            class="container footer__container flex flex-col justify-center items-center md:flex md:flex-row md:justify-between md:items-center">
            <FooterLogo />
            <FooterNavbar />
            <FooterIcons />
        </div>
    </footer>
</template>
<script>
import FooterLogo from './components/FooterLogo.vue'
import FooterNavbar from './components/FooterNavbar.vue';
import FooterIcons from './components/FooterIcons.vue';
export default {
    components: {
        FooterLogo,
        FooterNavbar,
        FooterIcons
    },
}
</script>