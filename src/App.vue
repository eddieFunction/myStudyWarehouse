<template>
   <div id="app">
    <!-- <search-bar></search-bar> -->
    <header-bar></header-bar>
    
    <div>
      <router-view></router-view>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import header from './components/headerBar.vue'
import footer from './components/footBar.vue'


export default {
  name: 'App',
  components: {
    'footer-bar': footer,
    'header-bar': header,
    // 'search-bar': search
  }
}
</script>


<style lang="scss">
</style>
