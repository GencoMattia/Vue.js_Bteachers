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
        <div class="logo">BTeachers</div>

        <!-- Barra di ricerca che occupa tutto lo spazio disponibile -->
        <form class="d-flex flex-grow-1 mx-3" role="search" @submit.prevent="getSearchBarValue">
            <input 
                class="form-control me-2 flex-grow-1" 
                type="search" 
                placeholder="Search your Teacher" 
                v-model="searchBarQuery"
                aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>

        <!-- Link di navigazione -->
        <ul class="nav-links d-flex mb-0">
            <li v-for="navItem in navLinkNames" :key="navItem.name">
                <router-link :to="{ name: navItem.name }">
                    {{ navItem.label }}
                </router-link>
            </li>
        </ul>
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
    }
</style>