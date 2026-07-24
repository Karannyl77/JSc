const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "batman", "flash"];
//marvel_heros.push(dc_heros)

//console.log(marvel_heros);
final_heros = marvel_heros.concat(dc_heros);
//console.log(final_heros);

const final_heros1 = [...marvel_heros, ...dc_heros];
console.log(final_heros);



console.log(Array.isArray(marvel_heros)); // checks if the variable is an array or not. It returns true or false.


