import { reactive } from 'vue'

export const store = reactive({
    specializations: [
        { field: "Art History" },
        { field: "Biology" },
        { field: "Chemistry" },
        { field: "Engineering" },
        { field: "Economics" },
        { field: "Linguistics" },
        { field: "Literature" },
        { field: "Mathematics" },
        { field: "Music" },
        { field: "Philosophy" },
        { field: "Physics" },
        { field: "Psychology" },
        { field: "Sociology" },
        { field: "Pedagogy" },
        { field: "Computer Science" },
        { field: "Environmental Science" }
    ],
    voteList: [
        {
            name: "Needs Improvement",
            vote: "1"
        },
        {
            name: "Below Average",
            vote: "2"
        },
        {
            name: "Satisfactory",
            vote: "3"
        },
        {
            name: "Very Good",
            vote: "4"
        },
        {
            name: "Outstanding",
            vote: "5"
        }
    ],
    searchBarQuery: '',
    selectedSpecialization:'',

    

    setSearchQuery(newQuery) {
        this.searchBarQuery = newQuery;
    }

    
})