
let listTask = {}
let currentId = 0;
var toedit;
function addToList() {
    console.log("addToList");

    let value = document.getElementById("myInput").value;
    if(value  != '' && value != null){
    listTask[currentId] = value;
    document.getElementById("tableis").innerHTML += '<tr><td>' + listTask[currentId] + '</td> <td></td><td></td><td><button type="button" name="button" onclick="removeTask(' + currentId +')">Remove</button></td ><td><button type="button" name="button" onclick="update(' + currentId +')">Update</button></td > </tr > ';
    currentId += 1;
    document.getElementById("myInput").value = '';
    }
    else{
        alert("block is empty");
    }
}


function removeTask(id) {
    console.log(id);
    delete(listTask[id]);
    updateList();
}


function updateList() {
    document.getElementById("tableis").innerHTML = "";
    for (const key in listTask) {
        if (listTask.hasOwnProperty(key)) {
            const value = listTask[key];
            document.getElementById("tableis").innerHTML += '<tr><td>' + value + '</td><td></td><td></td> <td> <button  type="button" name="button" onclick="removeTask(' + key +')">Remove</button></td > <td><button type="button" name="button" onclick="update(' + key+')">Update</button></td > </tr > ';
        }
    }
}

function update( id){
    document.getElementById("modal").style.visibility="visible";
    document.getElementById("myinputs").value =listTask[id];
    toedit=id;
}

function CloseModel(){
    console.log("clse");
    document.getElementById("modal").style.visibility="hidden";
}
function OpenModel(){
    console.log("open");

    document.getElementById("modal").style.visibility="Visible";
}
function Edit(){
     let value =document.getElementById("myinputs").value ;
     if(value  != '' && value != null){
     listTask[toedit] = value;
     CloseModel();
     updateList();}
     else{
        alert("block is empty");
     }
}
