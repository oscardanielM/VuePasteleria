<template>
  <nav class="navbar sticky-top  navbar-expand-lg backColor ">
    <div class="container-fluid">
      <router-link to="/Home" class="navbar-brand">Parteleria Vue</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarScroll">
        <ul
          class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item">
            <router-link to="/" class="nav-link">Inicio <i class="fas fa-home"></i></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Menu" class="nav-link">Menu</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Pedido" class="nav-link">Pedidos</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
  nav{
    font-family: 'Fredoka', sans-serif;
  }

  .backColor{
    background-color: #140822;
  }

  .backColor a{
    color: #18F2B2;
  }

  .router-link-active{
    color: white !important;
    font-size: 1.2em;
  }
</style>
