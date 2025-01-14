<script>
// Imported AppHeader
import AppHeader from "./components/AppHeader.vue";
// Imported ProjectsList
import ProjectsList from "./components/ProjectsComponents/ProjectsList.vue";
// Imported AppFooter
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {
    }
  },
  components: {
    ProjectsList,
    AppHeader,
    AppFooter,
  }
}
</script>
<template>
  <AppHeader />
  <ProjectsList />
  <AppFooter />
</template>
<style lang="scss">
@use "bootstrap/scss/bootstrap.scss" as *;
@use "./scss/general.scss" as *;
</style>
