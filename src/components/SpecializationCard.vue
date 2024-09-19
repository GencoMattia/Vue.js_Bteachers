<script>
export default {
    data() {
        return {

        };
    },

    props: {
        specialization: {
            type: Object,
            required: true,
        }
    }
};

</script>

<template>
    <div class="card">
        <img :src="specialization.img" :alt="specialization.field">
        <p class="card-title">{{ specialization.field }}</p>
        <p class="card-body">
            {{ specialization.description }}
        </p>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.card {
    padding: 20px;
    width: 330px;
    min-height: 370px;
    border-radius: 20px;
    background: #212121;
    box-shadow: 5px 5px 8px #1b1b1b,
        -5px -5px 8px #272727;
    transition: 0.4s;
}

.card:hover {
    translate: 0 -10px;
}

.card-title {
    font-size: 18px;
    font-weight: 600;
    color: #b2eccf;
    margin: 15px 0 0 10px;
}

.card-image {
    min-height: 170px;
    background-color: #313131;
    border-radius: 15px;
    background: #313131;
    box-shadow: inset 5px 5px 3px #2f2f2f,
        inset -5px -5px 3px #333333;
}

.card-body {
    margin: 13px 0 0 10px;
    color: rgb(184, 184, 184);
    font-size: 15px;
}

.footer {
    float: right;
    margin: 28px 0 0 18px;
    font-size: 13px;
    color: #b3b3b3;
}

.by-name {
    font-weight: 700;
}
</style>