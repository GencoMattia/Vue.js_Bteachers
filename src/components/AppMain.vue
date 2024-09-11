<script>
import { store } from "../store";
import ProjectsList from './ProjectsList.vue';


export default {
    components: {
        ProjectsList,
        
    },

    data() {
        return {
            store,
        };
    },

    methods: {
        
    },
};
</script>

<template>
    <main>
        <ProjectsList />

    </main>
</template>

<style lang="scss" scoped>
    
</style>