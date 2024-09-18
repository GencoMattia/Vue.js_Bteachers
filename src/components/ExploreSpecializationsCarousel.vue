<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import SpecializationCard from './SpecializationCard.vue';
import { store } from "@/store";

export default {
    components: {
        SpecializationCard,
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },

    data() {
        return {
            store,
        };
    }
};
</script>

<template>
    <carousel :items-to-show="1.5">
        <slide v-for="specialization in store.specializations" :key="specialization">
            <SpecializationCard :specialization="specialization"/>
        </slide>

        <template #addons>
            <navigation />
            <pagination />
        </template>
    </carousel>

</template>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
</style>