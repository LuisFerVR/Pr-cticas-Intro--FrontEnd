<template>
        <div>
        <br>
        <h2>Información de Cakexya</h2>
        <p>DIRECCIÓN: Avd Juarez,Zempoala,HGO</p> <br>
        <p>Teléfono:77415524342</p> <br>
        <ul> Horarios:
            <li>lunes-viernes: 8:00 - 21:00 </li>
            <li>Sabado: 10:00 A.m - 18:00 p.m</li>
            <li>Domingo: Sin servicio</li>
        </ul>
        </div>
</template>    

<script>
export default {
  name: 'informacionPasteleria',
  props: {
    msg: String
  }
}
</script>

<style scoped>
    div{
        font-family: fantasy;
        align-content: space-between;
    }
</style>