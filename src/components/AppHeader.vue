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
    <header class="header d-flex align-items-center sticky-top">
        <!-- Logo -->
        <!-- <a class="logo">BTeachers</a> -->
        <router-link class="logo" :to="{ name: navLinkNames[1].name }">
            BTeachers
                </router-link>
<div class="container p-0">
    <div class="row">
        <!-- Barra di ricerca che occupa tutto lo spazio disponibile -->
        <form class="d-flex flex-grow-1 mx-3" role="search" @submit.prevent="getSearchBarValue">
            <input 
                class="form-control me-2 flex-grow-1 border border-0 rounded-pill" 
                type="search" 
                placeholder="Search your Teacher" 
                v-model="searchBarQuery"
                aria-label="Search">
            <button class="btn btn-outline-danger border border-0 rounded-pill" type="submit"><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></button>
        </form>
    </div>
</div>

        <!-- Link di navigazione -->
        <ul class="nav-links d-flex mb-0">
            <li v-for="navItem in navLinkNames" :key="navItem.name">
                <router-link :to="{ name: navItem.name }">
                    {{ navItem.label }}
                </router-link>
            </li>
        </ul>
        <div class="btn btn-primary rounded-pill mx-2">
            <a href="http://127.0.0.1:8000/">
                <font-awesome-icon :icon="['fas', 'user']" /> 
                
            </a>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    @use "../assets/styles/partials/variables" as *;

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
                color: #fff;
                text-decoration: none;
                font-size: 0.9rem;
                
                &:hover {
                color: $primary-color;
                }
            }
            }
        }

        .btn{
            background-color: $secondary-color; // Arancione intenso
            border-color: $secondary-border-color; // Arancione intenso
            color: $main-background-color; // Bianco
            

            &:hover {
                background-color: $main-btn-primary-hover-bg; // Arancione molto scuro
                border-color: $main-btn-primary-hover-border; // Arancione molto scuro
                color: #fff; // Bianco
            }
        }
    }
</style>