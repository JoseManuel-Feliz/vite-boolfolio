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

        pageLinks: {
            type: Array,
            required: true,
        },
        data() {
            return {

            }, emits: ["changePage"],
        } computed: {
            FirstPage() {
                return this.currentPage === 1;
            },
            LastPage() {
                return this.currentPage === this.lastPage;
            },
        },
        methods: {
            goToPreviousPage() {
                if (!this.isPreviousDisabled) {
                    this.$emit("changePage", this.currentPage - 1);
                }
            },
            goToNextPage() {
                if (!this.isNextDisabled) {
                    this.$emit("changePage", this.currentPage + 1);
                }
            },
        },
    };
</script>

<template>
    <div>
        <nav>
            <ul class="pagination">
                <li class="page-item disabled">
                    <a class="page-link">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item active" aria-current="page">
                    <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped></style>