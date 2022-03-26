<template>
    <button type="button" class="btnPedido"  data-bs-toggle="modal" data-bs-target="#mdPedido">
        <i class="fa-solid fa-cart-plus"></i>
        <span>Hacer pedido</span>
    </button>

    <ModalPedido/>
</template>

<script>
    import ModalPedido from '@/components/menu/modalPedido.vue'
    export default {
        name: "btnPedido",
        components: {
            ModalPedido
        }
    }
</script>

<style scoped>
    .btnPedido{
        width: 50%;
        border-radius: 10px 10px 10px 10px;
        padding: 1%;
        font-size: 1em;
        outline: none;
        border: none;
        background-color: var(--color1);
        color:white;
        align-items: center;
        text-align: center;
        justify-content: center;
        transition: all 0.5s ease-out;
    }

    .btnPedido svg{
        float: left;
        font-size: 1.4em !important;
        padding-right: 1%;
        align-content: flex-start;
    }

    .btnPedido:hover{
        font-size: 1em;
        transition: all 0.5s ease-out;
        width: 15%;
        -webkit-box-shadow: 0px 0px 58px -10px rgba(20,8,34,0.93);
        -moz-box-shadow: 0px 0px 58px -10px rgba(20,8,34,0.93);
        box-shadow: 0px 0px 58px -10px rgba(20,8,34,0.93);
    }
</style>