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
    <footer class=" footer position-absolute bottom-0 end-0">

        <section class="footer-link d-flex justify-content-around text-start">
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
                        Contacts Us
                    </h4>
                </li>
                <li>
                    <a href="#">
                        <font-awesome-icon icon="location-dot" />
                        <span>
                            Palermo 90100
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <font-awesome-icon icon="envelope" />
                        <span>
                            Info@BTeacher.com
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <font-awesome-icon icon="phone" />
                        <span>
                            +39 333 324 4890
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <font-awesome-icon icon="fax" />
                        <span>
                            +39 0941 324 4890
                        </span>
                            
                    </a>
                </li>
            </ul>
        </section>
        <hr>
        <p>&copy; 2024 BTeacher - <a href="#">Privacy</a> - <a href="#">Terms</a></p>

</footer>
</template>

<style lang="scss" scoped>
    @use "../assets/styles/partials/variables" as *;

    .footer {
        background-color: $secondary-color;
        color: #fff;
        padding: 10px 30px;
        text-align: center;
        font-size: 0.8rem;
        width: 100%;
        padding: 1.2rem;

        a {
            color:$link-color;
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
        
        li{
            padding-bottom:.4rem;
        }
        a svg{
            color: rgb(255, 255, 255);
        }

        span{
            padding-left: .3rem;
        }

        .footer-link{
            max-width: 1200px;
            margin: 0 auto;

        }
    }
</style>