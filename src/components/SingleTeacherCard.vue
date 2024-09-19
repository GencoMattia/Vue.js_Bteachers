<script>
export default {
    data() {
        return {
            img: 'http://127.0.0.1:8000/storage/',
            star: 5,
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
    <router-link class="router-link" @click="navigateToProfile(teacher.id)"
        :to="{ name: 'single-teacher', params: { id: teacher.id } }">
        <div :class="teacher.is_premium ? 'premium-profile' : ''" class="card teacher-card h-100">
            <div class="card-img-container">
                <!-- teacher's profile picture -->
                <img :src="`${img}${teacher.photo}`" class="card-img-top mb-3"
                    :alt="`Picture of ${teacher.user.name} ${teacher.user.surname}`">
            </div>
            <div class="star-vote p-2">
                <p v-if="teacher.votes_avg_vote > 0">
                    <!-- Stelle piene -->
                    <span v-for="n in Math.floor(teacher.votes_avg_vote)" :key="'full-' + n">
                        <font-awesome-icon icon="fa-solid fa-star" />
                    </span>

                    <!-- Mezza stella -->
                    <span v-if="teacher.votes_avg_vote % 1 >= 0.5">
                        <font-awesome-icon icon="star-half-stroke" />
                    </span>

                    <!-- Stelle vuote -->
                    <span v-for="x in star - Math.round(teacher.votes_avg_vote)" :key="'empty-' + x">
                        <font-awesome-icon icon="fa-regular fa-star" />
                    </span>
                </p>
                <p v-else>
                    The teacher has no ratings.
                </p>
                <p v-if="teacher.reviews_count" class="card-text">
                    Reviews: <strong>{{ teacher.reviews_count }}</strong>
                </p>
            </div>
            <div class="card-body">
                <!-- teacher's name -->
                <h5 class="card-title">{{ teacher.user.surname }} {{ teacher.user.name }}</h5>
            </div>
            <!-- specializations fields -->
            <div class="specializations-container">
                <ul class="list-group list-group-flush">
                    <li v-for="specialization in teacher.specializations" :key="specialization.id"
                        class="list-group-item specialization">
                        {{ specialization.field }}
                    </li>
                </ul>
            </div>
        </div>
    </router-link>
</template>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.teacher-card {
    position: relative;
    margin-bottom: $card-margin-bottom;
    box-shadow: $card-box-shadow;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    background-color: $main-background-color;

    .card-img-container {
        display: flex;
        justify-content: center;
        height: 400px;
        border-bottom: 2px solid $secondary-color;
        
        .card-img-top {
            width: auto;
            height: 100%;
            object-fit: cover;
        }
    }

    .specializations-container {
        height: 150px;
        overflow-y: scroll;
    }

    .star-vote {
        position: absolute;
        top: 0;
        right: 0;
    }

    &.premium-profile{
        border: 2px solid gold;

        &:before {
            content: "Premium";
            position: absolute;
            top: 0;
            left: 0;
            background-color: gold;
            color: black;
            padding: 5px;
            font-weight: bold;
            font-size: 0.8rem;
            border-bottom-right-radius: 8px;
        }

        &:hover {
            box-shadow: 0 8px 16px rgba(255, 223, 0, 0.5);
        }
    }

    &:hover {
        transform: $card-hover-transform;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
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
