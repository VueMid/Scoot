<template>
    <nav class="header__navbar mr-auto ml-[58px] hidden md:block">
        <ul class="header__list flex justify-center items-center gap-8">
            <li class="header__lists font-bold text-[15px] text-dim-grey dark:text-white active:text-darker-yellow lg:hover:text-darker-yellow cursor-pointer"
                v-for="item in itemList" :key="item">
                <router-link :to="item.link">
                </router-link>
                {{ item.name }}
            </li>
        </ul>
    </nav>
</template>
<script>
import header from '../header.js'
export default {
    data() {
        return {
            itemList: header,
        }
    },
}
</script>
<style scoped>
.router-link-exact-active {
    color: #FCB72B;
}
</style>