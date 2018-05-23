import React from 'react';

import Sidebar from './Sidebar';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

class Main extends React.Component {
    constructor(){
        super()
        this.state = {
            currentNote: {
                id: null,
                title: '',
                body: '',
            },
            list: [
                {
                    id: 1,
                    title: 'Note 1',
                    body: 'Body of the 1st note',
                },
                {
                    id: 2,
                    title: 'Note 2',
                    body: 'Body of the second note',
                },
                {
                    id: 3,
                    title: 'Title of a note',
                    body: 'This is the body of the note',
                }
            ]
        }
    }

    setCurrentNote = (note) => {
        this.setState({ currentNote: note });
    }
    
    render() {
        return (
            <div 
                className="Main"
                style={style}
            >
                <Sidebar />
                <NoteList setCurrentNote={this.setCurrentNote} listOfNotes={this.state.list}/>
                <NoteForm currentNote={this.state.currentNote}/>
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