<script>
export default {
    data() {
        return {
            name: "NotFoundPage",
        };
    }
};
</script>

<template>
    <div class="not-found-page text-center">
        <div class="container">
            <h1 class="display-1">404</h1>
            <h2 class="mb-4">Pagina non trovata</h2>
            <p class="lead">Siamo spiacenti, la pagina che stai cercando non esiste o è stata spostata.</p>
            <router-link to="/" class="btn btn-main mt-4">Torna alla Home</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;

.not-found-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $background-color;
    color: $text-color;

    .container {
        max-width: 600px;
        padding: 40px;
        background-color: $background-color;
        box-shadow: $card-box-shadow;
        border-radius: 8px;

        h1 {
        font-size: 6rem;
        font-weight: 700;
        color: $primary-color;
        }

        h2 {
        font-size: 2rem;
        margin-bottom: 20px;
        }

        p {
        font-size: 1.25rem;
        color: $text-color;
        }

        .btn-main {
        background-color:$btn-primary-bg;
        border-color: $btn-primary-bg;
        color: #fff;
        padding: 10px 20px;
        font-size: 1rem;

        &:hover {
            background-color: $btn-primary-hover-color;
            border-color: $btn-primary-hover-color;
        }
        }
    }
}
</style>