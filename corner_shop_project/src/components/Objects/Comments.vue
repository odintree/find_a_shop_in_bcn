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
                ],
                    checkShop:  function(i) {
                        return this.myId == this.comments[i].id;
                    }
                }   
            },
            beforeMount() {
                    axios.all([
                        axios.get('/api/me'),
                        axios.get('/api/comments'),
                        ]).then(([{ data: meData }, { data: commentsData }]) => {
                            this.user = meData.user;
                            this.comments = commentsData.comments;
                        });
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