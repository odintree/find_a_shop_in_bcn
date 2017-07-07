<template>
    <div class="container">
        <div class="row">
            <div class = "hola">
                <img src="src/assets/logo.jpg">
                <img src="src/assets/logo.jpg">
                <img src="src/assets/logo.jpg">
                <img src="src/assets/logo.jpg">
                <img src="src/assets/logo.jpg">
                <img src="src/assets/logo.jpg">
                <img src="src/assets/logo.jpg">

                <button class="control" @click="selectedPart = 'app-main-box'">Home</button>
                <button class="control" @click="selectedPart = 'app-about-project'">About project</button>
                <button class="control" @click="selectedPart = 'app-about-us'">About us</button>
            </div>
            <app-header></app-header>
            <hr>

            <component :is="selectedPart"></component>
<!--
            <app-main-box></app-main-box>
-->
            <hr>
            <app-footer></app-footer>
        </div>
    </div>
</template>

<script>
    import Header from './components/Parts/Header.vue';
    import Footer from './components/Parts/Footer.vue';
    import MainBox from './components/Parts/MainBox.vue';
    import AboutProject from './components/Parts/AboutProject.vue';
    import AboutUs from './components/Parts/AboutUs.vue';


    export default {
        data: function () {
            return {
                lat: 41.39,
                lgn: 2.19,
                selectedPart: 'app-main-box'
            };
        },
        components: {
            appHeader: Header,
            'app-footer': Footer,
            'app-main-box': MainBox,
            'app-about-project': AboutProject,
            'app-about-us': AboutUs
        }
    }
</script>

<style>
    body {
        background: #F1F9FD;
    }
    button {
        font-size: 24px;
        border: none;
        background: transparent;
        color: black;
        margin-top: 2em;
        margin-left: 1.5em;
        opacity: 100;
        border-radius: 25px;
    }
    .control{
        margin-bottom: 20px;
    }
    .hola {
        background: #40C4FF;
        text-align: right;
        height: 100px;

    }
    img{
        width: 100px;
        height: 100px;
        float:left;
    }

</style>
