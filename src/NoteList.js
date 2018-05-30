import React from 'react';
import NoteListItem from './NoteListItem';
import './NoteList.css';

const NoteList = ({ notes }) => {
    return (
        <div className="NoteList">
            <h3>Notes</h3>
            <ul id="notes">
                {notes.map(note => (
                    <NoteListItem
                        key={note.id}
                        note={note}
                    />
                ))}
            </ul>
        </div>
    )
}

export default NoteList;