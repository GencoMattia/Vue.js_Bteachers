<script>
import axios from 'axios';

import SingleTeacherCard from '../components/SingleTeacherCard.vue';
import { store } from '@/store';

export default {
    components: {
        SingleTeacherCard,
    }, 

    data() {
        return {
            teachers: [],
            currentPage: 1,
            selectedSpecialization: null, // Aggiunta per tracciare la specializzazione selezionata
            store,
            votoUtente : null,
            orderBy: 'reviews_count',
            orderDirection: "asc",
        };
    },

    watch: {
        // Osserva i cambiamenti della query nello store
        'store.searchBarQuery'(newQuery) {
            this.getSearchBarValue(newQuery); // Attiva la chiamata API quando cambia la query
        }
    },

    methods: {
        fetchTeachersProfiles(page = 1, specialization = null, reset = false) {
            const params = {
                page: page,
                specialization: specialization,
                searchQuery: store.searchBarQuery, // Aggiunge la searchQuery attuale ai parametri
                order_by: this.orderBy,
                order_direction: this.orderDirection,
            };
            if (this.votoUtente) {
                params.min_vote = this.votoUtente;
            };
            console.log('la chiamata è partita', this.sortOrder);
            axios.get("http://127.0.0.1:8000/api/profiles", { params })
                .then((response) => {
                    // Se reset è true, sovrascrivi gli insegnanti; altrimenti aggiungi i risultati
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

        // Effettua la chiamata API quando cambia la query
        getSearchBarValue(query) {
            this.fetchTeachersProfiles(1, this.selectedSpecialization, true);
        },

        // Gestione della selezione delle specializzazioni
        onSpecializationChange(specialization) {
            if (specialization === "") {
                // Se la specializzazione è vuota, resetta il filtro e mostra tutti i risultati
                this.selectedSpecialization = null;
                this.fetchTeachersProfiles(1, null, true); // Mostra tutti gli insegnanti e resetta la paginazione
            } else {
                // Applica il filtro per la specializzazione selezionata
                this.selectedSpecialization = specialization;
                this.fetchTeachersProfiles(1, specialization, true); // Resetta la pagina e filtra
            }
        },
        onVoteChange(vote) {
            if (vote === "") {
                this.votoUtente = null;
                this.fetchTeachersProfiles(1, this.selectedSpecialization, true);
            } else {
                this.votoUtente = vote;
                this.fetchTeachersProfiles(1, this.selectedSpecialization, true);
            }
        },

        changeDisc() {
            this.orderDirection = this.orderDirection === 'asc' ? 'desc' : 'asc'; 
            this.fetchTeachersProfiles(1, this.selectedSpecialization, true);
        },

        // Caricamento di più insegnanti, mantenendo il filtro corrente
        loadMore() {
            this.fetchTeachersProfiles(this.currentPage + 1, this.selectedSpecialization);
        },

    },
    created() {
        this.fetchTeachersProfiles();
    },
}
</script>

<template>
    <main>
        <section class="teacher-list-section">
            <div class="container mt-4 text-center">
                <h1 class="display-4">Trova il Tuo Insegnante Ideale</h1>
                <p class="lead mb-5">Scopri i profili degli insegnanti e trova quello perfetto per le tue esigenze di apprendimento!</p>
            </div>
            <div class="container">

                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12">

                        <select class="form-select " aria-label="default" @change="onSpecializationChange($event.target.value)">
                            <option value="" selected>
                                Select desired specialization
                            </option>
                            <option v-for="specialization in store.specializations" :value="specialization.field">
                                {{ specialization.field }}
                            </option>
                        </select>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <select class="form-select" aria-label="default" @change="onVoteChange($event.target.value)">
                            <option value="" selected>
                                Select minimum vote
                            </option>
                            <option v-for="voto in store.voteList" :value="voto.vote">
                                {{ voto.vote }} -> {{ voto.name }}
                            </option>
                        </select>
                    </div>
                    <div class="form-check form-switch mx-3">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" @change="changeDisc">
                        <label class="form-check-label" for="flexSwitchCheckChecked">Order review</label>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <SingleTeacherCard v-for="teacher in teachers" @click.prevent="selectedTeacherId(teacher.id)" :key="teacher.id" class="col-md-4" :teacher="teacher" />
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
    background-color: $main-btn-primary-bg;
    border-color: $main-btn-primary-border;
    color: #fff;
    padding: 10px 20px;
    font-size: 1.1rem;

    &:hover {
        background-color: $main-btn-primary-hover-bg;
        border-color: $main-btn-primary-hover-border;
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
