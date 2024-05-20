let notesArray = localStorage.getItem("notes");
notesArray = JSON.parse(notesArray);

//initialize notesArray
if (!notesArray) {
    notesArray = [{"note":"", "dueDate":""}, {"note":"default note", "dueDate":"21-05-24"}];
  }