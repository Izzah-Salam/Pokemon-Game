const inputEl = document.getElementById("input-btn");
const fetchBtn = document.getElementById("fetch");
const pokemondata = document.getElementsByClassName("main");

fetchBtn.addEventListener("click", () => {
	const pokemonVal = inputEl.value;
	console.log(pokemonVal);
	getPokemonData(pokemonVal);
});

async function getPokemonData(pokemonVal) {
	try {
		const response = await fetch(
			` https://pokeapi.co/api/v2/pokemon/${pokemonVal} `
		);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}

		// fetch pokemon data
		const data = await response.json();
		console.log(data);

		// fetch name
		const PokemonName = data.name;
		const heading = (document.querySelector(".heading").innerHTML =
			PokemonName);

		// fetch img

		const {
			other: {
				dream_world: { front_default: imgPath },
			},
		} = data.sprites;

		const img = (document.querySelector(
			".img"
		).innerHTML = `<img src = "${imgPath}"/>`);

		// fetch ability

		pokemonAbility = data.abilities[0].ability.name;
		const ability = (document.querySelector("#ability").innerHTML =
			pokemonAbility);

		// fetch type

		pokemontype = data.types[0].type.name;
		const type = (document.querySelector("#type").innerHTML = pokemontype);

		// fetch mover
		const pokemonMove = data.moves[0].move.name;
		const move = (document.querySelector("#move").innerHTML = pokemonMove);
	} catch (error) {}
}
