<template>
    <footer class="container-fluid">
        <div class="row">
            <p class="lead">The Hotel &copy; <span class="shadow">{{ cYear }}</span></p>
        </div>
    </footer>
</template>
<script>
export default {
    name: "FooterComp",
    data() {
        return {
            cYear: new Date().getUTCFullYear()
        }
    }
}
</script>
<style scoped>

footer {
    color: #000;
    background: #fff;
    font-family: "Bona Nova SC", serif;
    font-weight: 500;
    font-style: normal;
    font-size: 2.5rem;
    color: rgb(29, 29, 29);
    bottom: 0;
    z-index: 1;
}

footer p {
    padding-top: 2rem;
}
    
</style>