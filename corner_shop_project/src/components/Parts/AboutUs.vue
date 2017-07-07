<template>
    <div>
        <h2> {{ title }} </h2>

        <div> {{ intro }}
        </div>
        <hr>
        <div v-for="story in ourStory">
            <div class="intro"><span>{{story.name}}</span> {{ story.story}}</div> 
        </div>
    </div>

</template>

<script>
    export default {
        data: function() {
            return {
                title: 'Our Story',
                intro : 'We are a team of five people, currently studying at Barcelona Technology School.We almost finished our master’s degree in Digital Solution Development here in Spain. We moved here all from all around the world.',
                ourStory: [
                    {name: 'Floris', story: ': is 25 years old and from the Netherlands. He studied marketing in Groningen and did his internship in Amsterdam at Ahold. When he was working, he felt that he wasn’t finished and moved to Barcelona. Currently, he is a digital marketing intern at Trybe app. He specialties are marketing, sales and his social skills.'},
                    {name: 'Gustavo', story: ': is 29 years old and from Brazil. He is a Digital Marketing Specialist with more than 8 years of experience, working with companies as Honda Motors, Nextel, A&E Channel and The History Channel. Currently he is a digital marketing intern at Learnlight.'},
                    {name: 'Arin', story: ': is 27 years old and from Sweden. Arin comes from a background of serial startups and has found his interest in the digital development industry, coming from a logistics background he like things to move in a fast pace. Arin currently works as a project manager at Argubi.tech.'},
                    {name: 'Bin', story: ': is 25 years old from Russia. He has finance background but in the same time has a huge interest in web development and data science. Going to Barcelona to make the first step to the technical world. Currently working in Argubi.tech.'},
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