// Your code here
const table = document.getElementById("table")


const makeRow = () => {
    const row = document.createElement("tr")
    for (let i = 0; i < 21; i++){
        const td = document.createElement("td");
        row.appendChild(td)
    }
    table.appendChild(row)
}

const addRow = document.getElementById("add-row")

addRow.addEventListener("click", makeRow)

const colorize = (event) => {
    const color = document.getElementById("select").value
    if (event.target.className === "table"){
        return
    }
        if (event.target.className === color){
            event.target.className = "grey"
        } else if (event.target.className !== color){
            event.target.className = color
        } else {
            event.target.className = color
        }
}


table.addEventListener("click", colorize)

