<template>
    <div class="component">
        <div class="row">
            <app-maps
                    :myLat="lat"
                    :myLng="lng"
                    :myId='id'
                    :myZoom="zoomLvl"></app-maps>
            <app-shops-display
                    :myLat="lat"
                    :myLng="lng"
                    :myId='id'
                    :myZoom="zoomLvl"
                    @changedLat="lat = $event"
                    @changedLng="lng = $event"
                    @changedId="id = $event"
                    @changedZoom="zoomLvl=$event"
            > </app-shops-display>
        </div>
    </div>
</template>

<script>
    import ShopDisplay from './../Objects/ShopDisplay.vue';
    import Maps from './../Objects/Maps.vue';


    export default {
        data: function () {
            return {
                id:'',
                lat: 41.39,
                lng: 2.19,
                zoomLvl: 10,
                haha: 'atata'
            };
        },
        methods: {
        },
        components: {
            'app-shops-display': ShopDisplay,
            'app-maps': Maps
        }
    }
</script>

<style scoped>


</style>
