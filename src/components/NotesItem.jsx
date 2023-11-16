import React from 'react';
import NotesBody from './NotesBody';
import DeleteButton from './DeleteButton';

function ContactItem({ title, body, createdAt, id, onDelete }) {
    return (
        <div className="note-item">
            <div className="note-item__content">
                <NotesBody title={title} body={body} createdAt={createdAt} />
                <DeleteButton id={id} onDelete={onDelete} />
            </div>
        </div>
    );
}

export default ContactItem;