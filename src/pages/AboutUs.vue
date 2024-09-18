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
    <section class="container">
        <div class="row mb-2">
            <div class="col-md-6 col-sm-12 ">
                <h2>About Us</h2>
                <p class="mb-4">At BTeachers, our mission is to empower learners by connecting them with exceptional educators who inspire and facilitate their educational journeys. We envision being the leading platform for personalized learning experiences, where every student can find the right teacher to unlock their potential.</p>
                <div class="col-12 d-flex flex-wrap justify-content-around">
                    <div class="col-md-6 col-sm-12 ">
                        <h2>5000 teachers</h2>
                        <p>Since our inception, we have successfully connected over 100 students with qualified teachers, ensuring a tailored learning experience that meets individual needs.</p>
                    </div>
                    <div class="col-md-6 col-xs-12">
                        <h2>20 specializations</h2>
                        <p>Our platform features a diverse range of 50 specializations, from math and science to languages and the arts, allowing learners to explore various subjects and find their perfect match.</p>
                    </div>
                    <div class="col-md-6 col-sm-12 ">
                        <h2>100 countries</h2>
                        <p>BTeachers has expanded its reach to 15 countries, making quality education accessible to learners around the globe, regardless of their location.</p>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <h2>100
                            values</h2>
                        <p>We uphold 4 core values: Diversity, Quality, Accessibility, and Community, ensuring that our platform remains a supportive environment for both learners and educators.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-sm-12 d-flex">
                <img class="img-fluid  rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6THKb-j7VG8Fmr3g7hxOts6UGqmH7qS3oRA&s" alt="Responsive image teacher-img">
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <h1>Frequently Asked Questions</h1>
                    <p>
                        Find answers to your queries about our platform and services. We aim to assist you in navigating your educational journey with ease.
                    </p>
                    <details class="primary">
                        <summary>How do I find a teacher?</summary>
                        <p>You can browse our extensive list of educators by visiting the ‘Browse Teachers’ page and filtering by specialization.</p> 
                    </details>
                    
                    <details class="primary" >
                        <summary>What specializations are available?</summary>
                        <p>We offer a wide range of specializations including math, science, languages, and arts to cater to diverse learning needs.</p>
                    </details>
                    
                    <details class="primary">
                        <summary>Can I contact a teacher before booking?</summary>
                        <p>Yes, you can view teacher profiles and reach out to them for any inquiries before making a booking.</p> 
                    </details>
                    <details class="primary">
                        <summary>What is the booking process?</summary>
                        <p>Simply select your desired teacher, choose a time slot, and complete the payment to secure your session.</p> 
                    </details>
                </div>
            </div>
        </div>
    </section>
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
            color: $primary-color;
            margin-bottom: 10px;
        }

        .specialization {
            
            color: $text-color;
        }

        .teacher-info {
            font-size: 0.9rem;
            
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
// :root {
//   --color-bg: #EEEDEB;
//   --color-title: #0E1C4E;
  
//   --color-summary-1: #FFF6EE;
//   --color-summary-1-highlight: #FFC48B;
//   --color-summary-2: #FAFAFF;
//   --color-summary-2-highlight: #B4B3FF;
//   --color-summary-3: #FFF0F3;
//   --color-summary-3-highlight: #FFB3C0;
  
//   --font-ibm-plex-sans: 'IBM Plex Sans', sans-serif;
// }

html,
    body {
    overflow: auto;
    min-height: 100vh;
    width: 100%;
    background: var(--color-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    }

    .card {
    background: white;
    padding: 38px 36px;
    margin-top: 40px;
    margin-bottom: 40px;
    border-radius: 4px;
    box-shadow: 0 8px 10px rgba(0, 0, 0, .1);
    width: 100%;

    h1 {
    font-family: var(--font-ibm-plex-sans);
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 1.2;
    color: var(--color-title);
    margin-bottom: 20px;
    }

    details {
    display: flex;
    border-radius: 5px;
    overflow: hidden;
    background: rgba(196, 238, 12, 0.226);
    border-left: 15px solid $primary-color;
    padding:15px;
    & {
        margin-top: 15px;
    }

    &:hover{
        background-color: rgba(196, 238, 12, 0.432);
    }
    summary,p {
        position:relative;
        display:flex;
        flex-direction:row;
        align-content: center;
        justify-content: flex-start;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        color: var(--color-title);
        padding: 20px;
        cursor:pointer;
        &::-webkit-details-marker {
        display:none;
        }
        &:focus {
        outline: solid 3px var(--highlight);
        }
        &::selection {
        background-color: rgba(196, 238, 12, 0.432);
        }
    }
    p {
        
        cursor:default;
        margin-left:3rem;
        list-style-type: corona;
    }

    summary::before {
        cursor: pointer;
        position:absolute;
        display:inline-flex;
        width:1rem;
        height:1rem;
        left: 0rem;
        margin-right:.5rem;
        content: url("data:image/svg+xml,%3Csvg width='100%' height='100%' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22.6066 12H1.3934' stroke='%23202842' stroke-width='1.875' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M12 1.39343V22.6066' stroke='%23202842' stroke-width='1.875' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");

    }

    &[open] {
        summary {
        
        font-weight: 700;
        &::before {
            transform: rotate(45deg);
            content: url("data:image/svg+xml,%3Csvg width='100%' height='100%' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22.6066 12H1.3934' stroke='%23202842' stroke-width='3.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M12 1.39343V22.6066' stroke='%23202842' stroke-width='3.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
        }
        }
    }
    }
    }




</style>
