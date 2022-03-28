import { createStore } from 'vuex'

export default createStore({

  //Estados, es la informacion que se esta trabajando, ejemplo algunas variables
  state: {
    precios : {
      sabores : [
        {
          nombre:"Tres leches",
          precio:"500"
        },
        {
          nombre:"Vainilla",
          precio:"150"
        },
        {
          nombre:"Chocolate",
          precio:"150"
        },
        {
          nombre:"Zarzamora",
          precio:"550"
        },
        {
          nombre:"Moka",
          precio:"350"
        },
        {
          nombre:"Café",
          precio:"350"
        },
        {
          nombre:"Galleta",
          precio:"300"
        },
        {
          nombre:"Natural",
          precio:"100"
        }
      ],
      TipoAdorno1 :[
        {
          nombre:"Letrero de Happy Birthday",
          precio:"150"
        },
        {
          nombre:"Letrero de felicidades",
          precio:"150"
        },
        {
          nombre:"Letrero de aniversario",
          precio:"150"
        },
        {
          nombre:"Velas con numero",
          precio:"150"
        }
      ],
      TipoAdorno2:[
        {
          nombre:"Dibujo mediano de BobEsponja",
          precio:"150"
        },
        {
          nombre:"Dibujo grande de Iroman",
          precio:"250"
        },
        {
          nombre:"Dibujo chico de un Astronauta",
          precio:"50"
        },
      ],
      TipoAdorno3:[
        
        {
          nombre:"Luces",
          precio:"150"
        },
        {
          nombre:"Pistola de confeti",
          precio:"50"
        },
      ]
    },
    pedidosP: [],
    pedidosR: [],
    txtNombre : "",
    txtTelefono : "",
    txtCorreo : "",
    checkboxSabores : [],
    adorno1 : [],
    adorno2 : [],
    adorno3 : []
  },
  //Ayuda a entrar a la informacion del estado o de las variables 
  getters: {
    totalPedido(state){
      var vartotalPedido = 0;
      state.checkboxSabores.forEach((value, index) => {
        vartotalPedido += parseFloat(state.precios.sabores.find(element => element.nombre == value).precio)
      })
      state.adorno1.forEach((value, index) => {
        vartotalPedido += parseFloat(state.precios.TipoAdorno1.find(element => element.nombre == value).precio)
      })
      state.adorno2.forEach((value, index) => {
        vartotalPedido += parseFloat(state.precios.TipoAdorno2.find(element => element.nombre == value).precio)
      })
      state.adorno3.forEach((value, index) => {
        vartotalPedido += parseFloat(state.precios.TipoAdorno3.find(element => element.nombre == value).precio)
      })

      return vartotalPedido
      
    }
  },
  //Modificaciones a los estados como las variables por ejemplo, solo dentre el mismo
  mutations: {
    levantarPedido(state, {nombre, telefono, correo, sabores, adorno1, adorno2, adorno3}){
      state.txtNombre = nombre
      state.txtTelefono = telefono
      state.txtCorreo = correo
      state.checkboxSabores = sabores
      state.adorno1 = adorno1
      state.adorno2 = adorno2
      state.adorno3 = adorno3
    },
    limpiaDatos(state) {
      state.txtNombre = ""
      state.txtTelefono = ""
      state.txtCorreo = ""
      state.checkboxSabores = []
      state.adorno1 = []
      state.adorno2 = []
      state.adorno3 = []
    },
    agregaNuevoPedido(state) {
      var newPedido = {
        nombre : state.txtNombre,
        telefono : state.txtTelefono,
        correo : state.txtCorreo,
        checkboxSabores : state.checkboxSabores,
        adorno1 : state.adorno1,
        adorno2 : state.adorno2,
        adorno3 : state.adorno3,
        
      }
      console.log(newPedido)
      state.pedidosP.push(newPedido)
      console.log(state.pedidosP)
    }
  },
  //Sirve para hacer modificaciones con codigo asincrono
  actions: {
  },
  //Sirve solo para mostrar modulos con condiciones
  modules: {
  }
})
