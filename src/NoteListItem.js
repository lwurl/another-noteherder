import React from 'react';

class NoteListItem extends React.Component {
    render() {
        return (
            <a>
                <li>
                    <div className="note">
                    <div className="note-title">
                        {this.props.title}
                    </div>
                    <div className="note-body">
                        <p>
                        {this.props.body}
                        </p>
                    </div>
                    </div>
                </li>
            </a>
        );
    }
}

export default NoteListItem;