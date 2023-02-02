const inputButton = document.getElementById("input-btn");
let myLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

//data persist. When you reload the page, the data doesn't disappear
localStorage.getItem("myLeads", "www.examplelead.com");
console.log(localStorage.getItem("myLeads"));

//no need for onClick attribute on html
inputButton.addEventListener("click", function () {
  if (!(inputEl.value === "")) {
    myLeads.push(inputEl.value);
    renderLeads();
    inputEl.value = "";

    localStorage.setItem("myLeads", JSON.stringify(myLeads))
  }
});



function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
    <li>
    <a target="_blank" href="${myLeads[i]}">${myLeads[i]}</a>
    </li>`;
  }
  console.log(listItems);
  ulEl.innerHTML = listItems;
}
