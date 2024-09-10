<script>
// import ProjectsList from '../components/ProjectsList.vue';

export default {
    components: {
        // ProjectsList,
    },

    data() {
        return {
            
        };
    },

    methods: {
        
    },
};
</script>

<template>
    <main>
        <div class="home-page">
            <!-- Sezione Hero -->
            <section class="hero-section">
                <div class="container text-center">
                    <h1 class="display-3">Benvenuto su BTeachers!</h1>
                    <p class="lead">Trova l'insegnante perfetto per imparare ciò che desideri.</p>
                    <div class="mt-4">
                        <!-- <router-link :to="{ name: 'projects-list' }" class="btn btn-main btn-lg">Trova il tuo Insegnante</router-link> -->
                    </div>
                </div>
            </section>
        </div>

        <!-- Sezione Caratteristiche -->
        <section class="features-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 text-center">
                    <i class="bi bi-search feature-icon"></i>
                    <h3>Cerca Insegnanti</h3>
                    <p>Trova insegnanti qualificati per qualsiasi materia o abilità che vuoi imparare.</p>
                    </div>
                    <div class="col-md-4 text-center">
                    <i class="bi bi-chat-dots feature-icon"></i>
                    <h3>Contatta e Pianifica</h3>
                    <p>Comunica con gli insegnanti e pianifica facilmente le tue lezioni.</p>
                    </div>
                    <div class="col-md-4 text-center">
                    <i class="bi bi-star feature-icon"></i>
                    <h3>Valuta le Lezioni</h3>
                    <p>Lascia una valutazione per aiutare altri studenti a trovare gli insegnanti migliori.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.home-page {
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
    }

    .features-section {
        padding: 60px 0;
        background-color: $background-color;

        .feature-icon {
        font-size: 3rem;
        color: $primary-color;
        margin-bottom: 20px;
        }

        h3 {
        font-weight: 600;
        margin-top: 20px;
        margin-bottom: 15px;
        }

        p {
        color: $text-color;
        }
    }
}
</style>
