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
            store,
        };
    },

    methods: {
        fetchTeachersProfiles(page = 1, specialization = null) {
            const params = {
                page: page,
                specialization: specialization
            };



            axios.get("http://127.0.0.1:8000/api/profiles", { params })
                .then((response) => {
                    console.log(response.data.results.data);
                    if (specialization) {
                        this.teachers = response.data.results.data;
                    }else{
                        this.teachers.push(...response.data.results.data);

                    }
                    console.log("current page",this.currentPage, "page", page);
                    this.currentPage = page;
                    console.log("current page",this.currentPage, "page", page);

                })
                .catch((error) => {
                    this.$router.push({ name: "404-not-found" });
                    console.log(error);
                });
        },


        changePage(routeName) {
            this.$router.push({ name: routeName });
        }
    },

    created() {
        this.fetchTeachersProfiles();
    },

};
</script>

<template>
    <main>
        <section class="teacher-list-section">
            <div class="container mt-4 text-center">
                <h1 class="display-4">Trova il Tuo Insegnante Ideale</h1>
                <p class="lead mb-5">Scopri i profili degli insegnanti e trova quello perfetto per le tue esigenze di apprendimento!</p>
            </div>

            <select class="form-select" aria-label="default" name="" id="">
                <option selected @click="fetchTeachersProfiles(1, null)">
                    Select desired specialization
                </option>
                <option v-for="specialization in store.specializations" :value="specialization.field" @click="fetchTeachersProfiles(1, specialization.field)">
                    {{ specialization.field }}
                </option>
            </select>

            <div class="container">
                <div class="row">
                    <SingleTeacherCard v-for="teacher in teachers" :key="teacher.id" class="col-md-4" :teacher="teacher" />
                </div>

                <div class="d-flex justify-content-center align-items-center mt-5">
                    <a href="#" class="btn btn-main" @click.prevent="fetchTeachersProfiles(currentPage + 1)">Load More</a>
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
</style>
