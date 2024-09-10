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
    <div class="card project-card">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <router-link class="btn btn-primary" :to="{ name: 'single-project', params: { id: project.id }}">
                Open Project
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.project-card {
    margin-bottom: $card-margin-bottom;
    box-shadow: $card-box-shadow;
    transition: transform 0.3s ease-in-out;
    
    &:hover {
        transform: $card-hover-transform;
    }
    
    .card-body {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .card-title {
        font-size: $card-title-font-size;
        font-weight: $card-title-font-weight;
    }

    .card-text {
        font-size: $card-text-font-size;
        color: $card-text-color;
    }

    .btn-primary {
        background-color: $btn-primary-bg;
        border-color: $btn-primary-border;
        margin-top: auto;

        &:hover {
        background-color: $btn-primary-hover-bg;
        border-color: $btn-primary-hover-border;
        }
    }
}
</style>
