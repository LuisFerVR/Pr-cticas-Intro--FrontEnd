<template>
  <div class="home">
    <img alt="pasteleria logo" src="../assets/Logo2.png">
    <cabeceraPasteleria msg="Bienvenido a la pasteleria"/>
    <saboresDePastelesPrecios msg="Pasteles: " />
    <!-- <p>{{$store.getters.nuevoPastel}} prueba de que sirven los getters desde la visualizacion -->
    <adornosPrecio msg="Toppings: " />
    <combinarSabores msg="Seleccione su favorito y haga su perzonalizacion " />
    <combinarAdornos msg="Seleccione su favorito " />
    <formularioDeContacto msg="Datos del cliente " />
    <informacionPasteleria msg="Información: " />
  </div>
</template>

<script>
// @ is an alias to /src
import cabeceraPasteleria from '@/components/cabeceraPasteleria.vue'
import saboresDePastelesPrecios from '@/components/saboresDePastelesPrecios.vue'
import adornosPrecio from '@/components/adornosPrecio.vue'
import combinarSabores from '@/components/combinarSabores.vue'
import combinarAdornos from '@/components/combinarAdornos.vue'
import formularioDeContacto from '@/components/formularioDeContacto.vue'
import informacionPasteleria from '@/components/informacionPasteleria.vue'
export default {
  name: 'pasteleriaMenu',
  components: {
    cabeceraPasteleria,
    saboresDePastelesPrecios,
    adornosPrecio,
    combinarSabores,
    combinarAdornos,
    formularioDeContacto,
    informacionPasteleria
  }
}
</script>