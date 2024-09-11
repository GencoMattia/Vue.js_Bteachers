<script>
export default {
    data() {
        return {
        
        };
    },

    computed: {
        averageVote() {
            if (this.teacher.votes.length === 0) return 0;

            const totalVotes = this.teacher.votes.reduce((sum, vote) => {
                return sum + vote.vote;
            }, 0);

            return (totalVotes / this.teacher.votes.length).toFixed(2);
        }
    },

    props: {
        teacher: {
            type: Object,
            required: true,
        }
    }
};
</script>

<template>
    <div class="card project-card">
        <div class="card-body">
            <h5 class="card-title">{{ teacher.user.surname }} {{ teacher.user.name }}</h5>

            <!-- teacher's profile picture -->
            <img :src="`storate/app/public/${teacher.photo}`" class="card-img-top" :alt="`Picture of ${teacher.user.name} ${teacher.user.surname}`">

            <!-- specializations fields -->
            <p v-for="specialization in teacher.specializations" class="card-text">
                {{ specialization.field }}
            </p>

            <!-- average votes -->
            <p v-if="teacher.votes.length" class="card-text">
                Media voti: {{ averageVote }}
            </p>
            <!-- <router-link class="btn btn-primary" :to="{ name: 'single-teacher', params: { id: teacher.id }}">
                Open Profile
            </router-link> -->
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
