import React from 'react';

class NoteListItem extends React.Component {
    render() {
        return (
            <a>
                <li
                    onClick={() => this.props.setCurrentNote(this.props.note)}
                >
                    <div className="note">
                    <div className="note-title">
                        {this.props.note.title}
                    </div>
                    <div className="note-body">
                        <p>
                        {this.props.note.body}
                        </p>
                    </div>
                    </div>
                </li>
            </a>
        );
    }
}

export default NoteListItem;