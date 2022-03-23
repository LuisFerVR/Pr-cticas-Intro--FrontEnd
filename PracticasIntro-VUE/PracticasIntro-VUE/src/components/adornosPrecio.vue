<template>
    <div>
        <h1>{{ msg }}</h1>
        <ul class="ul">
            <dt>nuez</dt>
            <dd>$15 por cucharada</dd>
            <dt>chispas de chocolate</dt>
            <dd>$10 por cucharada </dd>
            <dt>chispas de colores</dt>
            <dd>$5 por cucharada</dd>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'adornosPrecio',
 props: {
    msg: String
  }
}
</script>

<style scoped>
   ul {
    list-style-type: none;
    padding: 0;
    font-size: 150%;
    font-weight: 700;
    color: chocolate;
  } 

  .ul dt{
    margin: 0 10px;
    font-size: 100%;
    opacity: 0.9;
    
  }
  .ul dd{
    margin: 0 10px;
    font-size: 80%;
    opacity: 0.7;
    color: black;
  }

  h1{
    color: chocolate;
  }
</style>