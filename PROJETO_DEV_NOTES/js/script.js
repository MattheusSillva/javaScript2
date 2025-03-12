// Elementos
const notesContainer = document.querySelector("#notes-container");

const noteInput = document.querySelector("#note-content");

const addNoteBtn = document.querySelector(".add-note")

// Funcoes
function showNotes() {
    getNotes().forEach((note) => {
        const noteElement = createNote(note.id, note.conteudo, note.fixed)

        notesContainer.appendChild(noteElement);
    })
}

function addNote() {
    const notes = getNotes();

    const noteObject = {
        id: generateId(),
        conteudo: noteInput.value,
        fixed: false
    }

    const noteElement = createNote(noteObject.id, noteObject.conteudo);

    notesContainer.append(noteElement);

    notes.push(noteObject);

    saveNotes(notes);

    noteInput.value = "";
}

function generateId() {
    return Math.floor(Math.random() * 5000);
}

function createNote(id, content, fixed){
    const element = document.createElement("div");

    element.classList.add("note");

    const textArea = document.createElement("textarea");

    textArea.value = content;

    textArea.placeholder = "Adicione algum texto";

    element.appendChild(textArea);

    const pinIcon = document.createElement("i");

    pinIcon.classList.add(...["bi", "bi-pin"]);

    element.appendChild(pinIcon);

    if(fixed) {
        element.classList.add("fixed");
    }

    // Eventos do elemento
    element.querySelector(".bi-pin").addEventListener("click", () => {
        toggleFixedNotes(id);
    })

    return element;
}

function toggleFixedNotes(id) {
    const notes = getNotes()

    const targetNote = notes.filter((note) => note.id === id)[0];

    targetNote.fixed = !targetNote.fixed;

    saveNotes(notes);
}

// Local Storage
function getNotes() {
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");

    return notes;
}

function saveNotes(notes) {
    localStorage.setItem("notes", JSON.stringify(notes));
}

// Eventos
addNoteBtn.addEventListener("click", () => { 
    addNote() 
})

// Inicializacão
showNotes()