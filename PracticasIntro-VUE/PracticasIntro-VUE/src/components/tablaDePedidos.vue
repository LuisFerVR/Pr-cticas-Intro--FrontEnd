     <div>
        <h1>{{ msg }}</h1>
        <table>
            <tr>
                <th>nombre del cliente &ensp;</th>
                <th>numero telefonico &ensp;</th>
                <th>correo electronico &ensp;</th>
                <th>Descripcion del pastel a elaborar</th>
            </tr>
            <tr>
                <td>Luis</td>
                <td>7751131</td>
                <td>luis@gmail.com</td>
                <td>Pastel de 3 leches con toppings de nuez y chispas de chocolate(3 cucharadas de cada una)</td>
            </tr>

            <tr>
                <td>Max</td>
                <td>45456545</td>
                <td>max@gnail.com</td>
                <td>Pastel de Avena con toppings de chispas de colores(3 cucharadas)<</td>
            </tr>

            <tr>
                <td>Nando</td>
                <td>5657588</td>
                <td>Nando@gnail.com</td>
                <td>Pastel light</td>
            </tr>

         </table>
    </div>

<script>
export default {
  name: 'tablaDePedidos',
  props: {
    msg: String
  }
}
</script>