let btnEditar = document.getElementById("editarProducto");
let btnBorrar = document.getElementById("borrarProducto");


btnEditar.addEventListener("click", editarProducto);
btnBorrar.addEventListener("click", borrarProducto);

alert("conectado")

function editarProducto(producto) {
    



}

function borrarProducto(e) {
    
    let id = document.getElementById("codigo").value;
    let button = e.target;
    let divRemove = button.parentNode;
    let li = divRemove.parentNode;

    li.removeChild(divRemove);
    console.log("elemento borrado");

    return new Promise(function borrarJson(){
        let xhr=new XMLHttpRequest();
        xhr.open('DELETE',"src/app/json/products.json"+id,true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send();
    })
      
}