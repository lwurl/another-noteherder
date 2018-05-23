import React from 'react';
import NoteListItem from './NoteListItem';
import './NoteList.css';

class NoteList extends React.Component {
    constructor(){
        super()
        this.state = {
            list: [
                {
                    title: 'Note 1',
                    body: 'Body of the 1st note',
                },
                {
                    title: 'Note 2',
                    body: 'Body of the second note',
                }
            ]
        }
    }

    render() {
        return (
            <div class="NoteList">
            <h3>Notes</h3>
            <ul id="notes">
                {this.state.list.map((info) => <NoteListItem title={info.title} body={info.body}/>)}
            </ul>
            </div>
        );
    }
}

export default NoteList;