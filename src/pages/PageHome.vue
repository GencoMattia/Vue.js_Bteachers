<script>
import ProjectsList from '../components/ProjectsList.vue';

export default {
    components: {
        ProjectsList,
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
            <section class="hero-section">
                <div class="container text-center">
                    <h1 class="display-3">Benvenuto su Project Manager</h1>
                    <p class="lead">Gestisci i tuoi progetti in modo semplice e intuitivo.</p>
                    <div class="mt-4">
                        <router-link :to="{ name: 'projects-list' }" class="btn btn-main btn-lg">Esplora i Progetti</router-link>
                    </div>
                </div>
            </section>
        </div>

        <section class="features-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 text-center">
                    <i class="bi bi-folder-plus feature-icon"></i>
                    <h3>Crea Nuovi Progetti</h3>
                    <p>Crea, organizza e tieni traccia dei tuoi progetti in modo semplice.</p>
                    </div>
                    <div class="col-md-4 text-center">
                    <i class="bi bi-graph-up feature-icon"></i>
                    <h3>Monitora i Progressi</h3>
                    <p>Controlla l'avanzamento dei tuoi progetti con statistiche dettagliate.</p>
                    </div>
                    <div class="col-md-4 text-center">
                    <i class="bi bi-person-check feature-icon"></i>
                    <h3>Collabora con il Team</h3>
                    <p>Lavora insieme al tuo team e mantieni tutti aggiornati.</p>
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