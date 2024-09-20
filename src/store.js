import { reactive } from 'vue'

export const store = reactive({

    specializations: [
        {
            field: "Art History",
            description: "Discover the evolution of art across cultures and time periods, from classical masterpieces to contemporary movements.",
            img: "src/assets/img/SpecializationImage/art.jpeg"
        },
        {
            field: "Biology",
            description: "Explore the science of life, from molecular biology and genetics to ecosystems and biodiversity.",
            img: "src/assets/img/SpecializationImage/biology_subject1.jpeg"
        },
        {
            field: "Chemistry",
            description: "Uncover the building blocks of matter with our expert chemistry tutors, from atomic theory to chemical reactions.",
            img: "src/assets/img/SpecializationImage/chemestry_subject1.jpeg"
        },
        {
            field: "Engineering",
            description: "Solve real-world problems by applying principles of physics, mathematics, and innovation in various fields of engineering.",
            img: "src/assets/img/SpecializationImage/scholar_Engineering2.jpeg"
        },
        {
            field: "Economics",
            description: "Understand the mechanisms of markets, trade, and finance, and how economic policies affect global and local economies.",
            img: "src/assets/img/SpecializationImage/Economics2.jpeg"
        },
        {
            field: "Linguistics",
            description: "Dive into the study of language structure, function, and evolution, from phonetics to semantics and sociolinguistics.",
            img: "src/assets/img/SpecializationImage/Linguistics1.jpeg"
        },
        {
            field: "Literature",
            description: "Engage with literary masterpieces and explore different genres, themes, and cultural contexts through the ages.",
            img: "src/assets/img/SpecializationImage/Literature2.jpeg"
        },
        {
            field: "Mathematics",
            description: "Dive into the world of numbers and equations with our expert math tutors. From basic arithmetic to advanced calculus, we have you covered.",
            img: "src/assets/img/SpecializationImage/matematica4.jpg"
        },
        {
            field: "Music",
            description: "Learn about the history, theory, and practice of music, from classical compositions to modern musical trends.",
            img: "src/assets/img/SpecializationImage/Music1.jpeg"
        },
        {
            field: "Philosophy",
            description: "Delve into fundamental questions of existence, knowledge, and ethics, guided by both historical and contemporary philosophical thinkers.",
            img: "src/assets/img/SpecializationImage/Philosophy1.jpeg"
        },
        {
            field: "Physics",
            description: "Explore the laws governing the universe, from the smallest particles to the vastness of space, with hands-on physics concepts.",
            img: "src/assets/img/SpecializationImage/Physics1.jpeg"
        },
        {
            field: "Psychology",
            description: "Understand human behavior, cognition, and emotions, with a focus on mental health, development, and social interactions.",
            img: "src/assets/img/SpecializationImage/Psychology1.jpeg"
        },
        {
            field: "Sociology",
            description: "Analyze society, social institutions, and human relationships, studying patterns of behavior, culture, and change.",
            img: "src/assets/img/SpecializationImage/sociology1.jpeg"
        },
        {
            field: "Pedagogy",
            description: "Explore the art and science of teaching, focusing on educational theories, methods, and best practices for diverse learning environments.",
            img: "src/assets/img/SpecializationImage/Pedagog1.jpeg"
        },
        {
            field: "Computer Science",
            description: "Learn the fundamentals of computing, algorithms, and programming languages, and how technology is shaping the future.",
            img: "src/assets/img/SpecializationImage/Computer_Science1.jpeg"
        },
        {
            field: "Environmental Science",
            description: "Examine the complex interactions within Earth's ecosystems, studying sustainability, climate change, and conservation efforts.",
            img: "src/assets/img/SpecializationImage/Environmental1.jpeg"
        }
    ],

    options: [
        { field: "Art History", emoji: "🖼️" },
        { field: "Biology", emoji: "🧬" },
        { field: "Chemistry", emoji: "🧪" },
        { field: "Engineering", emoji: "⚙️" },
        { field: "Economics", emoji: "💹" },
        { field: "Linguistics", emoji: "🗣️" },
        { field: "Literature", emoji: "📚" },
        { field: "Mathematics", emoji: "➗" },
        { field: "Music", emoji: "🎵" },
        { field: "Philosophy", emoji: "🤔" },
        { field: "Physics", emoji: "⚛️" },
        { field: "Psychology", emoji: "🧠" },
        { field: "Sociology", emoji: "👥" },
        { field: "Pedagogy", emoji: "👩‍🏫" },
        { field: "Computer Science", emoji: "💻" },
        { field: "Environmental Science", emoji: "🌍" }

    ],

    voteList: [
        {
            vote: "1",
            name: "Needs Improvement",
        },
        {
            vote: "2",
            name: "Below Average",
        },
        {
            vote: "3",
            name: "Satisfactory",
        },
        {
            vote: "4",
            name: "Very Good",
        },
        {
            vote: "5",
            name: "Outstanding",
        }
    ],
    reviewsThreshold: [
        {
            nReview: 5,
            name: "5+"
        },
        {
            nReview: 10,
            name: "10+"
        },
        {
            nReview: 15,
            name: "15+"
        },
    ],
    searchBarQuery: '',
    selectedSpecialization: '',



    setSearchQuery(newQuery) {
        this.searchBarQuery = newQuery;
    }


})