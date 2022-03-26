<template>
  <div class="contenedor marginTop2 row">
    <div class="col-md-5 paddin10 text-center">
      <img src="../../assets/SpaceCake.png" alt="logo" class="imgLogoGrande">
    </div>
    <div class="col-md-7 paddin10 text-center presentaTarget">
      <h1>
          Bienvenidos a SpaceCake
      </h1>
      <p>
        Te damos la bienvenida a la nueva versión de la página, donde encontraras una mejor navegación y manejo de datos, así que da un tour por la página y disfruta de ella.
      </p>
      <p>
        <router-link to="/Menu" class="btnHacerPedido">Realizar pedido</router-link>
        <router-view/>
      </p>  
      <p>
        Gracias por preferir nuestros sabores y adornos de nuestros pasteles.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
};
</script>

<style>
  
</style>

<style>
  .imgLogoGrande{
    width: 50%;
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

  .presentaTarget{
    background-color: #140822;
  }

  .contenedor .presentaTarget{
    color:white;
  }

  .btnHacerPedido{
    width: 20%;
    padding: 1%;
    background-color: #00d100;
    text-decoration: none;
    color:white;
    border-radius: 10px 10px 10px 10px;
  }

  .btnHacerPedido:hover{
    font-weight: 700;
    color:white;
  }
</style>