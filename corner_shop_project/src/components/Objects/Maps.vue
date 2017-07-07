

<template>
    <div class="col-xs-12 col-sm-8">
        <a href="#" class="btn btn-red" @click.stop.prevent="show = !show ">{{ showOption($event) }}</a>
        <template v-if="show">
            <div> Your address : {{ homeLocation.addr }}</div>
            <gmap-map
                    :center="{lat: myLat, lng: myLng}"
                    :zoom="myZoom"
                    style="width: 800px; height: 360px"
            >
                <gmap-marker
                        :key="index"
                        v-for="(m, index) in markers"
                        :position="m.position"
                        :clickable="true"
                        :draggable="true"
                        @click="center=m.position"
                        :icon="m.icon"
                ></gmap-marker>
            </gmap-map>
        </template>
        <template v-else>
            <div> The distance from your <span :title="homeLocation.addr">address  </span> to this shop: {{ calcDistance(myLat,myLng,homeLocation.position.lat,homeLocation.position.lng) }}
            m. Vamos - get some drinks</div>
            <app-comments
                :myId='myId'
                @changedId="id = $event"
>
                
            </app-comments>

        </template>
    </div>
</template>

<script>
    /////////////////////////////////////////
    // New in 0.4.0
    import * as VueGoogleMaps from '../../../node_modules/vue2-google-maps';
    import Vue from 'vue';
    import Comments from '../../../src/components/Objects/Comments.vue';




    Vue.use(VueGoogleMaps, {
        load: {
            key: 'AIzaSyABooIFniiFUgChYv5J0F7nMcWCtb5TwZc',

            // libraries: 'places', //// If you need to use place input
        }
    });

    export default {
        components: {
            appComments:Comments
        },
        props: ['myLat', 'myLng','myZoom','myId'],
        data () {
            return {
                homeLocation: {
                    position: {lat: 41.397315, lng: 2.190144},
                    icon: 'src/assets/house.png',
                    type: 'house',
                    addr: 'Almogàvers 123, Barcelona'
                },
                show: true,
                markers: [{
                    position: {lat: 41.397315, lng: 2.190144},
                    icon: 'src/assets/house.png',
                    type: 'house'
                },{
                    position: {lat: 41.392166, lng: 2.19083},
                    icon: 'src/assets/shop.png',
                    type: 'shop'
                },{
                    position: {lat: 41.3896, lng: 2.194417},
                    icon: 'src/assets/shop.png',
                    type: 'shop'
                },{
                    position: {lat:41.393631, lng: 2.18889},
                    icon: 'src/assets/shop.png',
                    type: 'shop'
                },{
                    position: {lat:41.400441, lng: 2.179932},
                    icon: 'src/assets/shop.png',
                    type: 'shop'
                },{
                    position: {lat:41.389472, lng: 2.195313},
                    icon: 'src/assets/shop.png',
                    type: 'shop'
                },
                ]
            }
        },
        methods: {
            showOption : function(e) {
                return (this.show == true) ? 'More information' : 'Back to Map'
            },
            calcDistance: function (lat1,lon1,lat2,lon2) {
                let p = 0.017453292519943295;    // Math.PI / 180
                let c = Math.cos;
                let a = 0.5 - c((lat2 - lat1) * p)/2 +
                    c(lat1 * p) * c(lat2 * p) *
                    (1 - c((lon2 - lon1) * p))/2;

                return Math.ceil(12742 * Math.asin(Math.sqrt(a)) * 1000);
            },
        }
    }
</script>

<style scoped>
    a.btn.btn-red {
        background-color: #E48681;
        border-color: rgba(0,0,0,0.3);
        text-shadow: 0 1px 0 rgba(0,0,0,0.5);
        color: #FFF;
    }

    a.btn.btn-red:hover {
        background-color: #DA4F49;
        border-color: rgba(0,0,0,0.5);
    }

    a.btn.btn-red:active {
        background-color: #B32C24;
        border-color: rgba(0,0,0,0.9);
    }

</style>
