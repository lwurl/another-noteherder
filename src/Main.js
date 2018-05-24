import React from 'react';

import Sidebar from './Sidebar';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

const Rebase = require('re-base');
const firebase = require('firebase');
const app = firebase.initializeApp({
    apiKey: "AIzaSyD_BywNFF9Q3FbPxlKk2WL-ekwpTt523SI",
    authDomain: "noteherder-94eed.firebaseapp.com",
    databaseURL: "https://noteherder-94eed.firebaseio.com",
    projectId: "noteherder-94eed",
    storageBucket: "noteherder-94eed.appspot.com",
    messagingSenderId: "366965344746"
});
const base = Rebase.createClass(app.database());

class Main extends React.Component {
    constructor(){
        super()
        this.state = {
            currentNote: this.blankNote(),
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

    componentDidMount () {
        // if (localStorage.hasOwnProperty('list')){
        //     this.setState({ list: JSON.parse(localStorage.getItem('list'))})
        // }
        // else {
        //     localStorage.setItem('list', JSON.stringify(this.state.list));
        // }
        base.syncState(`notesList`, {
            context: this,
            state: 'list',
            asArray: true
          });
    }

    blankNote = () => {
        return (
            {
                id: null,
                title: '',
                body: '',
            }
        );
    }

    setCurrentNote = (note) => {
        this.setState({ currentNote: note });
    }

    resetCurrentNote = () => {
        this.setCurrentNote(this.blankNote());
    }

    saveNote = (note) => {
        const notes = [...this.state.list];

        if (!note.id){
            // new note
            note.id = Date.now();
            notes.push(note)
        }
        else{
            // note already exists
            const index = notes.findIndex(currentNote => currentNote.id === note.id);
            notes[index] = note;
        }
        this.setState({ list: notes });
        localStorage.setItem('list', JSON.stringify(notes));
        this.setCurrentNote(note);
    }

    deleteNote = (note) => {
        const notes = [...this.state.list];

        const index = notes.findIndex(currentNote => currentNote.id === note.id);
        if (index > -1)
            notes.splice(index, 1);
        this.setState({ list: notes });
        localStorage.setItem('list', JSON.stringify(notes));
        this.resetCurrentNote();
    }
    
    render() {
        return (
            <div 
                className="Main"
                style={style}
            >
                <Sidebar 
                    resetCurrentNote={this.resetCurrentNote}
                />
                <NoteList 
                    setCurrentNote={this.setCurrentNote} 
                    listOfNotes={this.state.list}
                />
                <NoteForm 
                    currentNote={this.state.currentNote} 
                    saveNote={this.saveNote}
                    deleteNote={this.deleteNote}
                />
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