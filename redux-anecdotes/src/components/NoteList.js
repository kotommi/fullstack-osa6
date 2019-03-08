import React from "react";
import { connect } from "react-redux";
import { addLike } from "../reducers/anecdoteReducer";
import { changeNotification } from "../reducers/notificationReducer";

const Notes = props => {
  const vote = note => {
    props.addLike(note);
    props.changeNotification(`you voted \`${note.content}\``, 5);
  };

  if (!props.anecdotes) {
    //console.log("null");
    return <div />;
  }

  return (
    <div>
      {props.anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const anecdotesToShow = ({ anecdotes, filter }) => {
  if (filter === "" || anecdotes === undefined || anecdotes === []) {
    //console.log("hey we in filter function", anecdotes);
    return anecdotes;
  }
  return anecdotes.filter(note => note.content.includes(filter));
};

const mapStateToProps = state => {
  //console.log("mapstatetoprops", state);
  return {
    anecdotes: anecdotesToShow(state)
  };
};

const mapDispatchToProps = {
  addLike,
  changeNotification
};

const NoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notes);

export default NoteList;
