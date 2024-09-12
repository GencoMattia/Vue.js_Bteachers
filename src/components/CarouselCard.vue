<script>


export default {
    data() {
        return {
            img: 'http://127.0.0.1:8000/storage/',
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
    <router-link  class="router-link" @click="navigateToProfile(teacher.id)" :to="{ name: 'single-teacher', params: { id: teacher.id }}">

        <div class="card text-center">
            <div class="card-header">
                <h1 class="name">{{ teacher.user.name }} {{ teacher.user.surname }}</h1>
            </div>
            <div class="card-body row d-flex">
                <div class="photo col-6">
                    <img :src="`${img}${teacher.photo}`" class="pl-4 rounded-circle card-img-top" :alt="`Picture of ${teacher.user.name} ${teacher.user.surname}`">
                </div>
                <div class="specs col-6 text-start pt-5">
                    <p v-for="specialization in teacher.specializations" class="specialization">{{ specialization.field }}</p>
                    <p v-if="teacher.votes.length" class="badge rounded-pill text-bg-warning card-text">
                        Media voti: {{ averageVote }}
                    </p>
                    <p> {{ teacher.telephone_number}}</p>
                </div>
            </div>
            <div class="card-footer">
                
            </div>
        </div>
    </router-link>
</template>

<style lang="scss" scoped>
    @use "../assets/styles/partials/variables" as *;

    .card-body{
        height: 265px;
    }

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
    .router-link {
    text-decoration: none;

    .project-card {
        text-decoration: none;

        .card-body {
            text-decoration: none;
            
        }

        .card-title {
            text-decoration: none;
        }

        .card-text {
            text-decoration: none;
        }
    }
}
</style>