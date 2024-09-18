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
            itemsToShow: 3,
        };
    },

    mounted() {
        this.updateItemsToShow();
        window.addEventListener('resize', this.updateItemsToShow);
    },

    beforeUnmount() {
        window.removeEventListener('resize', this.updateItemsToShow);
    },

    methods: {
        updateItemsToShow() {
            // Cambia il numero di carte in base alla larghezza dello schermo
            if (window.innerWidth < 1201){
                this.itemsToShow = 1;
            } else {
                this.itemsToShow = 3;
            }
        }
    }
};
</script>

<template>
    <carousel  :items-to-show="itemsToShow" :wrap-around="true" :autoplay="2000">
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

// Usa ::v-deep per applicare stili interni al carosello
:deep(.carousel__prev), 
:deep(.carousel__next) {
    color: grey; // Colore personalizzato
    font-size: 2rem; // Modifica la dimensione delle frecce se necessario
    background-color: transparent; // Rimuovi o modifica lo sfondo
}

:deep(.carousel__prev:hover), 
:deep(.carousel__next:hover) {
    color: white; // Colore al passaggio del mouse
}
</style>