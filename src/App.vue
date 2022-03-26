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
  :root{
    --color1:#00d100;
    --color2:#140822;
    --color3:#18F2B2;
  }

  *{
      font-family: 'Fredoka', sans-serif;
    }

    .modal-content{
      background-color: var(--color2);
      color: white;
    }

    .paddin10{
      padding: 10%  ;
    }

    .paddin4{
      padding: 4%  ;
    }

    .marginTop2{
      margin-top: 2%;
    }

    .marginTop5{
      margin-top: 5%;
    }

    .marginTop10{
      margin-top: 10%;
    }

    .marginBottom2{
      margin-bottom: 2%;
    }
</style>