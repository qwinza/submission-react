import React from 'react';

function NotesBody({ title, body, createAt, archived }) {
    return (
        <div className="note-item">
            <div className="note-item__content">
                <h2 className="note-item__title">{title}</h2>
                <p className="note-item__body">{body}</p>
                <p className="note-app__username">{createAt}</p>
            </div>
        </div>
    );
}

export default NotesBody;