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
        let shouldRedirect = false
        const notes = [...this.state.list]
    
        if (note.id) {
          // existing note
          const i = notes.findIndex(currentNote => currentNote.id === note.id)
          notes[i] = note
        } else {
          // new note
          note.id = Date.now()
          notes.push(note)
          shouldRedirect = true
        }
    
        this.setState(
          { list: notes },
          () => {
            if (shouldRedirect) {
              this.props.history.push(`/notes/${note.id}`)
            }
          }
        )
      }

      removeNote = (currentNote) => {
        const notes = [...this.state.list]
        const i = notes.findIndex(note => note.id === currentNote.id)
    
        if (i > -1) {
          notes.splice(i, 1)
          this.setState({ list: notes })
          this.props.history.push('/notes')
        }
      }

    render() {
        const formProps = {
            //currentNote: this.state.currentNote,
            notes: this.state.list,
            saveNote: this.saveNote,
            removeNote: this.removeNote,
        }
        return (
            <div
                className="Main"
                style={style}
            >
                <Sidebar signOut={this.props.signOut} />
                <NoteList notes={this.state.list} />
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