<script>
// Imported AppHeader
import AppHeader from "./components/AppHeader.vue";
// Imported AppFooter
import AppFooter from "./components/AppFooter.vue";
// Imported Axios
import axios from 'axios';

export default {
  data() {
    return {
      apiUri: 'http://127.0.0.1:8000/api/projects',
    }
  },
  mounted() {
    axios.get(this.apiUri).then(response => {
      console.log(response);
    });
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
