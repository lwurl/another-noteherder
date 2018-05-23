import React from 'react';
import NoteListItem from './NoteListItem';
import './NoteList.css';

class NoteList extends React.Component {

    render() {
        return (
            <div className="NoteList">
            <h3>Notes</h3>
            <ul id="notes">
                {this.props.listOfNotes.map((info) => 
                    <NoteListItem 
                        setCurrentNote={this.props.setCurrentNote} 
                        note={info} 
                        key={info.id}/>)}
            </ul>
            </div>
        );
    }
}

export default NoteList;