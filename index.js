let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {  
    myLeads.push(inputEl.value)
    inputBtn.value = ""
    renderLeads()
})


function renderLeads(){

    let listItems = ""
    for ( let i = 0; i <MediaElementAudioSourceNode.length; i++){
        listItems += "<li>" + myLeads[i] + "</li>"
    }
    ulEl.innerHTML = listItems
}

//Use createElement() and append() instead of innerHTML
// const li = document.createElement("li")
// li.textContent = myLeads[i]
// ulEl.append(li)