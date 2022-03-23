<template>
    <div>
        <h1>{{ msg }}</h1>
        <form action="" id="formulario1">
            <input type="text" name="nombreform" id="nombreform"> <br>
            <label for="nombreform">ingrese su nombre aquí</label> <br>
            
            <input type="tel" name="telefonoform" id="telefonoform" maxlength="10"> <br>
            <label for="telefonoform">digite su numero telefónico</label><br>
            
            <input type="email" name="correoform" id="correoform"><br>
            <label for="correoform">digite su correo</label> <br>
            
            <input type="text" name="descripcionform" id="descripcionform"><br>
            <label for="descripcionform">ingrese su descripcion y especificación de pastel</label><br>

            <input type="submit" value="Submit">
            <input type="reset" name="formulario1">
        </form>
    </div>
</template>

<script>
export default {
  name: 'formularioDeContacto',
 props: {
    msg: String
  }
}
</script>

<style scoped>
  div{
    text-align: start;
  }
</style>