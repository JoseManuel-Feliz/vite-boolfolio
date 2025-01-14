<script>
import NavTitle from "./NavBarComponents/NavbarTitle.vue";
import NavLinks from "./NavBarComponents/NavbarLinks.vue";
export default {

    name: "AppHeader",

    data() {
        return {
            title: "My Projects",
            links:
                [
                    { "name": "Home" },
                    { "name": "Projects" },
                    { "name": "About me" },
                ],
        };
    },
    components: {
        NavTitle,
        NavLinks,
    },

};
</script>

<template>

    <Header>
        <div class="container">

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <!-- Navbar Title -->
                    <NavTitle :title="title" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <!-- Navbar Links -->
                        <NavLinks :links="links" />

                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    </Header>

</template>

<style scoped></style>