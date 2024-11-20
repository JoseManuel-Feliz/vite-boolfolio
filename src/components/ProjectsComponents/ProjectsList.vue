<script>
// Imported Axios
import axios from "axios";

import ProjectsListCard from "./ProjectsListCard.vue"
import AppPagination from "../AppPagination.vue"

export default {
    name: "ProjectsList",
    components: {
        ProjectsListCard,
        AppPagination,
    },
    data() {
        return {
            apiUri: "http://127.0.0.1:8000/api/projects",
            projects: [],
            pageLinks: [],
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
                    const data = response.data.results;
                    this.projects = data.data;
                    this.lastPage = data.last_page;
                    this.currentPage = pageNumber;
                })

                .catch(function (error) {
                    console.log(error);
                });
        },
        previousPage() {
            if (this.currentPage > 1) {
                this.getProjects(this.currentPage - 1);
            }
        },
        nextPage() {
            if (this.currentPage < this.lastPage) {
                this.getProjects(this.currentPage + 1);
            }
        },
        changePage(pageNumber) {
            this.getProjects(pageNumber);
        },
        mounted() {
            this.getProjects(1);
        },
    }
}

</script>

<template>

    <section>
        <div v-if="projects.length">
            <ProjectsListCard v-for="project in projects" :key="project.id" :project="project" />
        </div>
        <AppPagination :currentPage="currentPage" :lastPage="lastPage" @previousPage="previousPage" @nextPage="nextPage"
            @changePage="changePage" />
    </section>
</template>

<style scoped></style>
