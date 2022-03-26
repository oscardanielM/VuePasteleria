<template>
    <div class="modal fade" id="mdPedido" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="exampleModalLabel">Modal title</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form action="">
                    <div class="container row">
                        <div class="col-md-6 datosCliente">
                            <div class="input-group">
                                <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-user-astronaut"></i></span>
                                <input type="text" class="form-control" placeholder="Nombre" aria-label="Nombre" aria-describedby="basic-addon1">
                            </div>
                        </div>
                        <div class="col-md-6 datosCliente">
                            <div class="input-group">
                                <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-phone"></i></span>
                                <input type="number" class="form-control" placeholder="Telefono" aria-label="Telefono" aria-describedby="basic-addon1">
                            </div>
                        </div>
                        <div class="col-md-12 datosCliente marginTop1">
                            <div class="input-group">
                                <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-phone"></i></span>
                                <input type="email" class="form-control" placeholder="Correo" aria-label="Correo" aria-describedby="basic-addon1">
                            </div>
                        </div>
                        <div class="col-md-12 marginTop5">
                            <h5>Selecciona los sabores que desees</h5>
                        </div>
                        <div class="col-md-12">
                            <input type="checkbox" class="btn-check" id="chekSabor1" autocomplete="off">
                            <label class="labelCheak btn btn-outline-primary col-md-3" for="chekSabor1">Tres leches</label>

                            <input type="checkbox" class="btn-check" id="chekSabor2" autocomplete="off">
                            <label class="labelCheak btn btn-outline-primary col-md-3" for="chekSabor2">Vainilla</label>

                            <input type="checkbox" class="btn-check" id="chekSabor3" autocomplete="off">
                            <label class="labelCheak btn btn-outline-primary col-md-3" for="chekSabor3">Chocolate</label>

                            <input type="checkbox" class="btn-check" id="chekSabor4" autocomplete="off">
                            <label class="labelCheak btn btn-outline-primary col-md-3" for="chekSabor4">Zarzamora</label>

                            <input type="checkbox" class="btn-check" id="chekSabor5" autocomplete="off">
                            <label class="labelCheak btn btn-outline-primary col-md-3" for="chekSabor5">Moka</label>

                            <input type="checkbox" class="btn-check" id="chekSabor6" autocomplete="off">
                            <label class="labelCheak btn btn-outline-primary col-md-3" for="chekSabor6">Café</label>

                            <input type="checkbox" class="btn-check" id="chekSabor7" autocomplete="off">
                            <label class="labelCheak btn btn-outline-primary col-md-3" for="chekSabor7">Galleta</label>

                            <input type="checkbox" class="btn-check" id="chekSabor8" autocomplete="off">
                            <label class="labelCheak btn btn-outline-primary col-md-3" for="chekSabor8">Natural</label>
                        </div>
                        <div class="col-md-12 marginTop5">
                            <h5>Escoje los adornos para tu pastel</h5>
                        </div>
                        <div class="col-md-12 row">
                            <div class="col-md-4">
                                <h5> 
                                    Adornos de pasteles (letreros, adorno)
                                </h5>
                                <br>
                                <div class="columsAdornos">
                                    <input type="checkbox" class="btn-check" id="chekAdF11" autocomplete="off">
                                    <label class="labelCheak2 btn btn-outline-primary col-md-12" for="chekAdF11">Letrero de Happy Birthday</label>
                                    <input type="checkbox" class="btn-check" id="chekAdF12" autocomplete="off">
                                    <label class="labelCheak2 btn btn-outline-primary col-md-12" for="chekAdF12">Letrero de felicidades</label>
                                    <input type="checkbox" class="btn-check" id="chekAdF13" autocomplete="off">
                                    <label class="labelCheak2 btn btn-outline-primary col-md-12" for="chekAdF13">Letrero de aniversario</label>
                                    <input type="checkbox" class="btn-check" id="chekAdF14" autocomplete="off">
                                    <label class="labelCheak2 btn btn-outline-primary col-md-12" for="chekAdF14">Velas con numero</label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <h5> 
                                    Adornos de pasteles (Dibujos)
                                    <br><br>
                                </h5>
                                <br>
                                <div class="columsAdornos">
                                    <input type="checkbox" class="btn-check" id="chekAdF21" autocomplete="off">
                                    <label class="labelCheak2 btn btn-outline-primary col-md-12" for="chekAdF21">Dibujo mediano de BobEsponja</label>
                                    <input type="checkbox" class="btn-check" id="chekAdF22" autocomplete="off">
                                    <label class="labelCheak2 btn btn-outline-primary col-md-12" for="chekAdF22">Dibujo grande de Iroman</label>
                                    <input type="checkbox" class="btn-check" id="chekAdF23" autocomplete="off">
                                    <label class="labelCheak2 btn btn-outline-primary col-md-12" for="chekAdF23">Dibujo chico de un Astronauta</label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <h5> 
                                    Pirotecnia
                                    <br>
                                    <br>
                                </h5>
                                <br>
                                <div class="columsAdornos">
                                    <input type="checkbox" class="btn-check" id="chekAdF31" autocomplete="off">
                                    <label class="labelCheak2 btn btn-outline-primary col-md-12" for="chekAdF31">Luces</label>
                                    <input type="checkbox" class="btn-check" id="chekAdF32" autocomplete="off">
                                    <label class="labelCheak2 btn btn-outline-primary col-md-12" for="chekAdF32">Pistola de confeti</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer myFooterModal">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .myFooterModal .btn-primary{
        background-color: var(--color1);
        border:none;
        outline: none;
        color: black;
    }

    .myFooterModal .btn-secondary{
        background-color: var(--color3);
        border:none;
        outline: none;
        color: black;
    }

    h5{
        font-weight: 100;
    }

    .labelCheak{
        margin: 0.4%;
    }

    .labelCheak2{
        margin-bottom: 3%;
    }
    
    .btn-outline-primary{
        color: white;
        border-color: var(--color1);;
    }

    .btn-outline-primary:hover{
        background-color: var(--color1);
        color: black;
    }
    
    .btn-check:active+.btn-outline-primary, .btn-check:checked+.btn-outline-primary, .btn-outline-primary.active, .btn-outline-primary.dropdown-toggle.show, .btn-outline-primary:active{
        background-color: var(--color1);
        color: black;
    }

    .datosCliente .input-group-text{
            background-color: var(--color3);
            color: black;
    }

    .marginTop1{
        margin-top: 1.5%;
    }

    .columsAdornos{
        max-height: 200px;
        overflow-y: auto;
        padding: 3%;
    }

    .columsAdornos .btn-outline-primary{
        color: white;
        border-color: var(--color3);;
    }

    .columsAdornos .btn-outline-primary:hover{
        background-color: var(--color3);
        color: black;
    }
    
    .columsAdornos .btn-check:active+.btn-outline-primary,.columsAdornos .btn-check:checked+.btn-outline-primary,.columsAdornos .btn-outline-primary.active,.columsAdornos .btn-outline-primary.dropdown-toggle.show,.columsAdornos .btn-outline-primary:active{
        background-color: var(--color3);
        color: black;
    }
</style>