<script>
export default {
    data() {
        return {
            
        };
    },

    computed: {
        
    },

    props: {

    }
};
</script>

<template>
    <section class="container ">
        <div class="row m-4">
            <div class="col-6">
                <h2>About Us</h2>
                <p class="mb-4">At BTeachers, our mission is to empower learners by connecting them with exceptional educators who inspire and facilitate their educational journeys. We envision being the leading platform for personalized learning experiences, where every student can find the right teacher to unlock their potential.</p>
                <div class="col-12 d-flex flex-wrap justify-content-around">
                    <div class="col-6 px-1">
                        <h2>5000 teachers</h2>
                        <p>Since our inception, we have successfully connected over 100 students with qualified teachers, ensuring a tailored learning experience that meets individual needs.</p>
                    </div>
                    <div class="col-6 px-1">
                        <h2>20 specializations</h2>
                        <p>Our platform features a diverse range of 50 specializations, from math and science to languages and the arts, allowing learners to explore various subjects and find their perfect match.</p>
                    </div>
                    <div class="col-6 ">
                        <h2>100 countries</h2>
                        <p>BTeachers has expanded its reach to 15 countries, making quality education accessible to learners around the globe, regardless of their location.</p>
                    </div>
                    <div class="col-6 px-1">
                        <h2>100
                            values</h2>
                        <p>We uphold 4 core values: Diversity, Quality, Accessibility, and Community, ensuring that our platform remains a supportive environment for both learners and educators.</p>
                    </div>
                </div>
            </div>
            <div class="col-6 d-flex">
                <img class="img-fluid  rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6THKb-j7VG8Fmr3g7hxOts6UGqmH7qS3oRA&s" alt="Responsive image teacher-img">
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.teacher-card {
    margin-bottom: $card-margin-bottom;
    box-shadow: $card-box-shadow;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    background-color: $main-background-color;

    &:hover {
        transform: $card-hover-transform;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    .card-img-top {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-bottom: 2px solid $secondary-color;
    }

    .card-body {
        padding: 20px;
        text-align: center;

        .card-title {
            font-size: $card-title-font-size;
            font-weight: $card-title-font-weight;
            color: $primary-color;
            margin-bottom: 10px;
        }

        .specialization {
            font-size: $card-text-font-size;
            color: $text-color;
        }

        .teacher-info {
            font-size: 0.9rem;
            color: $card-text-color;
            margin-top: 10px;

            p {
                margin: 0;
            }

            strong {
                color: $primary-color;
            }
        }
    }
}

.router-link {
    text-decoration: none;

    &:hover {
        text-decoration: none;
    }
}
</style>
