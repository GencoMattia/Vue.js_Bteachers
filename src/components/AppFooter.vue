<script>
export default {
    data() {
        return {
        
        };
    }
};
</script>

<template>
    <footer class=" footer position-absolute bottom-0 end-0">

        <section class="footer-link d-flex justify-content-around mb-3 text-start">
            <ul>
                <li>
                    <h4>Pricing</h4>
                </li>
                <li>
                    <a href="#">
                        Overview
                    </a>
                </li>
                <li>
                    <a href="#">
                        Bronze Plan
                    </a>
                </li>
                <li>
                    <a href="#">
                        Silver Plan
                    </a>
                </li>
                <li>
                    <a href="#">
                        Gold Plan
                    </a>
                </li>
            </ul>

            <ul>
                <li>
                    <h4> Company</h4>
                </li>
                <li>
                    <a href="#">
                        About Us
                    </a>
                </li>
                <li>
                    <a href="#">
                        Blog
                    </a>
                </li>
                <li>
                    <a href="#">
                        Partnerships
                    </a>
                </li>
                <li>
                    <a href="#">
                        Careers
                    </a>
                </li>
                <li>
                    <a href="#">
                        Press
                    </a>
                </li>
            </ul>


            <ul>
                <li>
                    <h4>
                        Contacts
                    </h4>
                </li>
                <li>
                    <a href="#">
                        <i class="fa-solid fa-location-dot"></i>
                        Palermo 90100
                    </a>
                </li>
                <li>
                    <a href="#">
                        Info@BTeacher.com
                    </a>
                </li>
                <li>
                    <a href="#">
                        Partnerships
                    </a>
                </li>
                <li>
                    <a href="#">
                        Careers
                    </a>
                </li>
                <li>
                    <a href="#">
                        Press
                    </a>
                </li>
            </ul>
        </section>

        <p>&copy; 2024 BTeacher - <a href="#">Privacy</a> - <a href="#">Terms</a></p>

</footer>
</template>

<style lang="scss" scoped>
    @use "../assets/styles/partials/variables" as *;

    .footer {
        background-color: $secondary-color;
        color: #fff;
        padding: 10px 20px;
        text-align: center;
        font-size: 0.8rem;
        width: 100%;
        padding: 1.2rem;

        a {
            color: $link-color;
            text-decoration: none;
            
            &:hover {
            color: $link-hover-color;
            }
        }

        ul {
            list-style: none;
        }

        li a{
            color: white;
            width: auto;
        }
        
        a svg{
            color: white;
        }
    }
</style>