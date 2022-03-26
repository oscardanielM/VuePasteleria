<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 marginBottom2 row">
                <div class="col-md-12 text-center">
                    <h1>Menu</h1>
                </div>
                <div class="col-md-4 offset-4 text-center">
                    <h5>
                        <p class="textmsj">Echa un vistazo a nuestro menú, cuando estes listo solo da clic en levantar pedido para tomar tu orden</p>
                    </h5>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card" style="">
                    <div class="card-body">
                        <h5 class="card-title">Sabores de pasteles</h5>
                        <p class="card-text">Escoge entre una variedad de sabores el que mas te guste</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><span class="liOp">Tres leches</span><span class="liPre">$500</span></li>
                        <li class="list-group-item"><span class="liOp">Vainilla</span><span class="liPre">$150</span></li>
                        <li class="list-group-item"><span class="liOp">Chocolate</span><span class="liPre">$150</span></li>
                        <li class="list-group-item"><span class="liOp">Zarzamora</span><span class="liPre">$550</span></li>
                        <li class="list-group-item"><span class="liOp">Moka</span><span class="liPre">$350</span></li>
                        <li class="list-group-item"><span class="liOp">Café</span><span class="liPre">$350</span></li>
                        <li class="list-group-item"><span class="liOp">Galleta</span><span class="liPre">$300</span></li>
                        <li class="list-group-item"><span class="liOp">Natural</span><span class="liPre">$100</span></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card" style="">
                    <div class="card-body">
                        <h5 class="card-title">Adornos de pasteles (letreros, adorno)</h5>
                        <p class="card-text">Complementa con un adorno para ser especial la fiesta</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><span class="liOp">Letrero de Happy Birthday</span><span class="liPre">$250</span></li>
                        <li class="list-group-item"><span class="liOp">Letrero de felicidades</span><span class="liPre">$250</span></li>
                        <li class="list-group-item"><span class="liOp">Letrero de aniversario</span><span class="liPre">$250</span></li>
                        <li class="list-group-item"><span class="liOp">Velas con numero</span><span class="liPre">$250</span></li>
                    </ul>
                    <div class="card-body">
                        <h5 class="card-title">Adornos de pasteles (Dibujos)</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><span class="liOp">Dibujo mediano de BobEsponja</span><span class="liPre">$250</span></li>
                        <li class="list-group-item"><span class="liOp">Dibujo grande de Iroman</span><span class="liPre">$250</span></li>
                        <li class="list-group-item"><span class="liOp">Dibujo chico de un Astronauta</span><span class="liPre">$250</span></li>
                    </ul>
                    <div class="card-body">
                        <h5 class="card-title">Pirotecnia</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><span class="liOp">Luces</span><span class="liPre">$150</span></li>
                        <li class="list-group-item"><span class="liOp">Pistola de confeti</span><span class="liPre">$50</span></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-12 row marginTop2 text-center contenedorBtn">
                <BtnPedido />
            </div>
        </div>
    </div>
</template>

<script>

import BtnPedido from '@/components/menu/btnHacerPedido.vue'

export default {
    name: "opciones",
    components: {
        BtnPedido,
    }

}
</script>

<style scoped>
    .textmsj{
        font-weight: 100;
    }

    .liOp{
        float: left;
        padding-left: 4%;
    }

    .liPre{
        float: right;
    }

    .contenedorBtn{
        justify-content: center;
    }
</style>