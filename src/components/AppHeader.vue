<script>
import { store } from "../store";

export default {
    data() {
        return {
            store,
            searchBarQuery: "",
            isSearchBarVisible: false, // Controlla la visibilità dell'input
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
        toggleSearchBar() {
            if (!this.isSearchBarVisible) {
                this.isSearchBarVisible = true;
            } else if (this.searchBarQuery.trim() !== "") {
                this.getSearchBarValue(); // Avvia la ricerca solo se la barra è aperta e c'è un valore
            }
        },

        getSearchBarValue() {
            this.store.setSearchQuery(this.searchBarQuery);
            console.log("Search query inviata allo store:", this.searchBarQuery);
            if (this.$route.name !== 'teachers-list') {
                this.$router.push({ name: 'teachers-list' });
                this.isSearchBarVisible = false;
            }
        },

        turnOffSearchBar() {
            this.isSearchBarVisible = false;
        }
    }
};
</script>



<template>
    <header>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid d-flex flex-row">
                <a class="navbar-brand navbar-expand-lg" href="#">
                    <router-link :to="{ name: navLinkNames[1].name }" @click="turnOffSearchBar">
                        <img class="logo" src="../assets/img/abc123.png" alt="Logo">
                    </router-link>
                </a>

                <!-- Hamburger button -->
                <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Navbar Links -->
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav bt_custom ">
                        <li class="navbar-nav search_lg">
                            <div class="search-wrapper">
                                <form class="d-flex mx-3 bt_custom_search" role="search"
                                    @submit.prevent="getSearchBarValue">
                                    <input class="form-control me-2 flex-grow-1 border border-0 rounded-pill search-bar" type="search"
                                        placeholder="Search your Teacher" v-model="searchBarQuery" 
                                        :class="{ 'search-bar-visible': isSearchBarVisible }" aria-label="Search">
                                    <button class="btn btn-outline-danger border border-0 rounded-pill search-icon" type="button" @click="toggleSearchBar">
                                        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                                    </button>
                                </form>
                            </div>
                        </li>
                        <li class="itm_custom nav-item mb-1">
                            <router-link :to="{ name: navLinkNames[0].name }">
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

.custom-toggler {
    border-color: white;
}

.custom-toggler .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

.search-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 200px; /* Larghezza iniziale per l'icona */
}

.search-bar {
    flex: 0;
    opacity: 0;
    width: 0;
    transition: flex 0.5s ease, width 0.5s ease, opacity 0.5s ease;
}

.search-bar-visible {
    flex: 1;
    width: 40vw;
    min-width: 200px; /* Imposta una larghezza minima per la barra di ricerca */
    opacity: 1;
}

.search-icon {
    margin-left: 8px;
    transition: none;
}

.bt_custom {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 0 .5rem;
    align-items: center;
}

.itm_custom {
    margin: 0 1rem;
}

.itm_custom:hover {
    color: $btn-primary-hover-color;
    border-radius: 50%;
}

@media screen and (max-width: 991px) {
    .bt_custom {
        flex-direction: column;
        justify-content: end;
        align-items: end;
    }

    .search-bar-visible {
        width: 70vw;
    }
}

.logo {
    height: 56px;
    width: auto;
}
</style>
