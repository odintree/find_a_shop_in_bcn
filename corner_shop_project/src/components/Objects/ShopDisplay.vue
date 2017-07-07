<template>
    <div class="col-xs-12 col-sm-4 component">
        <div class="time">{{ new Date().toLocaleString("de-DE", {timeZone: "Europe/Madrid"}) }}</div>
        <div id="container" >
        <div> 
            <a href="#" class="btn btn-red" @click.stop.prevent="showShops = !showShops ">{{ showShopsOption($event) }}</a>
            <ul v-if="showShops">
                <li v-for="item, index in shops_list" @click="changeLat(index)">
                    <div>Store:  {{item.name}} </div>
                    <div>Address: {{ item.addr }}</div>
                    <div>{{ item.working_hour}}</div>
                    <hr>
                </li>
            </ul>
            <ul v-else>
                <li v-for="item, index in shops_list_24" @click="changeLat(index)">
                    <div>Store:  {{item.name}} </div>
                    <div>Address: {{ item.addr }}</div>
                    <div>{{ item.working_hour}}</div>
                    <hr>
                </li>
            </ul>        </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['myLat','myLng','myZoom','myId'],
        data: function () {
            return {
                shops_list: [
                    {name: 'Nohan Supermarket', addr: 'Carrer de Marina 68',id:'121', working_hour: '08:00 - 00:00', lat:41.392166, lng: 2.19083},
                    {name: 'Supermercat Olimpic', addr: 'Carrer de Moscou 26',id:'451', working_hour: '24h', lat:41.3896, lng: 2.194417},
                    {name: 'de fresca store', addr: 'Carrer de Marina 90', id: '667', working_hour: '09:00 - 21:00', lat:41.393631, lng: 2.18889},
                    {name: 'Supermercat', addr: 'Carrer de Marina 200', id:'323', working_hour: '09:00 - 23:00', lat:41.400441, lng: 2.179932},
                    {name: 'Max Supermercat', addr: "Avinguda d'Icaria 134", id:'142', working_hour: '09:00 - 00:00', lat:41.389472, lng: 2.195313},
                    {name: 'Max Supermercat', addr: "Avinguda d'Icaria 134",id:'198', working_hour: '09:00 - 00:00', lat:41.3896, lng: 2.194417},
                ],
                position: 5,
                showShops:  true,
            }
        },
        methods: {
            changeLat(i) {
                this.myLat = this.shops_list[i].lat;
                this.myLng = this.shops_list[i].lng;
                this.myZoom = 20;
                this.myId = this.shops_list[i].id;
                this.$emit('changedLat', this.myLat);
                this.$emit('changedLng', this.myLng);
                this.$emit('changedId', this.myId);
                this.$emit('changedZoom', this.myZoom);
            },
            showShopsOption : function(e) {
                console.log('hahahah');
                return (this.showShops == true) ? '24H SHOPS' : 'ALL SHOPS'
            },
        },
        computed: {
            shops_list_24: function() {
                return this.shops_list.filter(function(item){
                    return  item.working_hour === "24h";
                })
            }
        }
    }
</script>

<style scoped>
    li {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    li:nth-child(odd) {
        background: #e5e1e1;
    }
    li:nth-child(even) {
        background: #dfc3bf;
    }

    .time {
        margin-bottom: 1px;
        text-align: right;
    }
    #container {
        max-height:400px;
        overflow-y: auto;
    }
    .btn-red {
        background: whitesmoke;
    }

</style>
