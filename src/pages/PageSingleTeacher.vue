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
                success: '',
            },
            reviewError: {
                name: '',
                surname: '',
                email: '',
                review_text: '',
                success: '',
            },
            voteError: {
                success: '',
            }
        };
    },

    props: ['id'],

    methods: {
        fetchProject(id) {
            axios.get(`http://127.0.0.1:8000/api/profiles/${id}`, {
                params: {

                }
            }).then((response) => {

                this.profile = response.data.results;
                this.photo = response.data.results.photo;
                this.cv = response.data.results.cv;
                console.log(this.cv)
                this.vote = response.data.results.votes;
                this.averageVote = response.data.results.votes_avg_vote;
                // average vote 
                // se non è presente un voto 
                if (!this.vote || this.vote.length === 0) {
                    console.log('Vote is empty or undefined');
                    return;
                }
                // se è presente uno o più voti
                // this.averageVote = 0;
                // this.vote.forEach(element => {
                //     return this.averageVote = this.averageVote + element.vote
                // });
                // this.averageVote = Math.ceil(this.averageVote / this.vote.length);
                // console.log(this.averageVote)

            }).catch((error) => {
                this.$router.push({ name: "404-not-found" });
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
                        this.messageError.success = 'Message sent successfully!',

                        console.log('Message sent successfully:', response, playload);
                })
                .catch((error) => {
                    console.log('Error sending message:', error);
                });
        },
        // message form input validation 
        messageValidation() {
            // errore nome 
            if ((document.getElementById('messager-name').value.length != 0 && document.getElementById('messager-name').value.length < 3) || document.getElementById('messager-name').value.length > 100) {
                this.messageError.name = 'The length of the name must be between 3 and 100.';
            } else {
                this.messageError.name = '';
            };

            // error surname 
            if ((document.getElementById('messager-surname').value.length != 0 && document.getElementById('messager-surname').value.length < 3) || document.getElementById('messager-surname').value.length > 100) {
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
            if (document.getElementById('messager-telephone-number').value.length != 0 && document.getElementById('messager-telephone-number').value.length < 6 || document.getElementById('messager-telephone-number').value.length > 20) {
                this.messageError.telephone_number = 'The length of telephone number must be between 6 and 20.';
            } else {
                this.messageError.telephone_number = '';
            };

            // message text error 
            if (!document.getElementById('message-text').value) {
                this.messageError.message_text = 'The message is required.';
            } else if (document.getElementById('message-text').value > 3000) {
                this.messageError.message_text = 'The message is too long.';
            } else {
                this.messageError.message_text = '';
            };
            // invio in database 
            if ((document.getElementById('message-text').value || document.getElementById('message-text').value < 3000) && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById('messager-email').value)) && ((!document.getElementById('messager-name').value || document.getElementById('messager-name').value.length >= 3) && document.getElementById('messager-name').value.length <= 100) && ((!document.getElementById('messager-surname').value || document.getElementById('messager-surname').value.length >= 3) && document.getElementById('messager-surname').value.length <= 100) && (!document.getElementById('messager-telephone-number').value || document.getElementById('messager-telephone-number').value.length >= 6 && document.getElementById('messager-telephone-number').value.length <= 20)) {
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
                        this.reviewError.success = 'Review sent successfully!',
                        this.closeModal('reviewModel');
                    this.fetchProject(this.profile.id);

                    console.log('Review sent successfully!', response, playload);
                })
                .catch((error) => {
                    console.log('Error sending review:', error);
                });
        },

        // review form input validation 
        reviewValidation() {
            // errore nome 
            if ((document.getElementById('reviewer-name').value.length != 0 && document.getElementById('reviewer-name').value.length < 3) || document.getElementById('reviewer-name').value.length > 100) {
                this.reviewError.name = 'The length of the name must be between 3 and 100.';
            } else {
                this.reviewError.name = '';
            };

            // error surname 
            if ((document.getElementById('reviewer-surname').value.length != 0 && document.getElementById('reviewer-surname').value.length < 3) || document.getElementById('reviewer-surname').value.length > 100) {
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
            } else if (document.getElementById('review-text').value > 3000) {
                this.reviewError.review_text = 'The review is too long.';
            } else {
                this.reviewError.review_text = '';
            };
            // invio in database 
            if ((document.getElementById('review-text').value || document.getElementById('review-text').value < 3000) && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById('reviewer-email').value)) && ((!document.getElementById('reviewer-name').value.length || document.getElementById('reviewer-name').value.length >= 3) && document.getElementById('reviewer-name').value.length <= 100) && ((!document.getElementById('reviewer-surname').value.length || document.getElementById('reviewer-surname').value.length >= 3) && document.getElementById('reviewer-surname').value.length <= 100)) {
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
                    this.voteError.success = 'Vote sent successfully!'
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
        changePage(routeName) {
            this.$router.push({ name: routeName });
        },
    },

    created() {
        this.fetchProject(this.$route.params.id);
    },
};
</script>

<template>
    <section class=" container-fluid single-profile text-dark">
        <div class="row justify-content-center">
            <div class="col-12 col-md-10 col-lg-8 text-center mt-3 d-flex justify-content-around align-items-center">
                <div class="line d-inline-block" :class="profile.is_premium ? 'gold-line' : ''"></div>
                <h1 class="d-inline-block">
                    <strong>Welcome to
                        <em :class="profile.is_premium ? 'gold-text' : ''">{{ profile.user.name }} {{
                            profile.user.surname
                            }}'s</em>
                        profile</strong>
                </h1>
                <div class="line d-inline-block" :class="profile.is_premium ? 'gold-line' : ''"></div>
            </div>
        </div>
        <div class="row justify-content-around first-container">
            <!-- profile section  -->
            <div class="col-5 col-md-4 col-lg-3 profile-img-container my-2">
                <img :src="getImageUrl(photo)" class="profile-img col-6" :class="profile.is_premium ? 'gold' : ''"
                    alt="Profile-photo">
            </div>
            <!-- office section  -->
            <div class="col-11 col-sm-6 col-md-5 col-lg-4 profile-container my-4">
                <!-- <h3 class="text-break" >Office <font-awesome-icon icon="fa-solid fa-house-laptop" /></h3> -->
                <div class="col-12 profile">
                    <h3 class="text-uppercase text-center me-2 text-break">
                        <font-awesome-icon icon="fa-regular fa-id-badge" :class="profile.is_premium ? 'gold' : ''" />
                        {{ profile.user.name }} {{ profile.user.surname }}
                    </h3>
                    <!-- <div class="my-2 text-center" v-if="averageVote > 0"> -->
                        <!-- <span v-for="n in averageVote" :key="n">
                            <font-awesome-icon icon="fa-solid fa-star" class="icon-star" />
                        </span>
                        <span v-for="x in star - averageVote" :key="x">
                            <font-awesome-icon icon="fa-regular fa-star" class="icon-star" />
                        </span> -->

                        <!-- Stelle piene -->
                        <!-- <span v-for="n in Math.floor(averageVote)" :key="'full-' + n">
                            <font-awesome-icon icon="fa-solid fa-star" class="icon-star" />
                        </span> -->

                        <!-- Mezza stella -->
                        <!-- <span v-if="averageVote % 1 >= 0.5">
                            <font-awesome-icon icon="star-half-stroke" class="icon-star" />
                        </span> -->

                        <!-- Stelle vuote -->
                        <!-- <span v-for="x in star - Math.round(averageVote)" :key="'empty-' + x">
                            <font-awesome-icon icon="fa-regular fa-star" class="icon-star" />
                        </span>
                    </div> -->
                    <div class="my-2 text-center" v-if="averageVote > 0">
                        <!-- Stelle piene -->
                        <span v-for="n in Math.floor(averageVote)" :key="'full-' + n">
                            <font-awesome-icon icon="fa-solid fa-star" class="icon-star"/>
                        </span>

                        <!-- Mezza stella -->
                        <span v-if="averageVote % 1 >= 0.5">
                            <font-awesome-icon icon="star-half-stroke" class="icon-star" />
                        </span>

                        <!-- Stelle vuote -->
                        <span v-for="x in star - Math.round(averageVote)" :key="'empty-' + x">
                            <font-awesome-icon icon="fa-regular fa-star" class="icon-star" />
                        </span>
                    </div>
                    <div class="text-break" v-else>
                        The teacher has no ratings.
                    </div>
                    <p class="text-break text-center"><font-awesome-icon icon="fa-solid fa-chalkboard-user"
                            class="icon-color" /> {{ profile.service }}</p>
                </div>

                <!-- address  -->

                <div class="col-5 col-sm-12 mb-1">
                    <h5 class="text-break">Address</h5>
                    <a href="#" class="text-break d-block hover-filter">
                        <font-awesome-icon icon="fa-solid fa-location-dot" class="icon-color" /> {{ profile.address }}
                    </a>
                </div>

                <!-- contacts  -->

                <div class="col-5 col-sm-12 mb-1">
                    <h4 class="text-break">Contacts</h4>
                    <a href="#" class="text-break d-block hover-filter"><font-awesome-icon icon="fa-solid fa-phone"
                            class="icon-color" /> {{ profile.telephone_number }}</a>
                    <a href="#" class="text-break d-block hover-filter"><font-awesome-icon icon="fa-solid fa-envelope"
                            class="icon-color" /> {{ profile.user.email }}</a>
                </div>

                <div class="col-1 col-sm-12 d-flex justify-content-center my-4">
                    <a href="#message-form-body" type="button"
                        class="btn text-break contact-button hover-button">Contact {{ profile.user.name }} {{
                            profile.user.surname }} </a>
                </div>
                <!-- review and vote buttons  -->
                <div class="d-flex justify-content-center my-4">
                    <a type="button" class="btn btn-success text-break big-screen-review-button hover-button"
                        data-bs-toggle="modal" data-bs-target="#reviewModel" data-bs-whatever="@mdo"
                        :class="reviewError.success ? 'disabled' : ''">Review {{ profile.user.name }} {{
                            profile.user.surname }}</a>

                    <!-- Review form modal  -->
                    <div class="modal fade" id="reviewModel" tabindex="-1" aria-labelledby="reviewModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content" id="review-model-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="reviewModalLabel">New review</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <!-- reviews profile_id  -->
                                        <input type="text" class="form-control transparent review-inputs"
                                            id="review-profile-id" name="profile_id" :value="profile.id" hidden>
                                        <!-- reviewer name  -->
                                        <div class="mb-3">
                                            <label for="reviewer-name" class="col-form-label">Name</label>
                                            <input type="text" class="form-control transparent review-inputs"
                                                id="reviewer-name" name="name">
                                            <!-- name error  -->
                                            <span v-if="reviewError.name" class="text-danger fw-bold">{{
                                                reviewError.name }}</span>
                                        </div>
                                        <!-- reviewer surname  -->
                                        <div class="mb-3">
                                            <label for="reviewer-surname" class="col-form-label">Surname</label>
                                            <input type="text" class="form-control transparent review-inputs"
                                                id="reviewer-surname" name="surname">
                                            <!-- surname error  -->
                                            <span v-if="reviewError.surname" class="text-danger fw-bold">{{
                                                reviewError.surname }}</span>
                                        </div>
                                        <!-- reviewer email  -->
                                        <div class="mb-3">
                                            <label for="reviewer-email" class="col-form-label">Email</label>
                                            <input type="email" class="form-control transparent review-inputs"
                                                id="reviewer-email" name="email">
                                            <!-- email error  -->
                                            <span v-if="reviewError.email" class="text-danger fw-bold">{{
                                                reviewError.email }}</span>
                                        </div>
                                        <!-- review text  -->
                                        <div class="mb-3">
                                            <label for="review-text" class="col-form-label">Review</label>
                                            <textarea class="form-control transparent review-inputs" id="review-text"
                                                name="review_text"></textarea>
                                            <!-- text error  -->
                                            <span v-if="reviewError.review_text" class="text-danger fw-bold">{{
                                                reviewError.review_text }}</span>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn hover-button" @click="reviewValidation()">Send
                                        review</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- vote model form  -->
                    <a type="button" class="btn btn-success mx-3 text-break big-screen-review-button hover-button"
                        data-bs-toggle="modal" data-bs-target="#voteModel" data-bs-whatever="@mdo"
                        :class="voteError.success ? 'disabled' : ''">Vote {{ profile.user.name }} {{
                            profile.user.surname
                        }}</a>

                    <div class="modal fade" id="voteModel" tabindex="-1" aria-labelledby="voteModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content" id="vote-model-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="voteModalLabel">New vote</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <!-- vote profile_id  -->
                                        <input type="text" class="form-control" id="vote-profile-id" name="profile_id"
                                            :value="profile.id" hidden>
                                        <!-- vote  -->
                                        <select class="form-select vote-select" id="vote-id"
                                            aria-label="Default select example">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn hover-button" @click="sendVote">Send vote</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- reviews  -->
            <div class="col-4 reviews my-4">
                <h4 class="text-break text-center my-3">
                    <strong>Reviews</strong>
                </h4>
                <div v-if="profile.reviews.length > 0">
                    <div v-for="(review, index) in profile.reviews" :key="review" class="p-2 mb-2 top-review-container">
                        <p>
                            <strong v-if="review.name">
                                <font-awesome-icon icon="fa-solid fa-user" class="icon-color" /> {{ review.name }} {{
                                    review.surname }}
                            </strong>
                            <strong v-else>
                                <font-awesome-icon icon="fa-solid fa-user" class="icon-color" /> Anonymous
                            </strong>
                        <div>
                            <em class="text-break">
                                <font-awesome-icon icon="fa-solid fa-envelope" class="icon-color" /> {{ review.email }}
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
                <div v-else class="text-break text-center my-2">
                    {{ profile.user.name }} {{ profile.user.surname }} has no reviews.
                </div>
            </div>
        </div>
        <section class="d-flex justify-content-center my-4">
            <div v-if="reviewError" class="fw-bold text-center me-3 big-screen-success success p-2"
                :class="reviewError.success ? '' : 'display-none'">{{ reviewError.success }}</div>
            <div v-if="voteError" class="fw-bold text-center big-screen-success success p-2"
                :class="voteError.success ? '' : 'display-none'">{{ voteError.success }}</div>
        </section>

        <!-- section specialization  -->
        <div class="row justify-content-center">
            <div class="col-11 col-sm-8 specialization my-4 text-center">
                <h4 class="text-break  text-uppercase">
                    <strong>Specializzations</strong>
                </h4>
                <div v-for="(specialization, index) in profile.specializations"
                    class="container-border p-2 mb-2 specialization-container">
                    <p class="text-break">
                        <strong>
                            Field: {{ specialization.field }}
                        </strong>
                    <p class="text-break">
                        <em>
                            {{ specialization.name }}
                        </em>
                    </p>
                    </p>
                </div>
            </div>
        </div>

        <!-- reviews section  -->
        <div class="row justify-content-center">
            <div class="col-11 col-sm-8 reviews-small-screen my-4 p-3 container-border">
                <h4 class="text-break text-center my-3">
                    <strong>Reviews</strong>
                </h4>
                <div v-if="profile.reviews.length > 0">
                    <div v-for="(review, index) in profile.reviews" :key="review" class="mb-2">
                        <p class="container-border p-2 review-container">
                            <strong v-if="review.name">
                                <font-awesome-icon icon="fa-solid fa-user" class="icon-color" /> {{ review.name }} {{
                                    review.surname }}
                            </strong>
                            <strong v-else>
                                <font-awesome-icon icon="fa-solid fa-user" class="icon-color" /> Anonymous
                            </strong>
                        <div>
                            <em class="text-break">
                                <font-awesome-icon icon="fa-solid fa-envelope" class="icon-color" /> {{ review.email }}
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
                <div v-else class="text-break text-center my-2">
                    {{ profile.user.name }} {{ profile.user.surname }} has no reviews.
                </div>
                <section class="text-center">
                    <div class="my-2">
                        <a type="button" class="btn btn-success text-break small-screen-review-button hover-button"
                            data-bs-toggle="modal" data-bs-target="#reviewModel" data-bs-whatever="@mdo"
                            :class="reviewError.success ? 'disabled' : ''">Review {{ profile.user.name }} {{
                                profile.user.surname }}</a>
                        <div v-if="reviewError" class="fw-bold text-center w-75 success margin-auto p-2"
                            :class="reviewError.success ? '' : 'display-none'">{{ reviewError.success }}</div>
                    </div>
                    <div class="my-2">
                        <a type="button" class="btn btn-success mx-3 text-break small-screen-review-button hover-button"
                            data-bs-toggle="modal" data-bs-target="#voteModel" data-bs-whatever="@mdo"
                            :class="voteError.success ? 'disabled' : ''">Vote {{ profile.user.name }} {{
                                profile.user.surname }}</a>
                        <div v-if="voteError" class="fw-bold text-center success margin-auto p-2 w-75"
                            :class="voteError.success ? '' : 'display-none'">{{ voteError.success }}</div>
                    </div>
                </section>
            </div>
        </div>

        <!-- contact us form  -->
        <div class="row justify-content-center p-4" id="message-form-body">
            <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
                <h4 class="text-center text-uppercase" :class="profile.is_premium ? 'gold' : ''">
                    <strong>Contact {{ profile.user.name }} {{ profile.user.surname }}</strong>
                </h4>
                <form @submit.prevent="messageValidation()">
                    <!-- messages profile_id  -->
                    <input type="text" class="form-control" id="message-profile-id" :value="profile.id" hidden>

                    <section class="display-flex">
                        <!-- messager name  -->
                        <div class="col-sm-5 message-inputs">
                            <label class="col-form-label">Name</label>
                            <input type="text" class="form-control" id="messager-name">
                            <!-- name error  -->
                            <span v-if="messageError" class="text-danger fw-bold">{{ messageError.name }}</span>
                        </div>
                        <!-- messager surname  -->
                        <div class="col-sm-5 message-inputs">
                            <label class="col-form-label">Surname</label>
                            <input type="text" class="form-control" id="messager-surname">
                            <!-- surname error  -->
                            <span v-if="messageError" class="text-danger fw-bold">{{ messageError.surname }}</span>
                        </div>
                    </section>

                    <section class="display-flex">
                        <!-- messager email  -->
                        <div class="col-sm-5 message-inputs">
                            <label class="col-form-label">Email</label>
                            <input type="email" class="form-control" id="messager-email">
                            <!-- email error  -->
                            <span v-if="messageError" class="text-danger fw-bold">{{ messageError.email }}</span>
                        </div>
                        <!-- messager telephone_number  -->
                        <div class="col-sm-5 message-inputs">
                            <label class="col-form-label">Telephone number</label>
                            <input type="text" class="form-control" id="messager-telephone-number">
                            <!-- telephone number error  -->
                            <span v-if="messageError" class="text-danger fw-bold">{{ messageError.telephone_number
                                }}</span>
                        </div>
                    </section>
                    <!-- message text  -->
                    <div class="mb-3">
                        <label for="message-text" class="col-form-label">Message</label>
                        <textarea class="form-control" id="message-text" name="messageData.message_text"></textarea>
                        <!-- message text error  -->
                        <span v-if="messageError" class="text-danger fw-bold">{{ messageError.message_text }}</span>
                    </div>
                </form>
                <div class="d-flex justify-content-center">
                    <span v-if="messageError" class="fw-bold  text-dark text-center success p-2"
                        :class="messageError.success ? '' : 'display-none'">{{ messageError.success }}</span>
                </div>
            </div>
            <div class=" col-12 my-2 text-center">
                <button type="submit" class="btn btn-success message-button hover-button"
                    @click="messageValidation()">Send message</button>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use "../assets/styles/partials/variables" as *;

.line {
    width: 8rem;
    height: .3rem;
    background-color: black;
    margin-right: 1.5rem;
    margin-left: 1.5rem;
    border-radius: 1rem;
}

.first-container {
    background-image: url(../assets/img/A_minimalist_green_chalkboard_.jpeg);
    background-size: cover;
    max-height: 650px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

.single-profile {
    margin-top: 1.5rem;
}

.profile-img-container {
    align-self: center;

    .profile-img {
        width: 100%;
        max-height: 630px;
        border: 0px solid transparent;
        border-radius: 1.5rem;
        align-items: center;
        object-fit: cover;
        object-position: top;
        box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
    }
}

.profile-container {
    padding: 2rem;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    overflow: hidden;
    max-height: 30rem;
    border-radius: 5px;
}

.gold {
    color: $link-hover-color;
    filter: drop-shadow(0px 0px 5px $link-hover-color);
}

.gold-line {
    background-color: $btn-primary-hover-color;
    color: $btn-primary-hover-color;
    filter: drop-shadow(0px 0px 5px $btn-primary-hover-color);
}

.gold-text {
    color: $btn-primary-hover-color;
    filter: drop-shadow(0px 0px 5px $btn-primary-hover-color);
}

.icon-color {
    // color: #78da4b;
    // color: #C27538;
    color: $secondary-color;
}

.icon-star {
    color: $link-hover-color;
    filter: drop-shadow(0px 0px 5px $link-hover-color);
}

.contact-button {
    background-color: $btn-primary-bg;
    color: white;
}

.specialization {
    div {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
}

.reviews {
    color: white;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    overflow: scroll;
    max-height: 30rem;
}

.top-review-container {
    background-color: #7f937a;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

}

.top-review-container:hover {
    filter: drop-shadow(0px 0px 5px $btn-primary-bg);

}

.reviews-small-screen {
    display: none;
}

.container-border {
    border: 1px solid $secondary-color;
    border-radius: .6rem;
}

#reviewModel {
    color: black;
}

#voteModel {
    color: black;
}

#review-model-content {
    background-image: linear-gradient(rgba(169, 237, 113, 0.378), rgba(21, 170, 170, 0.421)), url(../assets/img/concept-banner-setting-five-star-goal_1346034-1857.avif);
    background-size: cover;
    color: white;
}

.transparent {
    // background-color: transparent;
    // color: white;
    // border: 1px solid goldenrod;
    background-color: rgba(255, 255, 255, 0.493);
}

#vote-model-content {
    background-image: linear-gradient(rgba(199, 226, 78, 0.39), rgba(70, 230, 193, 0.312)), url(../assets/img/hd-five-stars-customer-rating-feedback-concept-yellow-background_1409-4935.avif);
    background-size: cover;

}

.vote-select {
    // background-color: transparent;
    background-color: rgba(255, 255, 255, 0.493);

}

#message-form-body {
    background-image: linear-gradient(rgba(19, 59, 44, 0.474), rgba(94, 210, 28, 0.312)), url(../assets/img/yugioh_card_art_for_A_watercol.jpeg);
    background-size: cover;
    background-position: center;
    color: white;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
}

.message-button {
    background-color: $btn-primary-bg;
    border: none;
}

// hover 
.hover-filter:hover {
    // color: #78da4b;
    // filter: drop-shadow(0px 0px 5px #78da4b);
    color: $link-hover-color;
    filter: drop-shadow(0px 0px 5px $link-hover-color);
}

.specialization-container {
    transition-duration: 1s;
    cursor: pointer;
}

.specialization-container:hover {
    transform: scale(1.1);
}

.review-container:hover {
    filter: drop-shadow(0px 0px 5px $btn-primary-bg);
}

.success {
    background-color: #78da4bc1;
    // padding: .4rem;
    border: none;
    border-radius: .2rem;
    text-align: center;
}

.display-none {
    display: none;
}

.margin-auto {
    margin: auto;
}

.hover-button {
    background-color: $btn-primary-bg;
    border: none
}

.hover-button:hover {
    // filter: drop-shadow(0px 0px 5px #78da4b);
    background-color: $btn-primary-hover-color;
    filter: drop-shadow(0px 0px 5px $btn-primary-hover-color);
}

@media all and (max-width: 992px) {
    .reviews {
        display: none;
    }

    .reviews-small-screen {
        display: block;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    .big-screen-review-button {
        display: none;
    }

    .big-screen-success {
        display: none;
    }
}

@media all and (min-width: 992px) {}

@media all and (max-width: 576px) {
    .first-container {
        max-height: 700px;
    }

    .profile-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        background-color: #6a905d;
    }

    .contact-button {
        display: none;
    }

    .small-screen-review-button {
        background-color: $btn-primary-bg;
        border: none;
    }
}

@media all and (min-width: 576px) {
    .display-flex {
        display: flex;
        justify-content: space-between;
    }

    .big-screen-review-button {
        background-color: $btn-primary-bg;
        border: none;
    }

    .small-screen-review-button {
        margin-bottom: .5rem;
        background-color: $btn-primary-bg;
        border: none
    }
}

@media all and (max-width: 365px) {
    .small-screen-review-button {
        margin-bottom: .5rem;
        background-color: $btn-primary-bg;
        border: none
    }
}
</style>