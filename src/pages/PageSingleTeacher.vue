<script>
import axios from "axios";
// import SingleProfileCard from '@/components/SingleProfileCard.vue';

export default {
    components: {
        // SingleProfileCard,
    },

    data() {
        return {
            profile: {},
            photo: '',
            cv: '',
            vote: [],
            averageVote: '',
        };
    },

    methods: {
        fetchProject(id){
            axios.get(`http://127.0.0.1:8000/api/profiles/${id}`, {
                params: {

                }
            }).then((response) => {
                
                this.profile = response.data.results;
                this.photo = response.data.results.photo;
                this.cv = response.data.results.cv;
                this.vote = response.data.results.votes;

                if (!this.vote || this.vote.length === 0) {
                    console.log('Vote is empty or undefined');
                    return;
                    }
                    this.averageVote = 0;
                    this.vote.forEach(element => {
                    return this.averageVote = this.averageVote + element.vote
                    });
                    this.averageVote = this.averageVote / this.vote.length;
                    console.log(this.averageVote)
            
                }).catch((error) => {
                this.$router.push({name: "404-not-found"});
                console.log(error);
            })
        },
    getImageUrl(path) {
      // Definisci il base URL del tuo server
      const baseUrl = 'http://127.0.0.1:8000/storage/'; // Cambia con il tuo dominio
        return baseUrl + path;
    },
    getAverage(vote){
            console.log(vote)
            
    },
        changePage(routeName){
            this.$router.push({name: routeName});
        },

    },

    created() {
    this.fetchProject(this.$route.params.id);
    this.getAverage(this.vote);
    },
};
</script>

<template>
    <section class=" container">
        <div class="row justify-content-between">
            <div class="col-5 profile border rounded my-2">
                <div>
                    <img :src="getImageUrl(photo)" class="w-100 my-2" alt="Profile-photo">
                    <!-- <embed :src="getImageUrl(cv)" class="w-100" alt="Profile-cv"> -->
                </div>
                <div>
                    <h5 class="text-uppercase d-inline me-2">{{ profile.user.name }} {{ profile.user.surname }}</h5> 
                    <span v-for="(specialization, index) in profile.specializations" class="badge rounded-pill text-bg-success"> {{ specialization.name }} </span>
                    <p class="text-wrap word-wrap">{{ profile.service }}</p>
                </div>
            </div>
            <div class="col-5 office border rounded my-2">
                <h3>Office</h3>
                <div class="border border-success border-opacity-55 rounded px-2 mb-1">
                    <h4>Address</h4>
                    <p>{{ profile.address }}</p>
                </div>
                <div class="border border-success border-opacity-55 rounded px-2 mb-1">
                    <h4>Contacts</h4>
                    <p>Telephone Number: {{ profile.telephone_number }}</p>
                    <p>Email: {{ profile.user.email }}</p>
                </div>
            </div>
        </div>
        <div class="row justify-content-between">
            <!-- section specialization  -->
            <div class="col-12 specialization border rounded my-2">
                <h4>Specializzations</h4>
                <div v-for="(specialization, index) in profile.specializations" class="border border-success border-opacity-75 rounded p-2 mb-2">
                    <p>
                        <strong>
                            Field: {{ specialization.field }}
                        </strong>
                        <div>
                            <em>
                                {{ specialization.name }}
                            </em>
                        </div>
                    </p>
                </div>
            </div>
        </div>
        <div class="row justify-content-between">
            <!-- section votes  -->
            <div class="col-5 reviews border rounded my-2">
                <h4>Votes</h4>
                <div v-for="(vote, index) in profile.votes" class="border border-warning border-opacity-75 rounded p-2 mb-2">
                    <p>
                        <div>
                                Vote: {{ vote.vote }}
                        </div>
                        <strong>
                            {{ vote.name }}
                        </strong>
                    </p>
                </div>
            </div>
            <!-- section review  -->
            <div class="col-5 reviews border rounded my-2">
                <h4>Reviews</h4>
                <div v-for="(review, index) in profile.reviews" class="border border-warning border-opacity-75 rounded p-2 mb-2">
                    <p>
                        <strong>
                            {{ review.name }} {{ review.surname }}
                        </strong>
                        <div>
                            <em>
                                Email: {{ review.email }}
                            </em>
                        </div>
                        <div>
                            <p>
                                {{ review.review_text }}
                            </p>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    .profile{
        background-color: #f57c00;
    }
    
</style>