<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorldWithLoading msg="Welcome to Your Vue.js App" :show="show"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { withLoading } from "./hocs/withLoading";

const HelloWorldWithLoading = withLoading(HelloWorld);

export default {
  name: 'App',
  components: {
    HelloWorldWithLoading
  },
  data() {
    return {
      show: true
    }
  },
  mounted() {
    // stop loading after 10s
    window.setTimeout(() => {
      this.show = false
    }, 10000)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
