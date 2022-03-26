
<template>
    <div class="container-fluid">
        <div class="row">
            <Presentacion/>
        </div>
    </div>
</template>

<script>

import Presentacion from '@/components/home/Presentacion.vue'
// import TargetasInfo from '@/components/home/targetasInfo.vue'

export default {
  name: 'Home',
  components: {
    Presentacion,
    // TargetasInfo
  }
}
</script>