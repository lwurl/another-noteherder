import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Sidebar from './Sidebar';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import base from './base';

class Main extends React.Component {
    constructor() {
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

    componentDidMount() {
        base.syncState(`notes/${this.props.uid}`, {
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

        if (!note.id) {
            // new note
            note.id = Date.now();
            notes.push(note)
        }
        else {
            // note already exists
            const index = notes.findIndex(currentNote => currentNote.id === note.id);
            notes[index] = note;
        }
        this.setState({ list: notes });
        this.setCurrentNote(note);
    }

    deleteNote = (note) => {
        const notes = [...this.state.list];

        const index = notes.findIndex(currentNote => currentNote.id === note.id);
        if (index > -1)
            notes.splice(index, 1);
        this.setState({ list: notes });
        this.resetCurrentNote();
    }

    render() {
        const formProps = {
            currentNote: this.state.currentNote,
            saveNote: this.saveNote,
            removeCurrentNote: this.removeCurrentNote,
        }
        return (
            <div
                className="Main"
                style={style}
            >
                <Sidebar
                    resetCurrentNote={this.resetCurrentNote}
                    signOut={this.props.signOut}
                />
                <NoteList
                    setCurrentNote={this.setCurrentNote}
                    listOfNotes={this.state.list}
                />
                <Switch>
                    <Route
                        path="/notes/:id"
                        render={navProps => (
                            <NoteForm
                                {...formProps}
                                {...navProps}
                            />
                        )}
                    />
                    <Route
                        render={navProps => (
                            <NoteForm
                                {...formProps}
                                {...navProps}
                            />
                        )}
                    />
                </Switch>
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