<script>
import axios from 'axios';
import SingleProjectCard from '../components/SingleProjectCard.vue';

export default {
    components: {
        SingleProjectCard,
    }, 

    data() {
        return {
            projects: [

            ],

            currentPage: 1,
        };
    },

    methods: {
        fetchProjects(page = 1){
            axios.get("http://127.0.0.1:8000/api/projects", {
                params: {
                    page: page
                }
            }).then((response) => {
                console.log(response.data);
    
                this.projects.push(...response.data.results.data);
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
        this.fetchProjects();
    },
};
</script>

<template>
    <h1>
        Projects List
    </h1>
    <div class="container mt-4">
        <div class="row">
            <SingleProjectCard v-for="project in projects" :key="project.id" class="col-md-4" :project="project"/>
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