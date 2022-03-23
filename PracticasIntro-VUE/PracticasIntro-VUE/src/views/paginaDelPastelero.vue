<template>
  <div class="home">
    <img alt="pasteleria logo" src="../assets/Logo2.png">
    <cabeceraPasteleria msg="Bienvenido a la cocina"/>
    <disponiblesParaElaborar msg="Cantidad y sabores o ingredientes disponibles para elaborar"/>
    <toppingsDisponibles msg="cantidad de adornos que le quedan para hacer los pasteles"/>
    <tablaDePedidos msg="Tabla de Pedidos"/>
  </div>
</template>

<script>
// @ is an alias to /src
import cabeceraPasteleria from '@/components/cabeceraPasteleria.vue'
import disponiblesParaElaborar from '@/components/disponiblesParaElaborar.vue'
import toppingsDisponibles from '@/components/toppingsDisponibles.vue'
import tablaDePedidos from '@/components/tablaDePedidos.vue'
export default {
  name: 'paginaDelPastelero',
  components: {
    cabeceraPasteleria,
    disponiblesParaElaborar,
    toppingsDisponibles,
    tablaDePedidos
  }
}
</script>