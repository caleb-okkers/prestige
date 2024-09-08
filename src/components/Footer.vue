<template>
    <footer class="container-fluid">
        <div class="row">
            <p class="lead">Via Veneto Royale &copy; <span>{{ cYear }}</span></p>
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
    color: var(--primary-light) ;
    background: var(--primary-dark);
    font-family: "Bona Nova SC", serif;
    font-weight: 500;
    font-style: normal;
    font-size: 2.5rem;
    bottom: 0;
    z-index: 1;
}

footer p {
    padding-top: 2rem;
}
    
</style>