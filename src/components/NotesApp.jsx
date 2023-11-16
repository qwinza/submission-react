import React from "react";
import NotesInput from './NotesInput';
import NotesList from './NotesList';

import { getInitialData, showFormattedDate } from '../utils/index';

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            Date: showFormattedDate()
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onAddNotesHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: new Date().toISOString()
                    }
                ]
            }
        });
    }

    render() {
        return (
            <>
                <div className="note-app__header">
                    <h1>Notes App</h1>
                </div>
                <div className="note-app__body">
                    <h1>Create Notes</h1>
                    <h2>Add Note</h2>
                </div>
                <NotesInput addNotes={this.onAddNotesHandler} />
                <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} />
            </>
        );
    }
}

export default NotesApp;