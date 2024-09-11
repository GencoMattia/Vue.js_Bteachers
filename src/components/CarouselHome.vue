<script>
export default {
    components:{
        FontAwesomeIcon,
    },
    data() {
        return {
            
        };
    }
};
import { FontAwesomeIcon } from "../js/font-awesome";
</script>

<template>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://www.mit.gov.it/nfsmitgov/files/styles/notizia_720x405_/public/media/notizia/2022-10/sen%20Salvini.jpg?itok=kjZ3SqCg" class="d-block w-100" alt="image1">
            </div>
            <div class="carousel-item">
                <img src="https://cdn.pixabay.com/photo/2023/10/12/08/23/bird-8310172_1280.png" class="d-block w-100" alt="image2">
            </div>
            <div class="carousel-item">
                <img src="https://cdn.pixabay.com/photo/2023/07/26/20/05/gull-8151932_1280.jpg" class="d-block w-100" alt="image3">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use "../assets/styles/partials/variables" as *;
    $carousel-transition-duration:.2s;
    
    .carousel{
        width: 1000px;
        margin: 0 auto;
        margin-bottom: 3rem;
    }

</style>