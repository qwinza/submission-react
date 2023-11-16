import React from "react";
import NotesItem from './NotesItem'

function NotesList({ notes, onDelete }) {
    return (
        <div className="notes-list">
            {notes.length > 0 ?
                notes.map((note) => (
                    <NotesItem
                        key={note.id}
                        id={note.id}
                        onDelete={onDelete}
                        {...note} />
                )) : <h2 className="notes-list__empty-message">Tidak ada catatan</h2>
            }
        </div>
    )
}


export default NotesList