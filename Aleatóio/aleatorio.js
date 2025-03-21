let list = document.querySelector("ul")
let myList = ``
const forEachButton = document.querySelector(".ForEach");
const MapButton = document.querySelector(".Map");
const ReduceButton = document.querySelector(".Reduce");
const FilterButton = document.querySelector(".Filter");
let mapValue = document.querySelector("#Valor")

menuOptions.forEach(item => {
   myList +=
      `<li class="ocultList">
      <img src=${item.src} alt="Lanche1">
            <p id="Lanche">${item.name}</p>
           <p id="Valor">R$${item.price}</p>
      </li>`
})

function mapItens () {
     menuOptions.map(item => ({
     ...item,
     price: item.price*0.9 
     }));

     
}


forEachButton.addEventListener ("click", function ForEachFunc () {
     list.innerHTML = myList});

MapButton.addEventListener ("click", function mapItens (){
});


// //já consigo retornar os valores com desconto agora so
// preciso que quando eu aperte o botao os valores apareçam em tela