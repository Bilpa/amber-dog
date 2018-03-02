

<!-- 
Before anything else I would like to apologise for the structure and general feel of the code,
I'm fairly new to web development, I have a background as a game developer and is more used to Java, C++, C# programming.
I do have some basic skills in html, css and javaScript from way-back-when but 
I haven't really worked with libraries (I have recently started working a bit with react )
or backend stuff before (other than som basic username/password management with Php and Sql, and that was years ago)

I have Never worked with with either Vue or Express before this monday, I actually started this monday 
by looking up vue on google, ran some tutorials and here we are now... 
My solution is not pretty, But I am proud that I actually manage to produce something that works and 
hope this shows that (at least) I am willing to learn and try new things.

AS it turned out in the end, I forfeited all things related to the backend and tried to keep up on the frontend instead.

 -->
<template>

  <div id="app">
    <h1>Image Gallery</h1>
    
    <p>
        Click on an Image to edit description
    </p>
    <!-- Slides are the container component that holds all picture components as individual slides -->
    <Slides></Slides>
   
  </div>
</template>

<script>

  import Slides from './components/Slides'

  export default {
    name: 'app',

    components: {
      Slides 
    },

    data () {

      return {
        
        Slides,
      }
    },

    methods: {
      
    }

  }
</script>



<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1 {
    font-weight: normal;
  }

</style>
