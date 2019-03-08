import React, { useEffect } from "react";
import { connect } from "react-redux";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import Notification from "./components/Notification";
import Filter from "./components/Filter";
import { initializeAnecdotes } from "./reducers/anecdoteReducer";

const App = props => {
  useEffect(() => {
    props.initializeAnecdotes();
    //console.log("effect done");
  }, []);

  //console.log("in App", props);

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <NoteList />
      <NoteForm />
    </div>
  );
};

export default connect(
  null,
  { initializeAnecdotes }
)(App);
