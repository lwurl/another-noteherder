import React from 'react';

class NoteListItem extends React.Component {
    render() {
        return (
            <a>
                <li>
                    <div class="note">
                    <div class="note-title">
                        {this.props.title}
                    </div>
                    <div class="note-body">
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