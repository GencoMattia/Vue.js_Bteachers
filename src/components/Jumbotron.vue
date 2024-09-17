<script>
import { store } from '@/store';

export default {
    data() {
        return {
            store,
        };
    },

    methods: {
        getSpecialization(specialization) {
            this.$router.push({ name: 'teachers-list', query: { specialization: specialization } });
        }
    }
};
</script>

<template>
    <section class="hero-section mb-4">
        <div class="container text-center ">
            <h1 class="display-3">Benvenuto su BTeachers!</h1>
            <p class="lead">Trova l'insegnante perfetto per imparare ciò che desideri.</p>
            <div class="mt-4">
                <!-- <router-link :to="{ name: 'projects-list' }" class="btn btn-main btn-lg">Trova il tuo Insegnante</router-link> -->
            </div>
            <div class="btn btn-primary">
                <a href="http://127.0.0.1:8000/">
                    Sei un insegnante?
                </a>
            </div>
            <div class="filter mb-3">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-md-8 col-sm-12">
                            <select class="form-select " aria-label="default"
                                @change="getSpecialization($event.target.value)">
                                <option value="" selected>
                                    Select desired specialization
                                </option>
                                <option v-for="specialization in store.specializations" :value="specialization.field">
                                    {{ specialization.field }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.hero-section {
        background-color: $primary-color;
        color: #fff;
        padding: 100px 0;

        h1 {
            font-weight: 700;
        }

        .btn-main {
            background-color: $main-btn-primary-bg;
            border-color: $main-btn-primary-border;
            color: #fff;

            &:hover {
                background-color: $main-btn-primary-hover-bg;
                border-color: $main-btn-primary-hover-border;
            }
        }

        .btn-teacher {
            background-color: $main-btn-primary-bg; // Arancione intenso
            border-color: $secondary-border-color; // Arancione intenso
            color: $main-background-color; // Bianco
            border-radius: 8px;

            &:hover {
                background-color: $main-btn-primary-hover-bg; // Arancione molto scuro
                border-color: $main-btn-primary-hover-border; // Arancione molto scuro
                color: $main-background-color; // Bianco
            }
        }
    }
</style>