<template>
    <div class="container">
        <div class="row">
            <DatosPedidos/>
        </div>
    </div>
</template>

<script>
import DatosPedidos from '@/components/pedidos/tablePedidos.vue'

export default {
    name: "Pedido",
    components : {
        DatosPedidos
    }
}
</script>