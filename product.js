async function getallproducts(){
   var produts=await fetch("https://fakestoreapi.com/products",{
    method:"GET"
})

var data=await produts.json()
let studentlist=""
for(let p of data){
    studentlist=studentlist+` <div class="card" style="width: 250px; height="200px" margin="50px" >

  <img src="${p.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${p.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${p.price} </li>
  
  </ul>

</div>`

}

 document.getElementById("produts_space").innerHTML=studentlist



}

getallproducts()
