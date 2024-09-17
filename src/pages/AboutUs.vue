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
    <h1>aboutUs</h1>
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
