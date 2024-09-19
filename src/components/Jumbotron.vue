<script>
import { store } from '@/store';

export default {
    data() {
        return {
            store,
            mouseX: 0,
            mouseY: 0
        };
    },

    methods: {
        handleMouseMove(event) {
            const { clientX, clientY } = event;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            // Calcola la posizione relativa del mouse
            this.mouseX = (clientX / windowWidth) * 100; // Percentuale di movimento orizzontale
            this.mouseY = (clientY / windowHeight) * 100; // Percentuale di movimento verticale

            // Aggiorna lo stile della sezione per applicare il parallax
            const heroSection = document.querySelector('.hero-section');
            heroSection.style.backgroundPosition = `${50 + (this.mouseX - 50) / 20}% ${50 + (this.mouseY - 50) / 20}%`;
        },

        getSpecialization(specialization) {
            this.$router.push({ name: 'teachers-list', query: { specialization: specialization } });
        }
    },

    mounted() {
        document.addEventListener('mousemove', this.handleMouseMove);
    },

    beforeDestroy() {
        document.removeEventListener('mousemove', this.handleMouseMove);
    },
};
</script>

<template>
    <section class="hero-section mb-4">
        <div class="container text-center ">
            <h1 class="display-3">Welcome on BTeachers!</h1>
            <h2 class="lead mb-5">Where you can find the 
                <!-- Contenitore per testo e SVG -->
                <div class="svg-container">
                    <span class="bold-text">perfect teacher</span>
                    <!-- SVG animato -->
                    <svg width="100%" height="30px" viewBox="0 0 500 50" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.3,30c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,32.6,181.2,32.6,70,40 
                        c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path>
                    </svg>
                </div>
                for you
            </h2>

            <p>
                At BTeachers, we connect you with the best educators in every field. Whether you’re looking for help in math, science, languages, or the arts, our platform offers a diverse range of qualified professionals ready to guide you on your educational journey.
            </p>

            <!-- <div class="btn btn-primary">
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
            </div> -->
        </div>
    </section>
</template>


<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.hero-section {
    background-image: url(../assets/img/jumbotron-background.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: #fff;
    padding: 100px 0;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    transition: background-position 0.1s ease-out;

    h1 {
        font-weight: 700;
    }

    .bold-text {
        font-weight: bold;
    }

    .btn-main {
        background-color:$btn-primary-bg;
        border-color:$btn-primary-bg;
        color: #fff;

        &:hover {
            background-color:$btn-primary-hover-color;
            border-color: $btn-primary-hover-color;
        }
    }

    .btn-teacher {
        background-color:$btn-primary-bg;
        border-color: $btn-primary-bg;
        color: $background-color;
        border-radius: 8px;

        &:hover {
            background-color:$btn-primary-hover-color;
            border-color: $btn-primary-hover-color;
            color: $background-color;
        }
    }

    /* Posiziona l'SVG sotto il testo "perfect teacher" */
    .svg-container {
        display: inline-block;
        position: relative;
    }

    .svg-container svg {
        position: absolute;
        top: 1em; /* Spostiamo l'SVG in basso rispetto al testo */
        left: 0;
    }

    /* Stile per l'animazione del percorso SVG */
    svg path {
        stroke: #fff; /* Colore della linea disegnata */
        stroke-width: 3; /* Spessore della linea */
        fill: none;
        stroke-dasharray: 2000; /* Lunghezza del tratto tratteggiato (valore molto grande per coprire l'intero path) */
        stroke-dashoffset: 2000; /* Nascondiamo completamente il tratto all'inizio */
        animation: draw 1.5s ease-out forwards; /* Animazione con "forwards" per mantenere lo stato finale */
    }

    @keyframes draw {
        to {
            stroke-dashoffset: 0; /* Riduce progressivamente lo `stroke-dashoffset` fino a 0 */
        }
    }
}
</style>

