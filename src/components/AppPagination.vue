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

                <li v-for="(page, index) in pageLinks" :key="index" :class="['page-item', { active: page.active }]">
                    <a class="page-link" href="#">
                        {{ page.label }}
                    </a>
                </li>

                <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped></style>