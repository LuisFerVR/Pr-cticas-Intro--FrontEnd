<template>
    <div>
          <h1>{{ msg }}</h1>
          <ul class="ul"> Pasteles con leche:
            <dt>Pastel de 3 leches $250</dt>
            <dd>con: leche, lechera y mediacrema</dd>
            <dt>Pastel con leche de almendras $350</dt>
            <dd>con: leche de almendras y pan integral</dd>
            <dt>Pastel light $250</dt>
            <dd>con: leche light, chantilly sin azucar y fruta natural</dd>
            <dt>pastel 100% avena $160</dt>
            <dd>con: leche de avena, avena natural</dd>
            <dt>pastel piñon $280</dt>
            <dd>con: leche natural, piñon y chantilly</dd>
          </ul>
      <hr>
          <ul class="ul">Pasteles sin leche:
              <dt>Pastel de fresa $200</dt>
              <dd>Pastel con: jugo y mermelada de fresa</dd>
              <dt>Pastel de zanahoria $150</dt>
              <dd>Pastel con: pan de zanahoria</dd>
              <dt>Pastel de cacahuate $290</dt>
              <dd>Pastel con: cacahuate y pan dulce de vainilla</dd>
          </ul>
          <br>
          <div class="divAdd">
            <h2>Agregar nuevos pasteles al menu:</h2>
             <h4>{{$store.getters.nuevoPastel}}</h4>
            <input type="text" v-model="pastel"> 
            <button @click="addPastel">Agregar pastel</button>
            <ul>
                <li
                  v-for="(pastel, index) in $store.state.pasteles"
                  :key="index">
                  {{pastel}}
                </li>
            </ul>
            <br>
          </div>
          <hr>
    </div>
</template>

<script>
export default {
  name: 'saboresDePastelesPrecios',
  data(){
    return{
      pastel:''
    }
  },
  methods: {
    addPastel() {
      this.$store.state.pastel= this.pastel;
      this.$store.dispatch('addPastelAction');
      this.pastel=''; 
    }
  },
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
    color: rgb(255, 107, 218);
    opacity: .8;
  } 
  .ul dt{
    margin: 0 10px;
    font-size: 80%;
    opacity: 0.8;
    color: black;
  }
  .ul dd{
    margin: 0 10px;
    font-size: 80%;
    opacity: 0.7;
    color: black;
  }
  div{
    text-align: start;
  }

  .divAdd{
    text-align: center;
  }

  h1{
    color: rgb(255, 0, 149);
    margin-left: 75px;
  }
</style>