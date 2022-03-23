<template>
    <div>
        <h1>{{ msg }}</h1>
        <input type="checkbox" name="personalizacion" id="3 leches">
        <label for="3 leches">tipo 3 leches</label><br>
        <input type="checkbox" name="personalizacion" id="tipo leche almendras">
        <label for="tipo leche almendras">tipo leche de almendras</label><br>
        <input type="checkbox" name="personalizacion" id="light">
        <label for="light">tipo light</label><br>
        <input type="checkbox" name="personalizacion" id="avena">
        <label for="avena">tipo avena</label><br>
        <input type="checkbox" name="personalizacion" id="piñon">
        <label for="piñon">tipo piñon</label><br>
        <input type="checkbox" name="personalizacion" id="fresa">
        <label for="fresa">tipo fresa</label><br>
        <input type="checkbox" name="zanahoria" id="zanahoria">
        <label for="zanahoria">tipo zanahoria</label> <br>
        <input type="checkbox" name="personalizacion" id="cacahuate">
        <label for="cacahuate">tipo cacahuate</label>
    </div>
</template>

<script>
export default {
  name: 'combinarSabores',
 props: {
    msg: String
  }
}
</script>