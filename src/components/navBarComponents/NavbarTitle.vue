<script>
export default {
    name: 'NavTitle',
    props: {
        title: {
            type: String,
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
    <a class="navbar-brand" href="#">{{ title }}</a>
</template>

<style scoped></style>