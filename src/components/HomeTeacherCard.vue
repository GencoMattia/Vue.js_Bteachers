<script>


export default {
    data() {
        return {
            img: 'http://127.0.0.1:8000/storage/',
            vote: [],
            averageVote: 0,
            star: 5,
        };

    },

    props: {
        teacher: {
            type: Object,
            required: true,
        }
    },

};
</script>

<template>
    <router-link class="router-link" @click.prevent="navigateToProfile(teacher.id)"
        :to="{ name: 'single-teacher', params: { id: teacher.id } }">

        <div class="card">
            <button class="mail">
                <!-- SVG for mail -->
                <svg class="lucide lucide-mail" stroke-linejoin="round" stroke-linecap="round" stroke-width="2"
                    stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect rx="2" y="4" x="2" height="16" width="20"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
            </button>
            <div class="profile-pic">
                <img :src="`${img}${teacher.photo}`" alt="Profile Picture">
            </div>
            <div class="bottom">
                <div class="content">
                    <span class="name">{{ teacher.user.name }} {{ teacher.user.surname }}</span>
                    <span v-for="specialization in teacher.specializations" :key="specialization.id" class="about-me">
                        Specialized in {{ specialization.field }}
                    </span>
                </div>
                <div class="bottom-bottom">
                    <div class="social-links-container">
                        <p v-if="teacher.votes_avg_vote > 0">
                            <!-- Stelle piene -->
                            <span v-for="n in Math.floor(teacher.votes_avg_vote)" :key="'full-' + n">
                                <font-awesome-icon icon="fa-solid fa-star" />
                            </span>

                            <!-- Mezza stella -->
                            <span v-if="teacher.votes_avg_vote % 1 >= 0.5">
                                <font-awesome-icon icon="star-half-stroke" />
                            </span>

                            <!-- Stelle vuote -->
                            <span v-for="x in star - Math.round(teacher.votes_avg_vote)" :key="'empty-' + x">
                                <font-awesome-icon icon="fa-regular fa-star" />
                            </span>
                        </p>
                        <p v-else>
                            The teacher has no ratings.
                        </p>

                    </div>
                    <button class="button">Contact Me</button>
                </div>
            </div>
        </div>
    </router-link>
</template>


<style lang="scss" scoped>
/* From Uiverse.io by Centered101 */
@use "../assets/styles/partials/variables" as *;

.card {
    aspect-ratio: 1 / 1;
    width: 100%;
    background: white;
    border-radius: 32px;
    padding: 3px;
    position: relative;
    box-shadow: #604b4a30 0px 70px 30px -50px;
    transition: all 0.5s ease-in-out;
}

.card .mail {
    position: absolute;
    right: 2rem;
    top: 1.4rem;
    background: transparent;
    border: none;
}

.card .mail svg {
    stroke: $secondary-color;
    stroke-width: 3px;
}

.card .mail svg:hover {
    stroke:  $secondary-color;
}

.card .profile-pic {
    position: absolute;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    top: 3px;
    left: 3px;
    border-radius: 29px;
    z-index: 1;
    border: 0px solid $secondary-color;
    overflow: hidden;
    transition: all 0.5s ease-in-out 0.2s, z-index 0.5s ease-in-out 0.2s;
}

.card .profile-pic img {
    -o-object-fit: cover;
    object-fit: cover;
    width: 100%;
    height: 100%;
    -o-object-position: 0px 0px;
    object-position: 0px 0px;
    transition: all 0.5s ease-in-out 0s;
}

.card .profile-pic svg {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: 0px 0px;
    object-position: 0px 0px;
    transform-origin: 45% 20%;
    transition: all 0.5s ease-in-out 0s;
}

.card .bottom {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* Assicura che gli elementi all'interno siano separati verticalmente */
    position: absolute;
    bottom: 3px;
    left: 3px;
    right: 3px;
    background:$secondary-color;
    top: 80%;
    border-radius: 29px;
    z-index: 2;
    box-shadow: rgba(96, 75, 74, 0.1882352941) 0px 5px 5px 0px inset;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
}

.card .bottom .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    padding: 1rem;
    /* Aggiungi padding per evitare che gli elementi tocchino i bordi */
}

.card .bottom .content .name {
    display: block;
    font-size: 2rem;
    color:$text-color;
    font-weight: bold;
    margin-bottom: 2rem;
}

.card .bottom .content .about-me {
    display: block;
    font-size: 1rem;
    color:$text-color;
}

.card .bottom .bottom-bottom {
    margin-top: auto;
    /* Sposta la sezione in basso */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    /* Aggiungi padding */
}

.card .bottom .bottom-bottom .social-links-container {
    display: flex;
    gap: 1rem;
}

.card .bottom .bottom-bottom .social-links-container svg {
    height: 20px;
    fill: white;
    filter: drop-shadow(0 5px 5px rgba(165, 132, 130, 0.1333333333));
}

.card .bottom .bottom-bottom .social-links-container svg:hover {
    fill: #f55d56;
    transform: scale(1.2);
}

.card .bottom .bottom-bottom .button {
    background:$btn-primary-bg;
    color:$link-color;
    border: none;
    border-radius: 20px;
    font-size: 1.2rem;
    padding: 0.4rem 0.6rem;
    box-shadow: rgba(165, 132, 130, 0.1333333333) 0px 5px 5px 0px;
}

.card .bottom .bottom-bottom .button:hover {
    background:$btn-primary-hover-color;
    color:$text-color;
}

.card:hover {
    border-top-left-radius: 55px;
}

.card:hover .bottom {
    top: 20%;
    border-radius: 80px 29px 29px 29px;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
}

.card:hover .profile-pic {
    width: 100px;
    height: 100px;
    aspect-ratio: 1;
    top: 10px;
    left: 10px;
    border-radius: 50%;
    
    z-index: 3;
    border: 7px solid $secondary-color;
    box-shadow: rgba(96, 75, 74, 0.1882352941) 0px 5px 5px 0px;
    transition: all 0.5s ease-in-out, z-index 0.5s ease-in-out 0.1s;
}

.card:hover .profile-pic:hover {
    transform: scale(1.3);
    border-radius: 0px;
}

.card:hover .profile-pic img {
    transform: scale(2);
    -o-object-position: top;
    object-position: top;
    transition: all 0.5s ease-in-out 0.5s;
    

}

.card:hover .profile-pic svg {
    transform: scale(2);
    transition: all 0.5s ease-in-out 0.5s;
}
</style>