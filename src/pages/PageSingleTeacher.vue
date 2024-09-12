<script>
import axios from "axios";

export default {
    components: {
    },

    data() {
        return {
            profile: {},
            photo: '',
            cv: '',
            vote: [],
            averageVote: '',
            star: 5,
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
                // average vote 
                // se non è presente un voto 
                if (!this.vote || this.vote.length === 0) {
                    console.log('Vote is empty or undefined');
                    return;
                }
                // se è presente uno o più voti
                this.averageVote = 0;
                this.vote.forEach(element => {
                    return this.averageVote = this.averageVote + element.vote
                });
                this.averageVote = Math.ceil(this.averageVote / this.vote.length);
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
        changePage(routeName){
            this.$router.push({name: routeName});
        },

    },

    created() {
    this.fetchProject(this.$route.params.id);
    },
};
</script>

<template>
    <section class=" container">
        <div class="row justify-content-between">
            <!-- profile section  -->
            <div class="col-5 profile border rounded my-2">
                <div>
                    <img :src="getImageUrl(photo)" class="w-100 my-2" alt="Profile-photo">
                    <!-- <embed :src="getImageUrl(cv)" class="w-100" alt="Profile-cv"> -->
                </div>
                <div>
                    <h5 class="text-uppercase me-2"><font-awesome-icon icon="fa-regular fa-id-badge" /> {{ profile.user.name }} {{ profile.user.surname }}</h5> 
                    <div v-for="(specialization, index) in profile.specializations" class="badge rounded-pill text-bg-success"> {{ specialization.name }} </div>
                    <p v-if="averageVote > 0">
                        <span v-for="n in averageVote" :key="n">
                            <font-awesome-icon icon="fa-solid fa-star" />
                        </span>
                        <span v-for="x in star - averageVote" :key="x">
                            <font-awesome-icon icon="fa-regular fa-star" />
                        </span>
                    </p>
                    <p v-else>
                        The teacher has no ratings.
                    </p>
                    <p class="text-wrap word-wrap"><font-awesome-icon icon="fa-solid fa-chalkboard-user" /> {{ profile.service }}</p>
                </div>
            </div>

            <!-- office section  -->
            <div class="col-5 office border rounded my-2">
                <h3>Office <font-awesome-icon icon="fa-solid fa-house-laptop" /></h3>

                <!-- address  -->
                
                <div class="border border-success border-opacity-55 rounded px-2 mb-1">
                    <h4>Address</h4>
                    <p><font-awesome-icon icon="fa-solid fa-location-dot" /> {{ profile.address }}</p>
                </div>

                <!-- contacts  -->
                
                <div class="border border-success border-opacity-55 rounded px-2 mb-1">
                    <h4>Contacts</h4>
                    <p><font-awesome-icon icon="fa-solid fa-phone" /> {{ profile.telephone_number }}</p>
                    <p><font-awesome-icon icon="fa-solid fa-envelope" /> {{ profile.user.email }}</p>
                </div>

                <div class="d-flex justify-content-center my-4" >
                    <a type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#messageModel" data-bs-whatever="@mdo">Contact {{ profile.user.name }} {{ profile.user.surname }} </a>
                    
                    <!-- message form modal  -->
                    <div class="modal fade" id="messageModel" tabindex="-1" aria-labelledby="messageModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <!-- messager name  -->
                                <div class="mb-3">
                                    <label for="messager-name" class="col-form-label">Name:</label>
                                    <input type="text" class="form-control" id="messager-name" name="name">
                                </div>
                                <!-- messager surname  -->
                                <div class="mb-3">
                                    <label for="messager-surname" class="col-form-label">Surname:</label>
                                    <input type="text" class="form-control" id="messager-surname" name="surname">
                                </div>
                                <!-- messager email  -->
                                <div class="mb-3">
                                    <label for="messager-email" class="col-form-label">Email:</label>
                                    <input type="email" class="form-control" id="messager-email" name="email">
                                </div>
                                <!-- messager telephone_number  -->
                                <div class="mb-3">
                                    <label for="messager-telephone-number" class="col-form-label">Telephone number:</label>
                                    <input type="text" class="form-control" id="messager-telephone-number" name="telephone_number">
                                </div>
                                <!-- message text  -->
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">Message:</label>
                                    <textarea class="form-control" id="message-text" name="message_text"></textarea>
                                </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-success">Send message</button>
                            </div>
                            </div>
                        </div>
                    </div>
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

        <!-- reviews section  -->
        <div class="row justify-content-between">
            <div class="col-12 reviews border rounded my-2">
                <h4>Reviews</h4>
                <div v-if="profile.reviews.length > 0">
                    <div v-for="(review, index) in profile.reviews" :key="review"  class="border border-warning border-opacity-75 rounded p-2 mb-2">
                        <p>
                            <strong>
                                <font-awesome-icon icon="fa-solid fa-user" /> {{ review.name }} {{ review.surname }}
                            </strong>
                            <div>
                                <em>
                                    <font-awesome-icon icon="fa-solid fa-envelope" /> {{ review.email }}
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
                <div v-else>
                    The teacher has no reviews.
                </div>
                <div class="d-flex justify-content-center my-4" >
                    <a type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#reviewModel" data-bs-whatever="@mdo">Review {{ profile.user.name }} {{ profile.user.surname }}</a>

                    <!-- Review form modal  -->
                    <div class="modal fade" id="reviewModel" tabindex="-1" aria-labelledby="reviewModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">New review</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <!-- reviewer name  -->
                                <div class="mb-3">
                                    <label for="reviewer-name" class="col-form-label">Name:</label>
                                    <input type="text" class="form-control" id="reviewer-name" name="name">
                                </div>
                                <!-- reviewer surname  -->
                                <div class="mb-3">
                                    <label for="reviewer-surname" class="col-form-label">Surname:</label>
                                    <input type="text" class="form-control" id="reviewer-surname" name="surname">
                                </div>
                                <!-- reviewer email  -->
                                <div class="mb-3">
                                    <label for="reviewer-email" class="col-form-label">Email:</label>
                                    <input type="email" class="form-control" id="reviewer-email" name="email">
                                </div>
                                <!-- review text  -->
                                <div class="mb-3">
                                    <label for="review-text" class="col-form-label">Review:</label>
                                    <textarea class="form-control" id="review-text" name="review_text"></textarea>
                                </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-success">Send message</button>
                            </div>
                            </div>
                        </div>
                    </div>
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