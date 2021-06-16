var list = document.getElementById("list-item")
function add(){
    var add = document.getElementById("input")
    var li = document.createElement("li")
    var text = document.createTextNode(add.value)
    li.appendChild(text)
    add.value = "";
    list.appendChild(li)
    li.setAttribute("class" , "list")



    var dltbtn = document.createElement("button")
    var dltText = document.createTextNode("Delete")
    dltbtn.appendChild(dltText)
    li.appendChild(dltbtn)
    dltbtn.setAttribute("onclick" , "deleteLi(this)")
    dltbtn.setAttribute("class" , "dlt")



    var editbtn = document.createElement("button")
    var editText = document.createTextNode("Edit")
    editbtn.appendChild(editText)
    li.appendChild(editbtn)
    editbtn.setAttribute("onclick" , "editLi(this)")
    editbtn.setAttribute("class" , "edit")
}

function deleteLi(a){
    a.parentNode.remove()
}

function editLi(e){
    var ubdValue = prompt("Enter Undated value", e.parentNode.firstChild.nodeValue )
    e.parentNode.firstChild.nodeValue = ubdValue
}
function del(){
    list.innerHTML = ""
}