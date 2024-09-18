<script>
import { FontAwesomeIcon } from "../js/font-awesome";
import HomeTeacherCard from "./HomeTeacherCard.vue";
import axios from "axios";

export default {
    components: {
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
        getTeacher(page = 1) {
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
    <section class="container mb-5">
        <!-- Griglia di carte -->
        <div id="sponsored" class="row justify-items-center">
            <!-- Ogni carta ha le classi della griglia Bootstrap -->
            <HomeTeacherCard class="col-12 col-lg-6 col-xl-4 mb-4"
                v-for="(teacher, index) in teachers" :key="teacher.id" 
                :teacher="teacher" />
        </div>
        <div class="d-flex justify-content-center align-items-center mt-5">
            <a href="#" type="button" class="btn btn-primary btn-lg" @click.prevent="loadMore">Load More</a>
        </div>
    </section>
</template>


<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

</style>