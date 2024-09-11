<script>


export default {
    data() {
        return {
        
        };
    },

    props: {
        project: {
            type: Object,
            required: true,
        }
    }
};
</script>

<template>
    <div class="card text-center">
        <div class="card-header">
            <P class="name">{{ project.user.name }} {{ project.user.surname }}</P>
        </div>
        <div class="card-body">
            <P v-for="specialization in project.specializations" class="specialization">{{ specialization.field }}</P>

            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        <div class="card-footer text-body-secondary">
            2 days ago
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