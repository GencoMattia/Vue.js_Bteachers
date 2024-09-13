<script>
import { store } from "@/store";
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
            store,
            messageError: {
                name: '',
                surname: '',
                email: '',
                telephone_number: '',
                message_text: '',
            },
        };
    },

    props: ['id'],
    
    methods: {
        fetchProject(id){
            axios.get(`http://127.0.0.1:8000/api/profiles/${id}`, {
                params: {

                }
            }).then((response) => {
                
                this.profile = response.data.results;
                this.photo = response.data.results.photo;
                this.cv = response.data.results.cv;
                console.log(this.cv)
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

        // message form input validation 
        messageValidation() {
            // errore nome 
            if ( (document.getElementById('messager-name').value.length != 0 && document.getElementById('messager-name').value.length < 3) || document.getElementById('messager-name').value.length > 100 ) {
                this.messageError.name = 'The length of the name must be between 3 and 100';
            };

            if (!document.getElementById('messager-email').value) {
                this.messageError.email = 'The email is required';
            };


            if (!document.getElementById('message-text').value) {
                this.messageError.message_text = 'The message is required';
            }
        },
        // send message to teacher 
        sendMessage() {
            const playload = {
                messages: [
                    {
                    profile_id: document.getElementById('message-profile-id').value,
                    name: document.getElementById('messager-name').value,
                    surname: document.getElementById('messager-surname').value,
                    email: document.getElementById('messager-email').value,
                    telephone_number: document.getElementById('messager-telephone-number').value,
                    message_text: document.getElementById('message-text').value,
                    }
                ]
            }

            axios.post(`http://127.0.0.1:8000/api/profiles/${this.profile.id}`, playload)
            .then((response) => {
                document.getElementById('message-profile-id').value = '',
                document.getElementById('messager-name').value = '',
                document.getElementById('messager-surname').value = '',
                document.getElementById('messager-email').value = '',
                document.getElementById('messager-telephone-number').value = '',
                document.getElementById('message-text').value = '',

            console.log('Message sent successfully:', response, playload);
            })
            .catch((error) => {
            console.log('Error sending message:', error);
            });
        },
        // send review 
        sendReview() {
            const playload = {
                reviews: [
                    {
                    profile_id: document.getElementById('review-profile-id').value,
                    name: document.getElementById('reviewer-name').value,
                    surname: document.getElementById('reviewer-surname').value,
                    email: document.getElementById('reviewer-email').value,
                    review_text: document.getElementById('review-text').value,
                    }
                ]
            }

            axios.post(`http://127.0.0.1:8000/api/profiles/${this.profile.id}`, playload)
            .then((response) => {
                document.getElementById('review-profile-id').value = '',
                document.getElementById('reviewer-name').value = '',
                document.getElementById('reviewer-surname').value = '',
                document.getElementById('reviewer-email').value = '',
                document.getElementById('review-text').value = '',
                
            console.log('Message sent successfully:', response, playload);
            })
            .catch((error) => {
            console.log('Error sending message:', error);
            });
        },


        // send vote
        sendVote() {
            const playload = {
                votes: [
                    {
                    profile_id: document.getElementById('vote-profile-id').value,
                    vote_id: document.getElementById('vote-id').value,
                    }
                ]
            }
            axios.post(`http://127.0.0.1:8000/api/profiles/${this.profile.id}`, playload)
            .then((response) => {
            console.log('Message sent successfully:', response, playload);
            })
            .catch((error) => {
            console.log('Error sending message:', error);
            });
        },

        getImageUrl(path) {
        // server base url
        const baseUrl = 'http://127.0.0.1:8000/storage/';
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
                    <h5 class="text-uppercase me-2 text-break"><font-awesome-icon icon="fa-regular fa-id-badge" /> {{ profile.user.name }} {{ profile.user.surname }}</h5> 
                    <div v-for="(specialization, index) in profile.specializations" class="badge rounded-pill text-bg-success text-break"> {{ specialization.name }} </div>
                    <p  v-if="averageVote > 0">
                        <span v-for="n in averageVote" :key="n">
                            <font-awesome-icon icon="fa-solid fa-star" />
                        </span>
                        <span v-for="x in star - averageVote" :key="x">
                            <font-awesome-icon icon="fa-regular fa-star" />
                        </span>
                    </p>
                    <p class="text-break" v-else>
                        The teacher has no ratings.
                    </p>
                    <p class="text-break"><font-awesome-icon icon="fa-solid fa-chalkboard-user" /> {{ profile.service }}</p>
                </div>
            </div>

            <!-- office section  -->
            <div class="col-5 office border rounded my-2">
                <h3 class="text-break" >Office <font-awesome-icon icon="fa-solid fa-house-laptop" /></h3>

                <!-- address  -->
                
                <div class="border border-success border-opacity-55 rounded px-2 mb-1">
                    <h4 class="text-break" >Address</h4>
                    <p class="text-break" ><font-awesome-icon icon="fa-solid fa-location-dot" /> {{ profile.address }}</p>
                </div>

                <!-- contacts  -->
                
                <div class="border border-success border-opacity-55 rounded px-2 mb-1">
                    <h4 class="text-break" >Contacts</h4>
                    <p class="text-break" ><font-awesome-icon icon="fa-solid fa-phone" /> {{ profile.telephone_number }}</p>
                    <p class="text-break" ><font-awesome-icon icon="fa-solid fa-envelope" /> {{ profile.user.email }}</p>
                </div>

                <div class="d-flex justify-content-center my-4" >
                    <a type="button" class="btn btn-success text-break" data-bs-toggle="modal" data-bs-target="#messageModel" data-bs-whatever="@mdo">Contact {{ profile.user.name }} {{ profile.user.surname }} </a>
                    
                    <!-- message form modal  -->
                    <div class="modal fade" id="messageModel" tabindex="-1" aria-labelledby="messageModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="messageModalLabel">New message</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form @submit.prevent="messageValidation()">
                                    <!-- messages profile_id  -->
                                    <input type="text" class="form-control" id="message-profile-id" name="messageData.profile_id" :value="profile.id" hidden>

                                    <!-- messager name  -->
                                <div class="mb-3">
                                    <label for="messager-name" class="col-form-label">Name:</label>
                                    <input type="text" class="form-control" id="messager-name" name="messageData.name">
                                    <!-- name error  -->
                                    <span v-if="messageError" class="text-danger">{{ messageError.name }}</span>
                                </div>
                                <!-- messager surname  -->
                                <div class="mb-3">
                                    <label for="messager-surname" class="col-form-label">Surname:</label>
                                    <input type="text" class="form-control" id="messager-surname" name="messageData.surname">
                                    <!-- surname error  -->
                                    <span v-if="messageError" class="text-danger">{{ messageError.surname }}</span>
                                </div>
                                <!-- messager email  -->
                                <div class="mb-3">
                                    <label for="messager-email" class="col-form-label">Email:</label>
                                    <input type="email" class="form-control" id="messager-email" name="messageData.email">
                                    <!-- email error  -->
                                    <span v-if="messageError" class="text-danger">{{ messageError.email }}</span>
                                </div>
                                <!-- messager telephone_number  -->
                                <div class="mb-3">
                                    <label for="messager-telephone-number" class="col-form-label">Telephone number:</label>
                                    <input type="text" class="form-control" id="messager-telephone-number" name="messageData.telephone_number">
                                    <!-- telephone number error  -->
                                    <span v-if="messageError" class="text-danger">{{ messageError.telephone_number }}</span>
                                </div>
                                <!-- message text  -->
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">Message:</label>
                                    <textarea class="form-control" id="message-text" name="messageData.message_text"></textarea>
                                    <!-- message text error  -->
                                    <span v-if="messageError" class="text-danger">{{ messageError.message_text }}</span>
                                </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-success" @click="sendMessage(), messageValidation()">Send message</button>
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
                <h4 class="text-break" >Specializzations</h4>
                <div v-for="(specialization, index) in profile.specializations" class="border border-success border-opacity-75 rounded p-2 mb-2">
                    <p class="text-break">
                        <strong>
                            Field: {{ specialization.field }}
                        </strong>
                        <div class="text-break" >
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
                <h4 class="text-break" >Reviews</h4>
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
                <div v-else class="text-break">
                    {{ profile.user.name }} {{ profile.user.name }} has no reviews.
                </div>
                <div class="d-flex justify-content-center my-4" >
                    <a type="button" class="btn btn-success text-break" data-bs-toggle="modal" data-bs-target="#reviewModel" data-bs-whatever="@mdo">Review {{ profile.user.name }} {{ profile.user.surname }}</a>

                    <!-- Review form modal  -->
                    <div class="modal fade" id="reviewModel" tabindex="-1" aria-labelledby="reviewModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="reviewModalLabel">New review</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <!-- reviews profile_id  -->
                                    <input type="text" class="form-control" id="review-profile-id" name="profile_id" :value="profile.id" hidden>
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
                                <button type="button" class="btn btn-success" @click="sendReview">Send review</button>
                            </div>
                            </div>
                        </div>
                    </div>

                    <!-- vote model form  -->
                    <a type="button" class="btn btn-success mx-3 text-break" data-bs-toggle="modal" data-bs-target="#voteModel" data-bs-whatever="@mdo">Vote {{ profile.user.name }} {{ profile.user.surname }}</a>

                    <div class="modal fade" id="voteModel" tabindex="-1" aria-labelledby="voteModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="voteModalLabel">New vote</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <!-- vote profile_id  -->
                                    <input type="text" class="form-control" id="vote-profile-id" name="profile_id" :value="profile.id" hidden>
                                    <!-- vote  -->
                                    <select class="form-select" id="vote-id" name="vote-id" aria-label="Default select example">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-success" @click="sendVote">Send vote</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <embed :src="getImageUrl(cv)" class="w-100 cv-viewer" height="400px">
        </div>
    </section>
</template>

<style scoped lang="scss">
    .profile{
        background-color: #f57c00;
    }
    .cv-viewer{
        border-radius: 2rem;
    }
</style>