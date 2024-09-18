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
            reviewError: {
                name: '',
                surname: '',
                email: '',
                review_text: '',
            }
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
        // close modal 
        closeModal(myModel) {
            var modal = document.getElementById(myModel);

            modal.classList.remove('show');
            modal.setAttribute('aria-hidden', 'true');
            modal.removeAttribute('tabindex');
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
            document.body.style.overflow = ''; 
            document.body.style.padding = 0; 

            const backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) {
                backdrop.parentNode.removeChild(backdrop);
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
                this.closeModal('messageModel');

            console.log('Message sent successfully:', response, playload);
            })
            .catch((error) => {
            console.log('Error sending message:', error);
            });
        },
        // message form input validation 
        messageValidation() {
            // errore nome 
            if ( (document.getElementById('messager-name').value.length != 0 && document.getElementById('messager-name').value.length < 3) || document.getElementById('messager-name').value.length > 100 ) {
                this.messageError.name = 'The length of the name must be between 3 and 100.';
            } else {
                this.messageError.name = '';
            };

            // error surname 
            if ( (document.getElementById('messager-surname').value.length != 0 && document.getElementById('messager-surname').value.length < 3) || document.getElementById('messager-surname').value.length > 100 ) {
                this.messageError.surname = 'The length of the surname must be between 3 and 100.';
            } else {
                this.messageError.surname = '';
            };

            //  error email 
            if (!document.getElementById('messager-email').value) {
                this.messageError.email = 'The email is required.';
            } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById('messager-email').value))) {
                this.messageError.email = 'The email is wrong.';
            } else {
                this.messageError.email = '';
            };

            // telephone_number error 
            if (document.getElementById('messager-telephone-number').value.length != 0 && document.getElementById('messager-telephone-number').value.length < 6 || document.getElementById('messager-telephone-number').value.length > 20 ) {
                this.messageError.telephone_number = 'The length of telephone number must be between 6 and 20.';
            } else {
                this.messageError.telephone_number = '';
            };

            // message text error 
            if (!document.getElementById('message-text').value) {
                this.messageError.message_text = 'The message is required.';
            } else if(document.getElementById('message-text').value > 3000){
                this.messageError.message_text = 'The message is too long.';
            } else {
                this.messageError.message_text = '';
            };
            // invio in database 
            if ((document.getElementById('message-text').value || document.getElementById('message-text').value < 3000) && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById('messager-email').value)) && ( (!document.getElementById('messager-name').value || document.getElementById('messager-name').value.length >= 3) && document.getElementById('messager-name').value.length <= 100 ) && ( (!document.getElementById('messager-surname').value || document.getElementById('messager-surname').value.length >= 3) && document.getElementById('messager-surname').value.length <= 100 ) && (!document.getElementById('messager-telephone-number').value || document.getElementById('messager-telephone-number').value.length >= 6 && document.getElementById('messager-telephone-number').value.length <= 20 )) {
                this.sendMessage();
            } else {
                console.log("can't send message");
            };
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
                this.closeModal('reviewModel');
                this.fetchProject(this.profile.id);
                
            console.log('Review sent successfully:', response, playload);
            })
            .catch((error) => {
            console.log('Error sending review:', error);
            });
        },

        // review form input validation 
        reviewValidation() {
            // errore nome 
            if ( (document.getElementById('reviewer-name').value.length != 0 && document.getElementById('reviewer-name').value.length < 3) || document.getElementById('reviewer-name').value.length > 100 ) {
                this.reviewError.name = 'The length of the name must be between 3 and 100.';
            } else {
                this.reviewError.name = '';
            };

            // error surname 
            if ( (document.getElementById('reviewer-surname').value.length != 0 && document.getElementById('reviewer-surname').value.length < 3) || document.getElementById('reviewer-surname').value.length > 100 ) {
                this.reviewError.surname = 'The length of the surname must be between 3 and 100.';
            } else {
                this.reviewError.surname = '';
            };

            //  error email 
            if (!document.getElementById('reviewer-email').value) {
                this.reviewError.email = 'The email is required.';
            } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById('reviewer-email').value))) {
                this.reviewError.email = 'The email is wrong.';
            } else {
                this.reviewError.email = '';
            };

            // review text error 
            if (!document.getElementById('review-text').value) {
                this.reviewError.review_text = 'The review is required.';
            } else if(document.getElementById('review-text').value > 3000){
                this.reviewError.review_text = 'The review is too long.';
            } else {
                this.reviewError.review_text = '';
            };
            // invio in database 
            if ((document.getElementById('review-text').value || document.getElementById('review-text').value < 3000) && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById('reviewer-email').value)) && ( (!document.getElementById('reviewer-name').value.length || document.getElementById('reviewer-name').value.length >= 3) && document.getElementById('reviewer-name').value.length <= 100 ) && ( (!document.getElementById('reviewer-surname').value.length || document.getElementById('reviewer-surname').value.length >= 3) && document.getElementById('reviewer-surname').value.length <= 100 )) {
                this.sendReview();
            } else {
                console.log("can't send review");
            };
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
                this.closeModal('voteModel');
                this.fetchProject(this.profile.id);
            console.log('Vote sent successfully:', response, playload);
            })
            .catch((error) => {
            console.log('Error sending vote:', error);
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
    <section class=" container-fluid single-profile">
        <div class="row justify-content-around first-container">
            <!-- profile section  -->
            <div class="col-6 col-md-5 col-lg-4 col-xl-3 profile-img-container my-2">
                    <img :src="getImageUrl(photo)" class="profile-img col-6" alt="Profile-photo">
            </div>
            <!-- office section  -->
            <div class="col-4 profile-container my-2">
                <!-- <h3 class="text-break" >Office <font-awesome-icon icon="fa-solid fa-house-laptop" /></h3> -->
                <div class="profile">
                    <h3 class="text-uppercase me-2 text-break">
                        <font-awesome-icon icon="fa-regular fa-id-badge" :class="profile.is_premium?'gold':''" /> 
                        {{ profile.user.name }} {{ profile.user.surname }}</h3> 
                    <div v-for="(specialization, index) in profile.specializations" class="badge rounded-pill text-bg-success text-break"> {{ specialization.name }} </div>
                    <p  v-if="averageVote > 0">
                        <span v-for="n in averageVote" :key="n">
                            <font-awesome-icon icon="fa-solid fa-star" class="icon-color"/>
                        </span>
                        <span v-for="x in star - averageVote" :key="x">
                            <font-awesome-icon icon="fa-regular fa-star" class="icon-color"  />
                        </span>
                    </p>
                    <p class="text-break" v-else>
                        The teacher has no ratings.
                    </p>
                    <p class="text-break"><font-awesome-icon icon="fa-solid fa-chalkboard-user" class="icon-color" /> {{ profile.service }}</p>
                </div>

                <!-- address  -->
                
                <div class="mb-1">
                    <h5 class="text-break" >Address</h5>
                    <p class="text-break" >
                        <font-awesome-icon icon="fa-solid fa-location-dot" class="icon-color" /> {{ profile.address }}</p>
                </div>

                <!-- contacts  -->
                
                <div class= "mb-1">
                    <h4 class="text-break" >Contacts</h4>
                    <p class="text-break" ><font-awesome-icon icon="fa-solid fa-phone" class="icon-color" /> {{ profile.telephone_number }}</p>
                    <p class="text-break" ><font-awesome-icon icon="fa-solid fa-envelope" class="icon-color" /> {{ profile.user.email }}</p>
                </div>

                <div class="d-flex justify-content-center my-4" >
                    <a href="#message-form-body" type="button" class="btn text-break contact-button">Contact {{ profile.user.name }} {{ profile.user.surname }} </a>
                    
                    <!-- message form modal  -->
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
                    {{ profile.user.name }} {{ profile.user.surname }} has no reviews.
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
                                    <!-- name error  -->
                                    <span v-if="reviewError.name" class="text-danger">{{ reviewError.name }}</span>
                                </div>
                                <!-- reviewer surname  -->
                                <div class="mb-3">
                                    <label for="reviewer-surname" class="col-form-label">Surname:</label>
                                    <input type="text" class="form-control" id="reviewer-surname" name="surname">
                                    <!-- surname error  -->
                                    <span v-if="reviewError.surname" class="text-danger">{{ reviewError.surname }}</span>
                                </div>
                                <!-- reviewer email  -->
                                <div class="mb-3">
                                    <label for="reviewer-email" class="col-form-label">Email:</label>
                                    <input type="email" class="form-control" id="reviewer-email" name="email">
                                    <!-- email error  -->
                                    <span v-if="reviewError.email" class="text-danger">{{ reviewError.email }}</span>
                                </div>
                                <!-- review text  -->
                                <div class="mb-3">
                                    <label for="review-text" class="col-form-label">Review:</label>
                                    <textarea class="form-control" id="review-text" name="review_text"></textarea>
                                <!-- text error  -->
                                <span v-if="reviewError.review_text" class="text-danger">{{ reviewError.review_text }}</span>
                                </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-success" @click="reviewValidation()">Send review</button>
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

        <!-- contact us form  -->
        <div class="row" id="message-form-body">
            <div class="col-6">
                <h3>Contact {{ profile.user.name }} {{ profile.user.surname }}</h3>
                <form @submit.prevent="messageValidation()">
                    <!-- messages profile_id  -->
                    <input type="text" class="form-control" id="message-profile-id":value="profile.id" hidden>
    
                    <!-- messager name  -->
                    <div class="mb-3">
                        <label class="col-form-label">Name:</label>
                        <input type="text" class="form-control" id="messager-name">
                        <!-- name error  -->
                        <span v-if="messageError" class="text-danger">{{ messageError.name }}</span>
                    </div>
                    <!-- messager surname  -->
                    <div class="mb-3">
                        <label class="col-form-label">Surname:</label>
                        <input type="text" class="form-control" id="messager-surname">
                        <!-- surname error  -->
                        <span v-if="messageError" class="text-danger">{{ messageError.surname }}</span>
                    </div>
                    <!-- messager email  -->
                    <div class="mb-3">
                        <label class="col-form-label">Email:</label>
                        <input type="email" class="form-control" id="messager-email">
                        <!-- email error  -->
                        <span v-if="messageError" class="text-danger">{{ messageError.email }}</span>
                    </div>
                    <!-- messager telephone_number  -->
                    <div class="mb-3">
                        <label class="col-form-label">Telephone number:</label>
                        <input type="text" class="form-control" id="messager-telephone-number">
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
        </div>
        <div class="message-button">
            <button type="submit" class="btn btn-success" @click="messageValidation()">Send message</button>
        </div>
    </section>
</template>

<style scoped lang="scss">
    .first-container{
        background-image: url(../assets/img/assortment-teacher-s-day-elements_23-2149044959.jpg);
        background-size: cover;
        
    }
    .single-profile{
        background-color: white;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
    }
    .profile-img-container{
        align-self: center;
        .profile-img{
            width: 100%;
            border: 0px solid transparent;
            border-radius: 1.5rem;
            align-items: center;
            object-fit: cover;
            object-position: top;
            box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
        }
    }
    .profile-container{
        padding: 2rem;
        color: white;
    }
    .gold{
        color: #ff7b00;
    }
    .icon-color{
        color: #78da4b;
    }
    .contact-button{
        background-color: #78da4b;
        color: white;
    }
</style>