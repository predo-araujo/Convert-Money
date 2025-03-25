let list = document.querySelector("ul")
let myList = ``
const forEachButton = document.querySelector(".ForEach");
const MapButton = document.querySelector(".Map");
const ReduceButton = document.querySelector(".Reduce");
const FilterButton = document.querySelector(".Filter");
let mapValue = document.querySelector("#Valor")


function showAll(Myarray) {
     let myList = ``
     Myarray.forEach(item => {
          myList +=
               `<li class="ocultList">
      <img src=${item.src} alt="Lanche1">
            <p id="Lanche">${item.name}</p>
           <p id="Valor">R$${item.price}</p>
      </li>`

          list.innerHTML = myList
     })
}

function mapItens() {
     const newPrices = menuOptions.map(item => ({
          ...item,
          price: item.price * 0.9
     }));

     list.innerHTML = myList

     showAll(newPrices)
}

function sumAllItens() {
     myList = ""

     const sum = menuOptions.reduce((acc, atualValue) => acc + atualValue.price, 0);

     list.innerHTML =

          `<li class="ocultList">
               <p id="Lanche">O valor total da sua compra é de R$${sum}</p>
           </li>`

}

function filterItens() {

     const filterResult = menuOptions.filter(item => item.vegan === true);
     showAll(filterResult)
}


forEachButton.addEventListener("click", () => showAll(menuOptions))

MapButton.addEventListener("click", mapItens)

ReduceButton.addEventListener("click", sumAllItens)

FilterButton.addEventListener("click", filterItens)

// //já consigo retornar os valores com desconto agora so
// preciso que quando eu aperte o botao os valores apareçam em tela