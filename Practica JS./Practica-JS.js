const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeinput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeinput}`;
    fetch(url).then((res)=>{
        //console.log(res);
        if(res.status!="200"){
            console.log(res);
            pokeImge("./pokesad.gif");
            const tipo = document.getElementById("pokeTip");
            tipo.textContent = (`No encontramos su pokemon`)
            const iD=document.getElementById("id");
            iD.innerHTML = (`No encontrado`);
            const movimiento = document.getElementById("movimientoV");
            movimiento.innerHTML = (`No encontramos su pokemon`);

        }else{
            return res.json();
        }
    }).then((data)=>{
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImge(pokeImg);

        let movimientoV = data.moves.map(move => move.move.name);
        console.log(movimientoV);
        pokeMovimiento(movimientoV);

        //bueno para uno solo
        /* let pokeTip =  data.types[0].type.name;
        console.log(pokeTip);
        pokeTipo(pokeTip); */
        let pokeTip =  data.types.map(type=>type.type.name);
        console.log(pokeTip);
        pokeTipo(pokeTip);

        let id = data.id;
        console.log(id);
        ide(id);

         //Estadisticas base--------------------------- let movimientos = data.moves.map(mov => mov.move.name); Console.log(movimientos);
        // let est=data.stats;
         //let hp=est[0].base_stat;    let attack=est[1].base_stat;    let defense=est[2].base_stat;    let spattack=est[3].base_stat;    let spdefense=est[4].base_stat;    let speed=est[5].base_stat;
 
        // graphicstats(hp,attack,defense,spattack,spdefense,speed);
 
    })
}
fetchPokemon();

//function imprimir(){
   // const pokeName = document.getElementById("pokeName");
   // let pokeinput = pokeName.value;
    //console.log("hola "+pokeinput) 
//}

function pokeImge(url){
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}
    //prueba de funcion img pokeImge("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png")

    function pokeTipo(pokeTip){
       const tipo = document.getElementById("pokeTip");
        tipo.textContent = (`El tipo de pokemon es: ${pokeTip} `);
    } 

      function ide(id){
        const iD=document.getElementById("id");
        iD.innerHTML = (`su id es: ${id} `);
    }

    function pokeMovimiento(movimientoV){
    const movimiento = document.getElementById("movimientoV");
    movimiento.innerHTML = (`sus movimientos son: ${movimientoV} `)
    }