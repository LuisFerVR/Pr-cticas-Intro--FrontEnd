<template>
    <div>
        <h1>{{ msg }}</h1>
        <h3>sección a elegir:</h3>
        <input type="radio" id="seccion1" name="seccion" value="seccion1">
        <label for="seccion1">con leche</label>
        <input type="radio" id="seccion2" name="seccion" value="seccion2">
        <label for="seccion2">sin leche</label><br>
        <hr>

        <h3>Toppings:</h3>
        <input type="checkbox" name="Toppings" id="nuez">
        <label for="nuez">nuez</label>
        <input type="checkbox" name="Toppings" id="chispas de chocolate">
        <label for="chispas de chocolate">chispas de chocolate</label>
        <input type="checkbox" name="Toppings" id="chispas de colores">
        <label for="chispas de colores">chispas de colores</label>
    </div>
</template>

<script>
export default {
  name: 'combinarAdornos',
  props: {
    msg: String
  }
}
</script>