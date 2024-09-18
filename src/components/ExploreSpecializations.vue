<script>
import ExploreSpecializationsCarousel from './ExploreSpecializationsCarousel.vue';

export default {
    components: {
        ExploreSpecializationsCarousel,
    },

    data() {
        return {

        };
    }
};
</script>

<template>
    <div class="specializations-background">
        <section class="container explore-specializations">
            <div class="row">
                <div class="specializations-overview text-center">
                    <h1>
                        Explore Our Specializations
                    </h1>
                    <p class="lead">
                        At BTeachers, we offer a diverse range of subjects to cater to your learning needs. Whether you’re interested in math, science, languages, or the arts, our platform connects you with expert educators ready to guide you on your educational journey.
                    </p>
                    <ExploreSpecializationsCarousel />
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.specializations-background {
    background-color: black;
    color: white;
}

</style>