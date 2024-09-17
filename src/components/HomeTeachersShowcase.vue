<script>
import { FontAwesomeIcon } from "../js/font-awesome";
import HomeTeacherCard from "./HomeTeacherCard.vue";
import axios from "axios";

export default {
    components:{
        FontAwesomeIcon,
        HomeTeacherCard
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
            axios.get("http://127.0.0.1:8000/api/profiles/premium", {
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
    loadMore() {
            this.fetchTeachersProfiles(this.currentPage + 1);
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
                <div id="sponsored" class="card ">
                    <HomeTeacherCard
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
    <div class="d-flex justify-content-center align-items-center mt-5">
                    <a href="#" class="btn btn-main" @click.prevent="loadMore">Load More</a>
                </div>
</template>

<style lang="scss" scoped>
    @use "../assets/styles/partials/variables" as *;


    span{
        color:$link-color;
    }
    .card{
    --bs-card-bg:none;
    --bs-card-border-color:none;

}

.btn-main {
    background-color: $main-btn-primary-bg;
    border-color: $main-btn-primary-border;
    color: #fff;
    padding: 10px 20px;
    font-size: 1.1rem;
    margin-bottom: 1rem;

    &:hover {
        background-color: $main-btn-primary-hover-bg;
        border-color: $main-btn-primary-hover-border;
    }
}

</style>