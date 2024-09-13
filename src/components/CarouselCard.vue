<script>


export default {
    data() {
        return {
            img: 'http://127.0.0.1:8000/storage/',
        };
        
    },
    computed: {
        averageVote() {
            if (this.teacher.votes.length === 0) return 0;

            const totalVotes = this.teacher.votes.reduce((sum, vote) => {
                return sum + vote.vote;
            }, 0);

            return (totalVotes / this.teacher.votes.length).toFixed(2);
        }
    },
    props: {
        teacher: {
            type: Object,
            required: true,
        }
    }
};
</script>

<template>
    <router-link class="router-link" @click.prevent="navigateToProfile(teacher.id)">
        
            <div class="row">
                <div class="card teacher-card shadow mb-2">
                <div class="card-header text-center  text-white">
                        <h2 class="mb-0">
                            {{ teacher.user.name }} {{ teacher.user.surname }}
                        </h2>
                    </div>
                    <div class="card-body d-flex">
                        <div class="col-6 photo d-flex justify-content-center">
                            <img :src="`${img}${teacher.photo}`" class="rounded-circle border border-3 border-primary card-img" :alt="`Picture of ${teacher.user.name} ${teacher.user.surname}`">
                        </div>
                        <div class="col-6 specs ">
                            <p v-for="specialization in teacher.specializations" :key="specialization.id" class="specialization mb-2 text-muted">
                            {{ specialization.field }}
                            </p>
                            <p v-if="teacher.votes.length" class="badge bg-warning text-dark">
                                Media voti: {{ averageVote }}
                            </p>
                            <p class="text-muted ">
                                <i class="fas fa-phone me-2"></i>{{ teacher.telephone_number }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
       
    </router-link>
</template>

<style lang="scss" scoped>
.teacher-card {
    border-radius: 8px;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    }
}

.card-header {
    background-color: orangered; /* Colore principale */
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    margin: 0;
}

.card-body {
    display: flex;
    align-items: center;
    padding: 1rem;
}

.photo img {
    width: 130px;
    height: 130px;
    object-fit: cover;
}

.specs {
    flex: 1;
    padding-left: 1rem;
}

.specialization {
    font-size: 0.9rem;
    color: #6c757d; /* Testo mutato */
}

.router-link {
    text-decoration: none;
    display: block;
}

.badge {
    font-size: 0.85rem;
}

.shadow-sm {
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.row{
    background-color: none;
}
</style>