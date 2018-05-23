import React from 'react';

import Sidebar from './Sidebar';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

class Main extends React.Component {
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
                },
                {
                    title: 'Title of a note',
                    body: 'This is the body of the note',
                }
            ]
        }
    }
    
    render() {
        return (
            <div 
                className="Main"
                style={style}
            >
                <Sidebar />
                <NoteList listOfNotes={this.state.list}/>
                <NoteForm />
            </div>
        );
    }
}

const style = {
    display: 'flex',
    height: '100vh',
    alignItems: 'stretch',
}

export default Main;