<template>


    <div class="component">
        <div> User comments: </div>
        <div v-for="comment,index in comments" class="commentContainer">
           <div v-show="checkShop(index)" class="commentBox"><span class="user">{{comment.user}}:</span> <span class="text">{{comment.text}}</span></div> 
        </div>
    </div>

</template>

<script>
    import axios from 'axios';
    export default {
        props: ['myId', 'myLng'],
        data: function (){
            return{
                id: this.myId,
                comments: [
                    {
                    id: "121",
                    text: "Something",
                    user: "abc",
                    shop_id: "414hj12-j4h124-j112j"
                    },
                    {
                    id: "451",
                    text: "Hard to find",
                    user: "soTrue",
                    shop_id: "414hj12-j4h124-j112j"

                    },
                    {
                    id: "451",
                    text: "Nice place",
                    user: "Floris",
                    shop_id: "23hh2y-u2yy2y40-y765j"
                    },
                    {
                    id: "667",
                    text: "they cant speak english",
                    user: "Goo",
                    shop_id: "246578-j42o-o2uiyghjg-42hjg"
                    },
                    {
                    id: "323",
                    text: "Dont like it",
                    user: "Biem",
                    shop_id: "2j2h533-3j46ui49n34jj22-902"
                    },
                    {
                    id: "142",
                    text: "Such a good service",
                    user: "ARUM",
                    shop_id: "23hh2y-u2yy2y40-y765j"
                    },
                    {
                    id: 142,
                    text: "Good Place.",
                    user: "saul",
                    shop_id: "23hh2y-u2yy2y40-y765j"
                    },
                    {
                    id: "142",
                    text: "not so good",
                    user: "escobar",
                    shop_id: "c58741cf-22fd-4036-88de-fe51fd006cfc"
                    }
                ],
                    checkShop:  function(i) {
                        return this.myId == this.comments[i].id;
                    }
                }
            }
        }



    


</script>

<style scoped>
.commentContainer {
    display: inline-block;
}

.commentBox {
    border: 1px black solid;
    margin: 10px;
    background: #40C4FF;
    position: relative;
	width: 200px;
	height: 100px;
	text-align: center;
	line-height: 100px;
	border: 8px solid #666;
	-webkit-border-radius: 30px;
	-moz-border-radius: 30px;
	border-radius: 30px;
	-webkit-box-shadow: 2px 2px 4px #888;
	-moz-box-shadow: 2px 2px 4px #888;
	box-shadow: 2px 2px 4px #888;
}

.commentBox:before { 
	content: ' '; 
	position: absolute; 
	width: 0; 
	height: 0; 
	left: 30px; 
	top: 100px; 
	border: 25px solid; 
	border-color: #666 transparent transparent #666; 
}
.commentBox:after { 
	content: ' '; 
	position: absolute; 
	width: 0; 
	height: 0; 
	left: 38px; 
	top: 100px; 
	border: 15px solid; 
	border-color: #fff transparent transparent #fff; 
}

.user {
    color:brown;
}
.text {
    color:black;
}
   

</style>