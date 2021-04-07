//Create a new div element
let divElm=document.createElement("div")
// Get local storage and check if its available
let storage=localStorage.getItem("yourText");
let txtNode;
if (storage == null)
{
    txtNode=document.createTextNode("Insert a Text area here");
}
else
{
    txtNode=document.createTextNode(storage);
}

// append textNode to divElm
divElm.appendChild(txtNode);
divElm.setAttribute("id","Mydiv");
divElm.setAttribute("class","editable");
divElm.setAttribute('style', 'border:2px solid black; width: 300px; margin: 10px; padding:10px;');

//Grab the main container and append divElm to it
let container=document.querySelector(".place");
container.appendChild(divElm);
//Add Click event Listner to the divElm
divElm.addEventListener("click",()=>{
    let notextArea=document.getElementsByClassName("txtEdit").length;
    if (notextArea == 0)
    {
        let html=divElm.innerHTML;
        divElm.innerHTML=`<textarea class="form-control txtEdit" id="txtEdit" rows="3">${html}</textarea>`;
    }
    let txtArea=document.getElementById("txtEdit");
    txtArea.addEventListener("blur",()=>{
    divElm.innerHTML=txtArea.value;
    localStorage.setItem("yourText",txtArea.value);
    });
});





