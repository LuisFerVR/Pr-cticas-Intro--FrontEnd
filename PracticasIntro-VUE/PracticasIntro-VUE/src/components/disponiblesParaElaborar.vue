<template>
    <div>
        <h1>{{ msg }}</h1>
        <ul>
            <li>2 latas de Lechera</li>
            <li>1 litro de Leche de Almendra</li>
            <li>1/4 de Piñon</li>
            <li>1/2 kg de Fresas</li>
            <li>1kg Avena</li>
            <li>100g de Cacahuates</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'disponiblesParaElaborar',
  props: {
    msg: String
  }
}
</script>

<style scoped>
  ul{
    text-align: start;
    font-size: 25px;
  }
</style>