<script>
export default {
    name: 'AppPagination',
    props: {
        currentPage: {
            type: Number,
            required: true,
        },
        lastPage: {
            type: Number,
            required: true,
        },
        data() {
            return {

            }
        } computed: {
            FirstPage() {
                return this.currentPage === 1;
            },
            LastPage() {
                return this.currentPage === this.lastPage;
            },
        },
    }
</script>

<template>
</template>

<style scoped></style>