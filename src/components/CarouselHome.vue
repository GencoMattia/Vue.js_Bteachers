<script>

import axios from "axios";
export default {
    components:{
        FontAwesomeIcon,
        CarouselCard
    },
    data() {
        return {
            projects: [
                
            ],
        };
        
    },

    methods: {
        getTeacher(page = 1){
            axios.get("http://127.0.0.1:8000/api/profiles", {
                params: {
                    page: page
                }
            }).then((response) => {
                console.log(response.data.results);
    
                this.projects.push(...response.data.results.data);
                this.currentPage = response.data.results.currentPage;
            }).catch((err) => {
                console.error();
            })
        }
    },

    created() {
        this.getTeacher();
    },
};
import { FontAwesomeIcon } from "../js/font-awesome";
import CarouselCard from "./CarouselCard.vue";
</script>

<template>
    <div id="carouselExampleSlidesOnly " class="carousel slide shadow p-2 " data-bs-ride="carousel">
        <div class="carousel-inner rounded-4">
            <div class="carousel-item active">
                <CarouselCard v-for="project in projects" :key="project.id" :project="project" /> 
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use "../assets/styles/partials/variables" as *;

    $carousel-transition-duration:.2s;
    
    .carousel{
        margin: 0 auto;
        margin-bottom: 3rem;
    }

</style>