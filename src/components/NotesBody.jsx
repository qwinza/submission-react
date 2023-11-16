import React from 'react';
import { showFormattedDate } from '../utils';

function NotesBody({ title, body, createdAt }) {
    return (
        <div className="note-item">
            <div className="note-item__content">
                <h2 className="note-item__title">{title}</h2>
                <p className="note-item__body">{body}</p>
                <p className="note-item__date">{showFormattedDate(createdAt)}</p>
            </div>
        </div>
    );
}

export default NotesBody;