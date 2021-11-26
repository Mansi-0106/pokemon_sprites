const container = document.querySelector('#container');

const baseurl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"


for (let i = 1; i < 101; i++) {
  const pokemon=  document.createElement('div');
  pokemon.classList.add('pokemon');
  const label=document.createElement("span");
  label.innerText=`#${i}`;
    const newimg = document.createElement('img');
    newimg.src = `${baseurl}${i}.png`
    pokemon.appendChild(newimg);
    pokemon.appendChild(label);
    container.appendChild(pokemon)

}
