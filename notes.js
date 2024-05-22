let notesArray = localStorage.getItem("notes");
notesArray = JSON.parse(notesArray);

//initialize notesArray
if (!notesArray) {
    notesArray = [{"note":"", "dueDate":""}, {"note":"default note", "dueDate":"21-05-24"}];
  }

const addButton = document.getElementById("js-add-notes");

function populateExistingNotes() {

    let htmlNotes = '';

    for (let i=1; i<notesArray.length; i++) {

        htmlNotes +=`<div class="records">${notesArray[i]["note"]}</div>
        <div class="records">${notesArray[i]["dueDate"]}</div>
        <button class="js-delete-button">Delete</button>`
    };

    document.querySelector('.js-notes-populate').innerHTML = htmlNotes;

    const deleteButtons = document.getElementsByClassName("js-delete-button");

    Array.from(deleteButtons).forEach((value, index) => {
      deleteNote(value, index + 1)
    });
    
    localStorage.setItem("notes", JSON.stringify(notesArray)); //to update localstorage in future
}

populateExistingNotes();



function deleteNote(value, index) {
    value.addEventListener("click", () => {
      notesArray.splice(index,1)
      populateExistingNotes()
    });
};


