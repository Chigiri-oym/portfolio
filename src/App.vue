<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<style>
@import "./assets/styles/styles.css";
</style>

<script>
import Header from './components/organisms/Headers.vue'
import Footer from './components/organisms/Footers.vue'

export default {
  name:'app',
  components : {
    Header,
    Footer
  }
}
</script>