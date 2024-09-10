<script>
export default {
    data() {
        return {
        
        };
    }
};
</script>

<template>
    <footer class="footer">
        <p>&copy; 2024 MyGitHub - <a href="#">Privacy</a> - <a href="#">Terms</a></p>
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

        a {
            color: $link-color;
            text-decoration: none;
            
            &:hover {
            color: $link-hover-color;
            }
        }
    }
</style>