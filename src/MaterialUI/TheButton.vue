<template>
    <button
        class="bg-darker-yellow duration-200 text-center w-[180px] h-[53px] border-[3px] border-darker-yellow text-white font-bold text-[15px] active:bg-inherit active:text-darker-yellow active:duration-200">
        <slot />
    </button>
</template>
<script>
export default {
    data() {
        return {};
    },
    methods: {},
}
</script>