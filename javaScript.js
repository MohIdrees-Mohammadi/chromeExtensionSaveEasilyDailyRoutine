


let myLeads = []
const inputEl = document.getElementById('input-el')
const saveBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ulEl')
// Retreving data in array from local storage
const leadFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const DeleteBtn = document.getElementById("deleteBtn")
const tabBtn = document.getElementById("tabBtn")





//Stroing data in local_Storage
// localStorage.setItem("myLeads", "I love you")
// localStorage.getItem("myLeads")
// localStorage.clear()



let listitem = ""

saveBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""

    //SAving data to local_Storage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    render(myLeads)
    //Receiving data from local storage
    // console.log(localStorage.getItem("myLeads"))

})


// Event Listner for Save Tab
tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })

})



function render(myLead) {
    for (let i = 0; i < myLeads.length; i++) {
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
        // listitem += "<li><a href=" + myLeads[i] + "target='blank'>" + myLeads[i] + "</a></li>"

        // using ` to make simplify code's expression like HTML doc
        listitem += `
                    <li>
                        <a href='${myLeads[i]}' target='blank'> ${myLeads[i]} </a>
                    </li>
                    `


        //Another way if storing         
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }
    ulEl.innerHTML = listitem
    listitem = ""

}


// checking whether localStorage contain data or not
if (leadFromLocalStorage) {
    myLeads = leadFromLocalStorage
    render(myLeads)
}

// Event Listener for Deleting local Storage data while double clicked on the delete button
DeleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)

})

// way of getting and storing tab
// const tab = [
//     { url: "https://www.linkedin.com/" }
// ]

