<script>
import CarouselHome from '@/components/CarouselHome.vue';

// import ProjectsList from '../components/ProjectsList.vue';

export default {

    components: {
        CarouselHome
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
                </div>
            </section>
        </div>

        <!-- Sezione Caratteristiche -->
        <section class="features-section">
            <div class="container">
                <div class="row d-flex justify-content-between mb-3">
                    <div class="card m-0">
                        <div class="container-card bg-blue-box">
                            <svg width="50" height="50" viewBox="0 0 120 120" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="118" height="118" rx="24" fill="url(#paint0_linear)"
                                    fill-opacity="0.15" stroke="url(#paint1_radial)" stroke-width="2"></rect>
                                <circle cx="55" cy="55" r="25" stroke="#FFF" stroke-width="8"></circle>
                                <line x1="75" y1="75" x2="95" y2="95" stroke="#FFF" stroke-width="8"
                                    stroke-linecap="round"></line>
                                <defs>
                                    <linearGradient id="paint0_linear" x1="120" y1="120" x2="0" y2="0"
                                        gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FFF" stop-opacity="0.7"></stop>
                                        <stop offset="1" stop-color="#FFF" stop-opacity="0.15"></stop>
                                    </linearGradient>
                                    <radialGradient id="paint1_radial" cx="0" cy="0" r="1"
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(60 60) rotate(90) scale(100)">
                                        <stop stop-color="#FFF"></stop>
                                        <stop offset="1" stop-color="#FFF" stop-opacity="0.2"></stop>
                                    </radialGradient>
                                </defs>
                            </svg>
                            <p class="card-title">Cerca Insegnanti</p>
                            <p class="card-description">Trova insegnanti qualificati per qualsiasi materia o abilità che
                                vuoi imparare.</p>
                        </div>
                    </div>
                    <div class="card m-0">
                        <div class="container-card bg-blue-box">
                            <svg width="50" height="50" viewBox="0 0 120 120" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="118" height="118" rx="24" fill="url(#paint0_linear)"
                                    fill-opacity="0.15" stroke="#FFF" stroke-width="2"></rect>
                                <path
                                    d="M74 82C60 72 50 62 40 48C35 40 38 37 40 35C42 33 45 30 47 33L56 43C58 45 57 48 56 50C54 52 54 54 58 58C63 62 65 61 67 59C69 57 72 56 74 58L84 67C87 70 83 73 82 75C80 78 78 82 74 82Z"
                                    fill="#FFF" />
                                <defs>
                                    <linearGradient id="paint0_linear" x1="120" y1="120" x2="0" y2="0"
                                        gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FFF" stop-opacity="0.7"></stop>
                                        <stop offset="1" stop-color="#FFF" stop-opacity="0.15"></stop>
                                    </linearGradient>
                                    <radialGradient id="paint1_radial" cx="0" cy="0" r="1"
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(60 60) rotate(90) scale(100)">
                                        <stop stop-color="#FFF"></stop>
                                        <stop offset="1" stop-color="#FFF" stop-opacity="0.2"></stop>
                                    </radialGradient>
                                </defs>
                            </svg>
                            <p class="card-title">Contatta e Pianifica</p>
                            <p class="card-description">Comunica con gli insegnanti e pianifica facilmente le tue
                                lezioni.</p>
                        </div>
                    </div>
                    <div class="card m-0">
                        <div class="container-card bg-blue-box">
                            <svg width="50" height="50" viewBox="0 0 120 120" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="118" height="118" rx="24" fill="url(#paint0_linear)"
                                    fill-opacity="0.15" stroke="url(#paint1_radial)" stroke-width="2"></rect>
                                <path d="M60 40L66 54H80L68 64L72 78L60 68L48 78L52 64L40 54H54L60 40Z" fill="#FFF" />
                                <defs>
                                    <linearGradient id="paint0_linear" x1="120" y1="120" x2="0" y2="0"
                                        gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FFF" stop-opacity="0.7"></stop>
                                        <stop offset="1" stop-color="#FFF" stop-opacity="0.15"></stop>
                                    </linearGradient>
                                    <radialGradient id="paint1_radial" cx="0" cy="0" r="1"
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(60 60) rotate(90) scale(100)">
                                        <stop stop-color="#FFF"></stop>
                                        <stop offset="1" stop-color="#FFF" stop-opacity="0.2"></stop>
                                    </radialGradient>
                                </defs>
                            </svg>
                            <p class="card-title">Valuta le Lezioni</p>
                            <p class="card-description">Lascia una valutazione per aiutare altri studenti a trovare gli
                                insegnanti migliori.</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="container">
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
            </div> -->
        </section>
        <section>
            <div class="row carousel justify-content-end">
                <div class="col-12 ">
                    <CarouselHome />
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


.carousel {
    max-width: 1200px;
    margin: 0 auto;
}


.container {
    width: 1200px !important;
    padding: 0 !important;
    margin-right: auto;
    margin-left: auto;

    @media screen and (min-width: 992px) and (max-width: 1439px) {
        max-width: 1279px !important;
        padding: 0 !important;
        margin: 0 80px !important;
        width: auto !important;
    }

    @media screen and (max-width: 991px) {
        max-width: 959px !important;
        margin: 0 16px !important;
        padding: 0 !important;
        width: auto !important;
    }
}

.gradient-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    padding: 30px;

    @media screen and (max-width: 991px) {
        grid-template-columns: 1fr;
    }
}

.container-title {
    text-align: center;
    padding: 0 !important;
    margin-bottom: 40px;
    font-size: 40px;
    color: #fff;
    font-weight: 600;
    line-height: 60px;
}

.card {
    max-width: 350px;
    border: 0;
    width: 100%;
    margin-inline: auto;
    background: none;
}

.container-card {
    position: relative;
    border: 2px solid transparent;
    background: linear-gradient(71deg, #c008fd, #f13e08f5, #992abe);
    background-size: 200% 200%;
    background-clip: padding-box;
    border-radius: 45px;
    padding: 40px;
    height: 300px;
    // animation: spin 2s infinite linear;
    animation: gradientAnimation 12s ease infinite;
}

@keyframes gradientAnimation {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.container-card img {
    margin-bottom: 32px;
}

.bg-green-box,
.bg-white-box,
.bg-yellow-box,
.bg-blue-box {
    position: relative;
}

.bg-green-box::after,
.bg-white-box::after,
.bg-yellow-box::after,
.bg-blue-box::after {
    position: absolute;
    top: -1px;
    bottom: -1px;
    left: -1px;
    right: -1px;
    content: "";
    z-index: -1;
    border-radius: 45px;
}

.bg-green-box::after {
    background: linear-gradient(71deg, #0d1212, #3da077, #0d1212);
}

.bg-white-box::after {
    background: linear-gradient(71deg, #ca5468, #d111d1, #121013);
}

.bg-yellow-box::after {
    background: linear-gradient(71deg, #110e0e, #afa220, #110e0e);
}

.bg-blue-box::after {
    background: linear-gradient(71deg, #24ee2e, #163bce, #eb8b0e);
}

.card-title {
    font-weight: 600;
    color: white;
    letter-spacing: -0.02em;
    line-height: 40px;
    font-style: normal;
    font-size: 28px;
    padding-bottom: 8px;
}

.card-description {
    font-weight: 600;
    line-height: 32px;
    color: hsl(0, 0%, 100%);
    font-size: 16px;
    max-width: 470px;
}
</style>
