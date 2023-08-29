<template>
    <div>
        <button @click="toogleDark()" class="w-5">
            <i v-if="isDark" class="fa-solid fa-sun fa-2xl cursor-pointer" style="color: #FCB72B;"></i>
            <i v-else class="fa-solid fa-moon fa-2xl cursor-pointer" style="color: #FCB72B;"></i>
        </button>
    </div>
</template>
<script setup>
import { useDark, useToggle } from '@vueuse/core';
const isDark = useDark()
const toogleDark = useToggle(isDark);
</script>
<style></style>