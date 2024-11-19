<script>
export default {
    name: "NavLinks",
    props: {
        links: {
            type: Array,
            required: true,
        },

    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li v-for="(link, index) in links" :key="index" class="nav-item">
            <a class="nav-link" href="#">{{ link.name }}</a>
        </li>
    </ul>
</template>

<style scoped></style>
