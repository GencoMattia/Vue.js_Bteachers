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
                    <details class="primary ">
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
    background:$btn-primary-bg;
    color:$link-color;
    border-left: 15px solid $secondary-color;
    padding:15px;
    & {
        margin-top: 15px;
    }

    &:hover{
        background-color:$btn-primary-hover-color;
        color: $text-color;
    }
    &:active{
        background-color:$btn-primary-hover-color;
        color: $text-color;
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
