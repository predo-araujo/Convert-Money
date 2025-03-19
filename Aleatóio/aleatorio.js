let list = document.querySelector("ul")
let myList = ``


menuOptions.forEach(item => {
   myList +=
      `<li class="ocultList">
      <img src=${item.src} alt="Lanche1">
            <p id="Lanche">${item.name}</p>
           <p id="Valor">R$${item.price}</p>
      </li>`
})
list.innerHTML = myList