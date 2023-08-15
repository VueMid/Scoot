<template>
    <nav class="footer__navbar mt-[42px] md:mt-0 md:mr-auto md:ml-[58px]">
        <ul
            class="footer__list flex flex-col justify-center items-center gap-4 md:flex md:flex-row md:justify-center md:items-center md:gap-8">
            <li class="footer__lists text-dim-grey text-[15px] font-bold leading-[25px] cursor-pointer active:text-darker-yellow lg:hover:text-darker-yellow"
                v-for="item in itemList" :key="item">
                {{ item.name }}
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