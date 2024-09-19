<script>
import axios from 'axios';
import SingleProjectCard from './SingleTeacherCard.vue';

export default {
    components: {
        SingleProjectCard,
    }, 

    data() {
        return {
            projects: [
                // { id: 1, name: "Project One", description: "Description for project one." },
                // { id: 2, name: "Project Two", description: "Description for project two." },
                // { id: 3, name: "Project Three", description: "Description for project three." },
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
            }).catch((err) => {
                console.error();
            })
        }
    },

    created() {
        this.fetchProjects();
    },
};
</script>

<template>
    <div class="container mt-4">
        <div class="row">
            <SingleProjectCard class="col-md-4" v-for="project in projects" :key="project.id" :project="project"/>
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
        background-color:$btn-primary-bg;
        border-color: $btn-primary-bg;
        
        &:hover {
            background-color: $btn-primary-hover-color;
            border-color: $btn-primary-hover-color;
        }
    }
</style>