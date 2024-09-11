<script>
import { FontAwesomeIcon } from "../js/font-awesome";
import CarouselCard from "./CarouselCard.vue";
import axios from "axios";

export default {
    components:{
        FontAwesomeIcon,
        CarouselCard
    },
    data() {
        return {
            teachers: [
                
            ],
            
            currentPage: 1,
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
    
                this.teachers.push(...response.data.results.data);
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
</script>

<template>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner rounded-4">
            <CarouselCard class="carousel-item active" v-for="teacher in teachers" :key="teacher.id" :teacher="teacher"/> 
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</template>

<style lang="scss" scoped>
    @use "../assets/styles/partials/variables" as *;

    $carousel-transition-duration:.2s;
    
    .carousel{
        margin: 0 auto;
        margin-bottom: 3rem;
    }
    span{
        background-color: rgb(201, 53, 53);
    }

</style>