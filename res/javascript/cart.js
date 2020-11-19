let code=document.getElementsByClassName("prod")
let prix=document.getElementsByClassName("prix")
let quantite=document.getElementsByClassName("quant")
let btnPlus=document.getElementsByClassName("btn-plus")
let btnMoin=document.getElementsByClassName("btn-minus")
let ref=document.getElementsByClassName('desig')
let add=document.getElementsByClassName("btn-add")
let img=document.getElementsByClassName("image-p")
console.log(img) 

for (let i = 0; i<btnPlus.length; i++){
    btnPlus[i].addEventListener("click", plus)
     function plus(){
       
       quantite[i].value++
       
        
     }
    
    }
 for (let i = 0; i<btnMoin.length; i++){
    btnMoin[i].addEventListener("click", moin)
          function moin(){
            if (quantite[i].value>0){
            quantite[i].value--
        }
          }
          }
         

          
          //add to cart
        
          for (let i = 0; i<add.length; i++){
            add[i].addEventListener("click", addtocart)
             function addtocart(){
               if (quantite[i].value!=0){

              
              const panier=document.querySelector('.pan')
              const list = document.createElement("div")
              list.className="list"
              const line = document.createElement("div")
              line.className="line-prod" 
              line.style.display="flex"
              line .style.flexDirection="row"
              const del = document.createElement("button")
              del.className="btn-delete"
              const codP = document.createElement("h5")
              const quP = document.createElement("h5")
              const prixP = document.createElement("h5")
              const montant = document.createElement("h5")
              montant.className="mont"
              const imgP =document.createElement("img")
             
             imgP.src=img[i].src
             quP.innerHTML=quantite[i].value
               codP.innerHTML =code[i].innerHTML
             
               prixP.innerHTML=prix[i].innerHTML
            let a=quantite[i].value*(prix[i].innerHTML)
                montant.innerHTML=a
             del.innerHTML="delete"
                line.appendChild(imgP)
                line.appendChild(quP)
               line.appendChild(codP)
               line.appendChild(prixP)
               line.appendChild(montant)
               line.appendChild(del)
               list.appendChild(line)
               panier.appendChild(list)
              
            
           
           
          }else{
            alert("quantité manquante")
          }
               
               }  
             }  



             let btnAff=document.getElementById('btn-panier')
             let b=document.getElementsByClassName('list')

          btnAff.addEventListener("click",afficher)
          function afficher(){
list.style.display="block"
          }


