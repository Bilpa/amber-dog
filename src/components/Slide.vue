<template>
    <div class="slide">
        <img v-bind:src="slide.src" alt="" v-on:click="showForm">

        <!-- show description, invisible while editing  -->
        <p class="description" v-show="!isEditing">
            {{slide.description}}
        </p>
        
       <!-- shown when when we are editing description -->
        <div class ="content" v-show="isEditing">
            <div class ='ui form'>
                <div class = 'field'>
                    
                    <textarea v-model="slide.description" placeholder="edit description..."></textarea>    
                </div>
                <div class="button div">
                    <button class="button" v-on:click="hideForm">
                        update description
                    </button>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
    export default {

        props: ['slide'],

        data(){

           return {
               
               isEditing: false,
               description: ''
           }
        },

         methods: {
    
            showForm(){
                this.isEditing = true;
            },

            hideForm(){
                this.isEditing = false;       
            },
        },
        
            
    };
</script>

<style scoped>

    img {
        width: 40em;
        max-width: 100%;
    }

    textarea {
        width:80%;
        height: 100px;
        resize: none; 
    }

    .slide {
        display: inline-block;
        border-style:  solid;
    }

    .field {
        width: 100%;
        display: block;
    }

    button {
        margin: 1em;
    }

    p {
        margin-bottom: 2em;
    }

</style>