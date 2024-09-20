<script>
export default {
    data() {
        return {
            img: 'http://127.0.0.1:8000/storage/',
            star: 5,
            showAllSpecializations: false,
        };
    },

    computed: {
        averageVote() {
            if (this.teacher.votes.length === 0) return 0;

            const totalVotes = this.teacher.votes.reduce((sum, vote) => {
                return sum + vote.vote;
            }, 0);

            return (totalVotes / this.teacher.votes.length).toFixed(2);
        },

        visibleSpecializations() {
            return this.showAllSpecializations ? this.teacher.specializations : this.teacher.specializations.slice(0, 3);
        }
    },

    props: {
        teacher: {
            type: Object,
            required: true,
        }
    },

    methods: {
        toggleSpecializations() {
            this.showAllSpecializations = !this.showAllSpecializations;
        }
    }
};
</script>


<template>
    <router-link class="router-link" @click="navigateToProfile(teacher.id)"
        :to="{ name: 'single-teacher', params: { id: teacher.id } }">
        <div :class="{ 'premium-profile': teacher.is_premium }" class="card teacher-card h-100">
            <div class="premium-tag" v-if="teacher.is_premium">Premium</div>
            <div class="card-img-container">
                <!-- Immagine a larghezza piena -->
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
                <p v-if="teacher.reviews_count" class="card-text text-black">
                    Reviews: <strong>{{ teacher.reviews_count }}</strong>
                </p>
            </div>
            <div class="card-body">
                <h5 class="card-title">{{ teacher.user.surname }} {{ teacher.user.name }}</h5>
            </div>
            <!-- Lista delle specializzazioni -->
            <div class="specializations-container text-center px-3">
                <p>
                    <span v-for="(specialization, index) in visibleSpecializations" :key="specialization.id">
                        {{ specialization.field }}<span v-if="index < visibleSpecializations.length - 1">, </span>
                    </span>
                </p>
                <p v-if="teacher.specializations.length > 3" class="expand-toggle">
                    <a type="button" class="btn btn-primary"
                    style="--bs-btn-padding-y: .15rem; --bs-btn-padding-x: .2rem; --bs-btn-font-size: .75rem;"href="#" @click.prevent="toggleSpecializations">
                        {{ showAllSpecializations ? 'Show Less' : 'Show More' }}
                    </a>
                </p>
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
    height: 450px; // Altezza fissa per layout uniforme

    .card-img-container {
        display: flex;
        justify-content: center;
        height: 200px;
        border-bottom: 2px solid $secondary-color;

        .card-img-top {
            width: 100%; // Immagine a tutta larghezza
            height: 100%;
            object-position: top;

            object-fit: cover; // Adatta proporzioni mantenendo il ritaglio
        }
    }

    .star-vote {
        position: absolute;
        top: 0;
        right: 0;
        color: orange;
    }

    /* Targhetta Premium */
    .premium-tag {
        position: absolute;
        top: 0;
        left: 0;
        background-color: gold;
        color: black;
        padding: 5px;
        font-weight: bold;
        font-size: 0.8rem;
        border-bottom-right-radius: 8px;
        z-index: 1;
    }

    &.premium-profile {
        border: 2px solid gold;

        &:hover {
            /* Ombra dorata per i profili Premium */
            box-shadow: 0 8px 16px rgba(255, 223, 0, 0.5);
        }
    }

    &:hover {
        transform: $card-hover-transform;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    .card-body {
        padding: 15px;
        text-align: center;

        .card-title {
            font-size: $card-title-font-size;
            font-weight: $card-title-font-weight;
            color: $primary-color;
            margin-bottom: 0 !important;
        }

        .specializations-container {
            font-size: $card-text-font-size;
            color: $text-color;
            height: auto;
        }

        .expand-toggle {
            text-align: center;
            margin-top: 10px; // Separazione visiva dal contenuto

            a {
                color: $primary-color;
                text-decoration: underline;
                cursor: pointer;
                font-weight: bold;
            }
        }
    }
}
</style>
