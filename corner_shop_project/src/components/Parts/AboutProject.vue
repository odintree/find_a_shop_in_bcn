<template>
    <div>
        <h1>RELEASES</h1>
        <div v-for="release in releases">
          <h4>{{release.name}}</h4>
          {{release.text}}
        </div>
    </div>

</template>

<script>
    export default {
        data: function(){
            return {
                releases: [
                    {name: 'First release', text: 'The goal with our first release is to display the local corner shops that are open. This we do to get some traction to the page and deliver content about the market.'},
                    {name: 'Second release', text: 'In the second release we aim to create a marketplace where the user can interact with the products that are displayed from the stores. Also adding the feature of giving the stores the opportunity to add their products.'},
                    {name: 'Third release', text: 'Here we integrate the delivery.'},

                ]
            }
        }
    }

</script>

<style scoped>
    span {
        font: 200 50px/1.3 'Arizonia', Helvetica, sans-serif;
        color: #2b2b2b;
        text-shadow: 4px 4px 0px rgba(0,0,0,0.1);
    }

</style>