import React from 'react';
import './NoteForm.css';

const NoteForm = (props) => {
    const handleChanges = (ev) => {
        const note = { ...props.currentNote };
        note[ev.target.name] = ev.target.value;
        props.saveNote(note)
    }

    const deleteNote = () => {
        props.deleteNote(props.currentNote);
    }

    return (
        <div className="NoteForm" style={styles.noteForm}>
            <div className="form-actions" style={styles.formActions}>
                <button type="button" style={styles.button}>
                    <i
                        className="fa fa-trash-o"
                        style={styles.iButton}
                        onClick={deleteNote}
                    ></i>
                </button>
            </div>
            <form style={styles.form}>
                <p>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title your note"
                        value={props.currentNote.title}
                        onChange={handleChanges}
                    />
                </p>

                <textarea
                    name="body"
                    style={styles.textArea}
                    value={props.currentNote.body}
                    onChange={handleChanges}
                ></textarea>
            </form>
        </div>
    );
}

const styles = {
    noteForm: {
        msFlexPositive: '1',
        flexGrow: '1',
        padding: '0 3rem',
    },
    formActions: {
        paddingTop: '1rem',
        marginLeft: '-2rem',
        display: '-ms-flexbox flex',
        msFlexLinePack: 'center',
        alignContent: 'center',
    },
    button: {
        border: 'none',
        background: 'none',
        padding: '0',
    },
    iButton: {
        color: '#999',
        fontSize: '2rem',
        margin: '0',
    },
    form: {
        margin: '0 auto',
        maxWidth: '80rem',
    },
    textArea: {
        borderColor: '#eee',
        width: '100%',
        height: 'calc(100vh - 140px)',
        fontSize: '1.3em',
    }
}

export default NoteForm;