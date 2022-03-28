<template>
    <div class="col-md-12 marginTop5 " v-if="$store.state.pedidosP.length > 0">
        <div  class="d-flex align-items-start">
                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical" >
                    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Pedidos</button>
                    <!-- <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Pedidos realizados</button> -->
                </div>
                <div class="tab-content marginLeft2 col-md-12 row" id="v-pills-tabContent">
                    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        <div class="col-md-12 row">
                            <div class="card border-success col-md-3" v-for="(value, key) in $store.state.pedidosP" :key="key">
                                <div class="card-header bg-transparent border-success">Pedido n°    {{ key + 1 }}</div>
                                <div class="card-body text-success row">
                                    <div class="col-md-12">
                                        <h5 class="card-title"></h5>
                                    </div> 
                                    <div class="col-md-12">
                                        <div class="col-md-12 row">
                                            <div class="col-md-12">
                                                Pastel con sabor o sabores de:
                                            </div>
                                            <div class="col-md-12">
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item tikedList" v-for="(value, key) in value.checkboxSabores" :key="key">
                                                        <span class="liOp">{{value}}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-md-12">
                                                Con adornos de:
                                            </div>
                                            <div class="col-md-12">
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item tikedList" v-for="(value, key) in value.adorno1" :key="key">
                                                        <span class="liOp">{{value}}</span>
                                                    </li>
                                                    <li class="list-group-item tikedList" v-for="(value, key) in value.adorno2" :key="key">
                                                        <span class="liOp">{{value}}</span>
                                                    </li>
                                                    <li class="list-group-item tikedList" v-for="(value, key) in value.adorno3" :key="key">
                                                        <span class="liOp">{{value}}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div class="card-footer bg-transparent border-success">
                                    <p>Nombre: {{ value.nombre }}</p>
                                    <p>Telefono: {{ value.telefono }}</p>
                                    <p>Corero: {{ value.correo }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">lll</div> -->
                </div>
            </div>
        </div> 
    <div class="col-md-12 marginTop5 marginBottom10 row text-center" v-else>
             <div class="col-md-12 imagenSad">
                <img src="../../assets/sad-face-animated-gif-2.gif" />
            </div>
            <div class="col-md-12">
                <h1>Sin pedidos aún</h1>
            </div>
        </div>
</template>


<script>

export default {
    name : "datosPedidos"
}
</script>

<style scoped>
    .imagenSad{
        font-size: 12em;
    }
</style>