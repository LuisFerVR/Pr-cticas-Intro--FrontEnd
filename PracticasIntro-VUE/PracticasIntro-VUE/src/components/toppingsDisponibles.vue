<template>
    <div>
        <h1>{{ msg }}</h1>
        <Ul>Toppings disponibles:
          <li>1/4 kg Chispas de chocolate</li>
          <li>1/3 kg Chispas de colores</li>
          <li>1 kg nuez</li>
        </Ul>
    </div>
</template>

<script>
export default {
  name: 'toppingsDisponibles',
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