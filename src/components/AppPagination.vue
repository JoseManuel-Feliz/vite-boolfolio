<script>
export default {
    name: "AppPagination",
    props: {
        currentPage: {
            type: Number,
            required: true,
        },

        lastPage: {
            type: Number,
            required: true,
        },

    },
    emits: ["previousPage", "nextPage", "changePage"],
    data() {
        return {
        }
    },
    computed: {

    },
    methods: {

    },
};
</script>

<template>
    <nav>
        <ul class="pagination">
            <li :class="['page-item', { disabled: currentPage === 1 }]">
                <button class="page-link" @click="$emit('previousPage')" :disabled="currentPage === 1">
                    Previous
                </button>
            </li>
            <li v-for="page in lastPage" :key="page" :class="['page-item', { active: page === currentPage }]">
                <button class="page-link" @click="$emit('changePage', page)">
                    {{ page }}
                </button>
            </li>
            <li :class="['page-item', { disabled: currentPage === lastPage }]">
                <button class="page-link" @click="$emit('nextPage')" :disabled="currentPage === lastPage">
                    Next
                </button>
            </li>
        </ul>
    </nav>
</template>


<style scoped></style>