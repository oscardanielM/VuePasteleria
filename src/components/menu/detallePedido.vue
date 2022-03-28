<template>
    <div class="modal fade" id="modalDetalle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalToggleLabel2">Detalle del pedido</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="container row">
                    <div class="col-md-12">
                        <h1>Tiked</h1>
                    </div>
                    <div class="col-md-12 row">
                        <div class="col-md-12">
                            Pastel con sabor o sabores de:
                        </div>
                        <div class="col-md-12">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item tikedList" v-for="(value, key) in $store.state.checkboxSabores" :key="key">
                                    <span class="liOp">{{value}}</span><span class="liPre">${{$store.state.precios.sabores.find(element => element.nombre == value).precio}}</span>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-12">
                            Con adornos de:
                        </div>
                        <div class="col-md-12">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item tikedList" v-for="(value, key) in $store.state.adorno1" :key="key">
                                    <span class="liOp">{{value}}</span><span class="liPre">${{$store.state.precios.TipoAdorno1.find(element => element.nombre == value).precio}}</span>
                                </li>
                                 <li class="list-group-item tikedList" v-for="(value, key) in $store.state.adorno2" :key="key">
                                    <span class="liOp">{{value}}</span><span class="liPre">${{$store.state.precios.TipoAdorno2.find(element => element.nombre == value).precio}}</span>
                                </li>
                                 <li class="list-group-item tikedList" v-for="(value, key) in $store.state.adorno3" :key="key">
                                    <span class="liOp">{{value}}</span><span class="liPre">${{$store.state.precios.TipoAdorno3.find(element => element.nombre == value).precio}}</span>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-12">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item tikedList">
                                    <span class="liOp2">Total:</span><span class="liPre">${{$store.getters.totalPedido}}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" data-bs-target="#mdPedido" data-bs-toggle="modal">Revisar pedido</button>
                <button class="btn btn-primary">Pedir</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "detallePedido"
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

    .liOp2{
        float: left;
        padding-left: 50%;
    }

    .liPre{
        float: right;
    }

    .contenedorBtn{
        justify-content: center;
    }

    .tikedList{
        background-color: transparent;
        color: var(--color3);
    }

    
</style>