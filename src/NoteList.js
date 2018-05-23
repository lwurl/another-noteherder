import React from 'react';
import NoteListItem from './NoteListItem';
import './NoteList.css';

class NoteList extends React.Component {

    render() {
        return (
            <div className="NoteList">
            <h3>Notes</h3>
            <ul id="notes">
                {this.props.listOfNotes.map((info) => <NoteListItem title={info.title} body={info.body}/>)}
            </ul>
            </div>
        );
    }
}

export default NoteList;