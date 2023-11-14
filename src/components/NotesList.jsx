import React from "react";
import NotesItem from './NotesItem'

function NotesList({ notes, onDelete }) {
    return (
        <div className="notes-list">
            { true ?
                notes.map((note) => (
                    <NotesItem
                        key={note.id}
                        id={note.id}
                        onDelete={onDelete}
                        {...note} />
                )) : "Tidak ada catatan"
            }
        </div>
    )
}


export default NotesList