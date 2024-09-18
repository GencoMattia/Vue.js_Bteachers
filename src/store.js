import { reactive } from 'vue'

export const store = reactive({
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
    reviewsThreshold:[
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