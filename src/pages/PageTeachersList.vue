<script>
import axios from 'axios';
import SingleTeacherCard from '../components/SingleTeacherCard.vue';

export default {
    components: {
        SingleTeacherCard,
    }, 

    data() {
        return {
            teachers: [

            ],

            currentPage: 1,
        };
    },

    methods: {
        fetchTeachersProfiles(page = 1){
            axios.get("http://127.0.0.1:8000/api/profiles", {
                params: {
                    page: page
                }
            }).then((response) => {
                console.log(response.data.results.data);
    
                this.teachers.push(...response.data.results.data);
                this.currentPage = response.data.results.currentPage;
            }).catch((error) => {
                this.$router.push({name: "404-not-found"});
                console.log(error);
            })
        },

        changePage(routeName){
            this.$router.push({name: routeName});
        }
    },

    created() {
        this.fetchTeachersProfiles();
    },
};
</script>

<template>
    <h1>
        Projects List
    </h1>
    <div class="container mt-4">
        <div class="row">
            <SingleTeacherCard v-for="teacher in teachers" :key="teacher.id" class="col-md-4" :teacher="teacher"/>
        </div>

        <div class="d-flex justify-content-center aling-items-center">
            <a href="#" class="btn btn-primary" @click.prevent="fetchProjects(currentPage + 1)">Load More</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use "../assets/styles/partials/variables" as *;

    .btn-primary {
        margin-top: auto;
        background-color: $main-btn-primary-hover-bg;
        border-color: $main-btn-primary-hover-border;
        
        &:hover {
            background-color: $main-btn-primary-bg;
            border-color: $main-btn-primary-border;
        }
    }
</style>