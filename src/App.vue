<template>
  <NavBar/>
  <router-view/>
   <MyFooter/>
</template>


<script>

import NavBar from '@/components/NavBar.vue'
import MyFooter from '@/components/FooterMy.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    MyFooter
  }
}
</script>


<style>
  *{
      font-family: 'Fredoka', sans-serif;
    }
</style>