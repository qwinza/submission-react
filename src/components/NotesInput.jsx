import React from "react";

class NotesInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            createdAt: '',
            archived: ''
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onDateChangeEventHandler = this.onDateChangeEventHandler.bind(this)
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onDateChangeEventHandler(event) {
        this.setState(() => {
            return {
                date: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNotes(this.state);
    }

    render() {
        return (
            <form className='note-input' onSubmit={this.onSubmitEventHandler}>
                <input className="note-input__title" type="text" placeholder="Judul" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                <textarea className="note-input__body" placeholder="Deskripsi" value={this.state.body.substring(0,150)} onChange={this.onBodyChangeEventHandler} />
                <p value={this.state.createdAt} onChange={this.onDateChangeEventHandler} />
                <button className="btn-add" type="submit">Tambah Note</button>
            </form>
        )
    }
}

export default NotesInput;