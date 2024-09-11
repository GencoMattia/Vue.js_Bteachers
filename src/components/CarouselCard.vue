<script>


export default {
    data() {
        return {
            img: 'http://127.0.0.1:8000/storage/',
        };
        
    },
    computed: {
        averageVote() {
            if (this.project.votes.length === 0) return 0;

            const totalVotes = this.project.votes.reduce((sum, vote) => {
                return sum + vote.vote;
            }, 0);

            return (totalVotes / this.project.votes.length).toFixed(2);
        }
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
            <h1 class="name">{{ project.user.name }} {{ project.user.surname }}</h1>
        </div>
        <div class="card-body">
            <img :src="`${img}${project.photo}`" class="card-img-top" :alt="`Picture of ${project.user.name} ${project.user.surname}`">
        </div>
        <div class="card-footer">
            <P v-for="specialization in project.specializations" class="specialization">{{ specialization.field }}</P>
            <p v-if="project.votes.length" class="card-text">
                Media voti: {{ averageVote }}
            </p>
            <p> {{ project.telephone_number}}</p>

        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use "../assets/styles/partials/variables" as *;

    

    img{
    width: 50%;
    }

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