<template>
    <section class="map">
        <div class="container map__container">

        </div>
    </section>
</template>
<style lang="scss">
.map {
    margin: 0 auto;
    background-image: url('@/assets/icons/map.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
    max-width: 1110px;
    height: 543px;
}

@media(max-width: 700px) {
    .map {
        margin: 0 auto;
        background-image: url('@/assets/icons/map__second.svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        width: 100%;
        max-width: 311px;
        height: 152px;
    }
}
</style>