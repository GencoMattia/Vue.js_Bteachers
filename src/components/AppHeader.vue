<script>
import { store } from "../store";

export default {
    data() {
        return {
            store,

            searchBarQuery: "",
            
            navLinkNames: [
                {
                    label: "Teachers",
                    name: "teachers-list",
                },
                {
                    label: "Home",
                    name: "home",
                },
            ]
        };
    },

    methods: {
        // Metodo per gestire l'invio del form e inviare la query al store
        getSearchBarValue() {
            this.store.setSearchQuery(this.searchBarQuery);
            console.log("Search query inviata allo store:", this.searchBarQuery);
            if (this.$route.name !== 'teachers-list') {
            // Naviga alla rotta 'teachers-list'
            this.$router.push({ name: 'teachers-list' });
        }
        }
    }
};
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg">
    <div class="container-fluid d-flex flex-row">
        <a class="navbar-brand navbar-expand-lg" href="#">
            <router-link class="logo" :to="{ name: navLinkNames[1].name }">
                BTeacher
            </router-link>
        </a>


        <!-- Hamburger button -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navbar Links -->
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav bt_custom ">
                <li class="navbar-nav search_lg">
                    <form class="d-flex flex-grow-1 mx-3 bt_custom_search" role="search" @submit.prevent="getSearchBarValue">
            <input 
                class="form-control me-2 flex-grow-1 border border-0 rounded-pill " 
                type="search" 
                placeholder="Search your Teacher" 
                v-model="searchBarQuery"
                aria-label="Search">
            <button class="btn btn-outline-danger border border-0 rounded-pill " type="submit">
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
            </button>
        </form>
                </li>
                <li class="itm_custom nav-item mb-1">
                    <router-link :to="{name: navLinkNames[0].name}">
                        {{ navLinkNames[0].label }}
                    </router-link>
                </li>
                <li class="itm_custom nav-item mb-1">
                    <a href="http://127.0.0.1:8000/">
                        <span>Are you a Teacher?</span>
                        <font-awesome-icon :icon="['fas', 'user']" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
    </header>


</template>

<style lang="scss" scoped>
    @use "../assets/styles/partials/variables" as *;
    .search_lg{
        width: 58vw;
        
    }
    .bt_custom{
        display: flex;
        flex-direction: row;
        text-align: end;
        margin: 0 .5rem;
        justify-content: center;
        align-items: center;
    }
    .itm_custom{
        margin: 0 1rem;
    }
    .itm_custom:hover{
        margin: 0 1rem;
        color:$btn-primary-hover-color;
        border-radius: 50%;
    }
    @media screen and (max-width: 991px) {
        .bt_custom{
        display: flex;
        flex-direction: column;
        text-align: end;
        margin: 0 .5rem;
        justify-content: end;
    }
    
    .itm_custom:nth-child(1){
        margin: 1rem 0;

    }
    .itm_custom:nth-child(2){
        margin: 1rem 0;
    }
    .search_lg{
        width: 80vw;
    }
    }

    @media screen and (max-width: 466px) {
        .search_custom{
            display: none;
        }
        .bt_custom_search{
            align-items: center;
            justify-content: end;
        }
    }
   


    

    .navbar-collapse{
        flex-grow: 0;
    }

    
    // Header
    .header {
        padding: 10px 20px;
        display: flex;
        align-items: center;
        color: #fff;
        nav{
        

        }
        .logo {
            font-size: 1.5rem;
            font-weight: bold;
        }

        .nav-links {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            
            li {
            margin-left: 20px;

            a {
                color: $link-color;;
                text-decoration: none;
                font-size: 0.9rem;
                
                &:hover {
                color: $link-hover-color;
                }
            }
            }
        }

        .btn{
            background-color: $btn-primary-bg; // Arancione intenso
            
            color:$link-color; // Bianco
            

            &:hover {
                background-color:$btn-primary-hover-color; // Arancione molto scuro
                 // Arancione molto scuro
                color: #fff; // Bianco
                transition: all .3s ease-in-out;
            }
        }
    }
</style>