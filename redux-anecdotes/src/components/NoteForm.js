import React from "react";
import { connect } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { changeNotification } from "../reducers/notificationReducer";

const NoteFormi = props => {
  const addNote = async event => {
    const note = event.target.note.value;
    event.target.note.value = "";
    event.preventDefault();

    console.log(note);
    props.createAnecdote(note);

    props.changeNotification(`you added \`${note}\``, 5);
  };

  return (
    <div>
      <h2>add new</h2>
      <form onSubmit={event => addNote(event)}>
        <input name="note" />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {
  changeNotification,
  createAnecdote
};

const NoteForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteFormi);

export default NoteForm;
