<script>
import ProjectsList from '../components/ProjectsComponents/ProjectsList.vue';
export default {
    name: "AppProjects",
    data() {
        return {
        }
    },
    methods: {
    },
    created() {
    },
    components: {
        ProjectsList,
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="h2 py-3">
                        My Projects:
                    </h2>
                </div>
                <div class="col-12">

                    <ProjectsList />
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped></style>