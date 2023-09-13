<template>
    <nav class="header__navbar md:mr-auto md:ml-[38px] xl:ml-[88px]">
        <ul
            class="footer__list flex flex-col justify-center items-center pt-[42px] gap-4 md:flex md:flex-row md:justify-center md:items-center md:gap-8 md:pt-0">
            <li class="footer__lists text-dim-grey text-[15px] font-bold leading-[25px] cursor-pointer active:text-darker-yellow lg:hover:text-darker-yellow"
                v-for="item in itemList" :key="item">
                <router-link :to="item.link">
                    {{ item.name }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
import footer from '../footer.js'
export default {
    data() {
        return {
            itemList: footer,
        }
    },
}
</script>
<style scoped>
.router-link-exact-active {
    color: #FCB72B;
}
</style>