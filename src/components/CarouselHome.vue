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
    <div id="carouselExampleAutoplaying" class="carousel slide mb-3" data-bs-ride="carousel">
        <div class="carousel-inner rounded-4">
            <!-- Use `index` to manage the active class for the first item -->
            <CarouselCard
                class="carousel-item"
                :class="{ 'active': index === 0 }" 
                v-for="(teacher, index) in teachers"
                :key="teacher.id"
                :teacher="teacher"
            />
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control" aria-hidden="true"><font-awesome-icon icon="fa-solid fa-chevron-left" /></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control" aria-hidden="true"><font-awesome-icon icon="fa-solid fa-chevron-right" /></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<style lang="scss" scoped>
    @use "../assets/styles/partials/variables" as *;

    $carousel-transition-duration:.3s;
    
    .carousel{
        margin: 0 auto;
        
        .carousel-inner {
            .carousel-item {
            transition: transform $carousel-transition-duration ease;
        }
    }
}
    span{
        color:$link-color;
    }

</style>