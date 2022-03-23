<template>
    <div>
        <h1>Pasteleria Cakexya</h1>
        <h1>{{ msg }}</h1>
        <h3>Bienvenidos a esta galaxya</h3>
    </div>
</template>

<script>
export default {
  name: 'cabeceraPasteleria',
  props: {
    msg: String
  }
}
</script>