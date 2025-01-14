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
    }, computed: {
        isFirstPage() {
            return this.currentPage === 1;
        },
        isLastPage() {
            return this.currentPage === this.lastPage;
        },
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
            if (!this.isFirstPage) {
                this.getProjects(this.currentPage - 1);
            }
        },
        nextPage() {
            if (!this.isLastPage) {
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
        <div v-if="projects.length" class="row row-cols-3 g-3">
            <div class="col">
                <ProjectsListCard v-for="project in projects" :key="project.id" :project="project" />
            </div>
        </div>
    </section>

    <div class="my-4">
        <AppPagination :currentPage="currentPage" :lastPage="lastPage" :isFirstPage="isFirstPage"
            :isLastPage="isLastPage" @previousPage="previousPage" @nextPage="nextPage" @changePage="changePage" />
    </div>
</template>

<style scoped></style>
