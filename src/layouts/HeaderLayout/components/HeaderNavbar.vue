<template>
    <nav class="header__navbar mr-auto ml-[58px] hidden md:block">
        <ul class="header__list flex justify-center items-center gap-8">
            <li class="header__lists font-bold text-[15px] text-dim-grey hover:text-darker-yellow duration-100 cursor-pointer"
                v-for="item in itemList" :key="item">
                {{ item.name }}
            </li>
        </ul>
    </nav>
</template>
<script>
import menu from '../menu.js'
export default {
    data() {
        return {
            itemList: menu,
        }
    },
}
</script>
<style></style>