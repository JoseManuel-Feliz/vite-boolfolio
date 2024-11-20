<script>
// Imported AppHeader
import AppHeader from "./components/AppHeader.vue";
// Imported AppFooter
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {
    }
  },
  components: {
    AppHeader,
    AppFooter,
  }
}
</script>
<template>
  <AppHeader />
  <AppFooter />
</template>
<style lang="scss">
@use "bootstrap/scss/bootstrap.scss" as *;
@use "./scss/general.scss" as *;
</style>
