<script>

export default {
    name: "AppFooter",
    data() {
        return {
            links: [
                { name: "Home", },
                { name: "Projects", },
                { name: "About me", },
                { name: "Contact Me", },
            ],

        }
    }
}
</script>

<template>
    <footer>
        <div class="container">
            <nav class="navbar bg-body-tertiary">
                <div class="row justify-content-center">

                    <ul class="col-8 navbar-nav flex-row text-center">
                        <li class="nav-item mx-2" v-for="link in links" :key="link.name">
                            <a class="nav-link" href="#">{{ link.name }}</a>
                        </li>
                    </ul>

                    <div class="text-center col-8">
                        <p>Contact: <a href="#">mail</a></p>
                        <p>
                            Follow me:
                            <a href="#">
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                            <a href="#">
                                <i class="fa-brands fa-github"></i>
                            </a>
                            <a href="#">
                                <i class="fa-brands fa-linkedin"></i>
                            </a>
                        </p>
                    </div>
                    <!-- Credits -->
                    <div class="text-center col-8">
                        <small class="navbar-text">
                            © 2024 - Developed by Jose Manuel. All rights reserved.
                        </small>
                    </div>
                </div>

            </nav>

        </div>
    </footer>
</template>

<style scoped></style>