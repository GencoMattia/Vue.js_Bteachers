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
    <router-link class="router-link" @click="navigateToProfile(teacher.id)" :to="{ name: 'single-teacher', params: { id: teacher.id }}">
        <div class="card teacher-card">
            <div class="card-body">
                <!-- teacher's profile picture -->
                <img :src="`${img}${teacher.photo}`" class="card-img-top mb-3" :alt="`Picture of ${teacher.user.name} ${teacher.user.surname}`">

                <!-- teacher's name -->
                <h5 class="card-title">{{ teacher.user.surname }} {{ teacher.user.name }}</h5>

                <!-- specializations fields -->
                <p v-for="specialization in teacher.specializations" :key="specialization.id" class="card-text specialization">
                    {{ specialization.field }}
                </p>

                <!-- average votes and reviews -->
                <div class="teacher-info mt-3">
                    <p v-if="teacher.votes.length" class="card-text">
                        Media voti: <strong>{{ averageVote }}</strong>
                    </p>

                    <p v-if="teacher.reviews_count" class="card-text">
                        Recensioni totali: <strong>{{ teacher.reviews_count }}</strong>
                    </p>
                </div>
            </div>
        </div>
    </router-link>
</template>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.teacher-card {
    margin-bottom: $card-margin-bottom;
    box-shadow: $card-box-shadow;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    background-color: $main-background-color;

    &:hover {
        transform: $card-hover-transform;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    .card-img-top {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-bottom: 2px solid $secondary-color;
    }

    .card-body {
        padding: 20px;
        text-align: center;

        .card-title {
            font-size: $card-title-font-size;
            font-weight: $card-title-font-weight;
            color: $primary-color;
            margin-bottom: 10px;
        }

        .specialization {
            font-size: $card-text-font-size;
            color: $text-color;
        }

        .teacher-info {
            font-size: 0.9rem;
            color: $card-text-color;
            margin-top: 10px;

            p {
                margin: 0;
            }

            strong {
                color: $primary-color;
            }
        }
    }
}

.router-link {
    text-decoration: none;

    &:hover {
        text-decoration: none;
    }
}
</style>
