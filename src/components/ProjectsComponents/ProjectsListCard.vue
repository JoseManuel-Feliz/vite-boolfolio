<script>
export default {
    name: 'ProjectsListCard',
    props: {
        project: {
            type: Object,
            required: true,
        },
        data() {
            return {

            }
        }
    }
</script>

<template>
    <div class="card">
        <div class="card-body">
            <h2 class="card-title">{{ project.project_title }}</h2>
            <p class="card-text">{{ project.project_summary || "No summary available" }}</p>
            <small>Status: {{ project.status?.project_status || "" }}</small>
            <small>Type: {{ project.type?.project_type || "" }}</small>
            <a :href="project.repository_url" target="_blank">View Repository</a>
        </div>
    </div>
</template>

<style scoped></style>