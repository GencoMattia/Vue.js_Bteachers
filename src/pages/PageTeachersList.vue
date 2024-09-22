<script>
import axios from 'axios';
import SingleTeacherCard from '../components/SingleTeacherCard.vue';
import { store } from '@/store';
import Multiselect from 'vue-multiselect';
import 'vue-multiselect/dist/vue-multiselect.min.css';


export default {
    components: {
        Multiselect,
        SingleTeacherCard,
    },

    data() {
        return {
            teachers: [],
            currentPage: 1,
            selectedSpecialization: null,
            store,
            votoUtente: null,
            selectedOrder: '',
            orderDirection: "desc",
            selectedReviewThreshold: null,

        };
    },

    watch: {
        // Monitora il cambiamento della query di ricerca
        'store.searchBarQuery'(newQuery) {
            this.fetchTeachersProfiles(1, true);
        },
        // Monitora il cambiamento della specializzazione
        selectedSpecialization() {
            this.fetchTeachersProfiles(1, true);
        },
        votoUtente() {
            this.fetchTeachersProfiles(1, true);
        },
        selectedOrder() {  // Monitora il cambiamento di selectedOrder
            this.fetchTeachersProfiles(1, true);
        },
        selectedReviewThreshold() {
            this.fetchTeachersProfiles(1, true);
        }
    },

    methods: {
        fetchTeachersProfiles(page = 1, reset = false) {
            const params = {
                page: page,
                specialization: this.selectedSpecialization,
                searchQuery: store.searchBarQuery,
                order_by: this.selectedOrder,
                order_direction: this.orderDirection,
                reviews_count: this.selectedReviewThreshold,
            };

            if (this.votoUtente) {
                params.min_vote = this.votoUtente;
            }

            axios.get("http://127.0.0.1:8000/api/profiles", { params })
                .then((response) => {
                    if (reset) {
                        this.teachers = response.data.results.data;
                    } else {
                        this.teachers.push(...response.data.results.data);
                    }
                    this.currentPage = page;
                })
                .catch((error) => {
                    this.$router.push({ name: "404-not-found" });
                    console.log(error);
                });
        },

        onSpecializationChange(specialization) {
            this.selectedSpecialization = specialization || null;
        },

        onVoteChange(vote) {
            this.votoUtente = vote || null;
        },

        onReviewThresholdChange(reviews_count) {
            console.log(reviews_count);
            this.selectedReviewThreshold = reviews_count || null;
        },

        changeDisc() {
            this.orderDirection = this.orderDirection === 'asc' ? 'desc' : 'asc';
            this.fetchTeachersProfiles(1, true);
        },

        loadMore() {
            this.fetchTeachersProfiles(this.currentPage + 1);
        },
        nameWithemoji({ emoji, field }) {
            return `${emoji} ${field}`;
        },
        nameWithVote({ vote, name }) {
            return `${vote} -> ${name}`;
        },
        nameWithReview({ nReview, name }) {
            return `${name}`;
        }
    },

    created() {
        // Recupera la specializzazione dai parametri URL se presente
        const specializationFromUrl = this.$route.query.specialization;
        if (specializationFromUrl) {
            for (let i = 0; i < store.options.length; i++) {
                if(specializationFromUrl == store.options[i].field){
                    this.selectedSpecialization = [
                { field: specializationFromUrl, emoji: store.options[i].emoji }
            ]
            this.fetchTeachersProfiles(1, true); // Avvia subito la ricerca
                };
            }
            
        } else {
            this.fetchTeachersProfiles();
        }
    },
}
</script>

<template>
    <main>
        <section class="teacher-list-section">
            <div class="container mt-4 text-center">
                <h1 class="display-4">Find your perfect teacher</h1>
                <p class="lead mb-5 text-black">Discover teacher profiles and find the one that’s perfect for your learning needs!</p>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-12 mb-1">

                        <!-- select for specializations -->

                        <multiselect v-model="selectedSpecialization" :options="store.options"
                            :custom-label="nameWithemoji" placeholder="Select desired specialization" label="field"
                            track-by="field" @change="onSpecializationChange(selectedSpecialization)"
                            class="centered-placeholder"> 
                        </multiselect>

                    </div>
                    <!-- select for votes -->
                    <div class="col-lg-4 col-md-4 col-sm-12 mb-1">
                        <multiselect v-model="votoUtente" :options="store.voteList" :custom-label="nameWithVote"
                            placeholder="Select minimum vote" label="vote" track-by="vote"
                            @change="onVoteChange(votoUtente)" class="centered-placeholder">
                        </multiselect>
                    </div>
                    <!-- select for reviews -->
                    <div class="col-lg-4 col-md-4 col-sm-12 mb-1">

                        <multiselect v-model="selectedReviewThreshold" :options="store.reviewsThreshold"
                            :custom-label="nameWithReview" placeholder="Select minimum reviews" label="nReview"
                            track-by="nReview" @change="onReviewThresholdChange(selectedReviewThreshold)"
                            class="centered-placeholder">
                        </multiselect>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-sm-12">
                                <input type="radio" class="btn-check" name="orderOptions" id="orderByReviews"
                                    autocomplete="off" value="reviews_count" v-model="selectedOrder">
                                <label class="btn btn-outline-success w-100" for="orderByReviews">Order by
                                    Reviews</label>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12">
                                <input type="radio" class="btn-check" name="orderOptions" id="orderByVote"
                                    autocomplete="off" value="votes_avg_vote" v-model="selectedOrder">
                                <label class="btn btn-outline-success w-100" for="orderByVote">Order by Average
                                    Vote</label>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12">
                                <input type="radio" class="btn-check" name="orderOptions" id="orderByOther"
                                    autocomplete="off" value="" v-model="selectedOrder">
                                <label class="btn btn-outline-success w-100" for="orderByOther">Reset Order</label>
                            </div>
                        </div>

                    </div>
                    <!--  <div class="btn-group mt-3" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check" name="orderOptions" id="orderByReviews" autocomplete="off"
                            value="reviews_count" v-model="selectedOrder">
                        <label class="btn btn-outline-success" for="orderByReviews">Order by Reviews</label>

                        <input type="radio" class="btn-check" name="orderOptions" id="orderByVote" autocomplete="off"
                            value="votes_avg_vote" v-model="selectedOrder">
                        <label class="btn btn-outline-success" for="orderByVote">Order by Average Vote</label>

                        <input type="radio" class="btn-check" name="orderOptions" id="orderByOther" autocomplete="off"
                            value="" v-model="selectedOrder">
                        <label class="btn btn-outline-success" for="orderByOther">Reset Order</label>
                    </div> -->
                </div>
            </div>

            <div class="container">
                <div class="row align-items-stretch">
                    <SingleTeacherCard v-for="teacher in teachers" @click.prevent="selectedTeacherId(teacher.id)"
                        :key="teacher.id" class="col-md-6 col-lg-4 mb-4" :teacher="teacher" />
                </div>

                <div class="d-flex justify-content-center align-items-center mt-5">
                    <a href="#" class="btn btn-main" @click.prevent="loadMore">Load More</a>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;


// Stile generale della sezione
.teacher-list-section {
    background-color: $background-color;
    padding: 60px 0;

    h1 {
        color: $primary-color;
        font-weight: 700;
    }

    p {
        color: $text-color;
        font-size: 1.2rem;
    }
}

// Pulsante "Carica Altri"
.btn-main {
    background-color: $btn-primary-bg;
    border-color:$btn-primary-bg;
    color: #fff;
    padding: 10px 20px;
    font-size: 1.1rem;

    &:hover {
        background-color: $btn-primary-hover-color;
        border-color: $btn-primary-hover-color;
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
