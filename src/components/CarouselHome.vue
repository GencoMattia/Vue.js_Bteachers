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
    <section class="row justify-content-center">
        <div class="col-8">
            <div class="rounded-5">
                <!-- Use `index` to manage the active class for the first item -->
                <div id="sponsored" class="card " >
                    <CarouselCard
                        class="card"
                        :class="{ 'active': index === 0 }" 
                        v-for="(teacher, index) in teachers"
                        :key="teacher.id"
                        :teacher="teacher"
                    />
                </div>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
    @use "../assets/styles/partials/variables" as *;


    span{
        color:$link-color;
    }


</style>