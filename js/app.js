// JapaScript excercises
shownotes();

// Code to add notes
let addBtn=document.getElementById('addNote');
addBtn.addEventListener("click",function(e){
    let notes=localStorage.getItem("notes");
    if(notes ==null)
    {
     notesarray=[];
    }
    else
    {
        // need to understand the parse function
     notesarray=JSON.parse(notes);  
    }
  
    let addtxt=document.getElementById("addTxt");
    let addtitle=document.getElementById("title");
    let notesobj={
      title:title.value,
      description:addtxt.value
    };
    notesarray.push(notesobj);
    localStorage.setItem("notes", JSON.stringify(notesarray));
    addtxt.value="";
    title.value="";
    // console.log(notesobj);
    shownotes();
});

// Function to show elements from local storage

function shownotes()
{
    let notes=localStorage.getItem("notes");
    if(notes ==null)
    {
      notesarray=[];
    }
    else
    {
      notesarray=JSON.parse(notes);  
    }
    let html="";
    notesarray.forEach((element,index)=>{
        html+=`<div class="noteCard card m-2" style="width: 15rem; color:black">
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.description}</p>
            <button id=${index} type="button" onclick="deleteNotes(this.id)" class="btn btn-primary">Delet Note</a>
        </div>
    </div>`;
    });
    let notesElm=document.getElementById("notes");
    if(notesarray.length != 0)
    {
        notesElm.innerHTML=html;
    }
    else
    {
        notesElm.innerHTML=`Nothing to show you! add notes using above section`;
    }

}

// Function to delete note
function deleteNotes(index)
{
    // console.log(`You are deleting Me: ${index}`);
    let notes=localStorage.getItem("notes");
    if(notes ==null)
    {
      notesarray=[];
    }
    else
    {
      notesarray=JSON.parse(notes);  
    }
    notesarray.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesarray));
    shownotes();
}

// Search Functionality in Web Page

let searchText=document.getElementById("Search");
searchText.addEventListener("input",function(){
let searchValue=searchText.value.toLowerCase();
let noteCards=document.getElementsByClassName("noteCard");
Array.from(noteCards).forEach(function(element){
let cardText=element.getElementsByTagName("p")[0].innerText.toLowerCase();
if(cardText.includes(searchValue))
{
  element.style.display="block";
}
else
{
  element.style.display="none";
}
});
});


