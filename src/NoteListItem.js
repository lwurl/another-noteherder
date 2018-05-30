import React from 'react';
import { NavLink } from 'react-router-dom';

const NoteListItem = ({ note }) => {
    return (
        <NavLink to={`/notes/${note.id}`}>
            <li className="NoteListItem">
                <div className="note">
                    <div className="note-title">
                        {note.title}
                    </div>
                    <div className="note-body">
                        <p>
                            {note.body}
                        </p>
                    </div>
                </div>
            </li>
        </NavLink>
    );
}

export default NoteListItem;