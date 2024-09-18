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
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid d-flex flex-row">
        <a class="navbar-brand navbar-expand-lg" href="#">
            <router-link class="logo" :to="{ name: navLinkNames[1].name }">
                BTeachers
            </router-link>
        </a>

        <form class="d-flex flex-grow-1 mx-3" role="search" @submit.prevent="getSearchBarValue">
            <input 
                class="form-control me-2 flex-grow-1 border border-0 rounded-pill" 
                type="search" 
                placeholder="Search your Teacher" 
                v-model="searchBarQuery"
                aria-label="Search">
            <button class="btn btn-outline-danger border border-0 rounded-pill" type="submit">
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
            </button>
        </form>

        <!-- Hamburger button -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navbar Links -->
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav d-flex flex-row d-flex flex-column text-end">
                <li class="nav-item mb-1">
                    <router-link :to="{name: navLinkNames[0].name}">
                        {{ navLinkNames[0].label }}
                    </router-link>
                </li>
                <li class="nav-item mb-1">
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
    .navbar-collapse{
        flex-grow: 0;
    }

    .search_bar{
        margin-right: auto;
        margin-left: auto;
        width: 100%;
    }
    // Header
    .header {
        background-color: $secondary-color;
        padding: 10px 20px;
        display: flex;
        align-items: center;
        // justify-content: space-between;
        color: #fff;

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
            background-color: $secondary-color; // Arancione intenso
            
            color:$link-color; // Bianco
            

            &:hover {
                background-color:$link-hover-color; // Arancione molto scuro
                 // Arancione molto scuro
                color: #fff; // Bianco
                transition: all .3s ease-in-out;
            }
        }
    }
</style>