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
                    <ul class="list-group list-group-flush" id="v-for-object">
                        <li class="list-group-item" v-for="(value, key) in $store.state.precios.sabores" :key="key">
                            <span class="liOp">{{value.nombre}}</span><span class="liPre">${{value.precio}}</span>
                        </li>
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
                        <li class="list-group-item" v-for="(value, key) in $store.state.precios.TipoAdorno1" :key="key">
                            <span class="liOp">{{value.nombre}}</span><span class="liPre">${{value.precio}}</span>
                        </li>
                    </ul>
                    <div class="card-body">
                        <h5 class="card-title">Adornos de pasteles (Dibujos)</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" v-for="(value, key) in $store.state.precios.TipoAdorno2" :key="key">
                            <span class="liOp">{{value.nombre}}</span><span class="liPre">${{value.precio}}</span>
                        </li>
                    </ul>
                    <div class="card-body">
                        <h5 class="card-title">Pirotecnia</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" v-for="(value, key) in $store.state.precios.TipoAdorno3" :key="key">
                            <span class="liOp">{{value.nombre}}</span><span class="liPre">${{value.precio}}</span>
                        </li>
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