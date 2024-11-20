<script>
// Imported Axios
import axios from "axios";

export default {
    name: "ProjectsList",
    data() {
        return {
            apiUri: "http://127.0.0.1:8000/api/projects",
            projects: [],

        }
    },
    methods: {
        getProjects() {
            axios.get(this.apiUri)
                .then((response) => {
                    console.log(response.data.results);
                    this.projects = response.data.results;
                })
                .catch(function (error) {
                    console.log(error);
                });


        }
    },
    mounted() {
        this.getProjects();
    },
}
</script>

<template>
</template>

<style scoped></style>
