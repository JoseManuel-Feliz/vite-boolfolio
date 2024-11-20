<script>
// Imported Axios
import axios from "axios";

export default {
    name: "ProjectsList",
    data() {
        return {
            apiUri: "http://127.0.0.1:8000/api/projects",
            projects: [],
            currentPage: 1,
            lastPage: 1

        }
    },
    methods: {
        getProjects(pageNumber) {
            axios.get(this.apiUri, {
                params: {
                    page: pageNumber,
                }
            })
                .then((response) => {
                    console.log(response.data.results);
                    console.log(pageNumber);
                    this.projects = response.data.results.data;
                    this.currentPage = response.data.current_page;
                    this.lastPage = response.data.last_page;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        changePage(newPage) {
            this.getProjects(newPage);


        }
    },
    mounted() {
        this.getProjects(1);
    },
}
</script>

<template>

    <section>

        <h1>My Projects</h1>

        <div v-for="project in projects" :key="project.id">
            <h2>{{ project.project_title }}</h2>

            <p>{{ project.summary }}</p>

            <span>{{ project.type.project_type }}</span>

        </div>


    </section>
</template>

<style scoped></style>
