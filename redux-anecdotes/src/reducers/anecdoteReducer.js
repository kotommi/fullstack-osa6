import anecdoteService from "../services/anecdotes";

const getId = () => (100000 * Math.random()).toFixed(0);

export const asObject = anecdote => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  };
};

const reducer = (state = [], action) => {
  //console.log("state now: ", state);
  //console.log("action", action);
  switch (action.type) {
    case "ADD_LIKE":
      const likedNote = action.data;
      return sorted(
        state.map(note => {
          return note.id !== likedNote.id ? note : likedNote;
        })
      );
    case "ADD_NOTE":
      //console.log("data", action.data)
      const newNote = action.data;
      return sorted(state.concat(newNote));
    case "INIT_NOTES":
      //console.log("init with", action.data);
      return sorted(action.data);
    default:
      return sorted(state);
  }
};

export const initializeAnecdotes = () => {
  return async dispatch => {
    const notes = await anecdoteService.getAll();
    //console.log("res", notes);
    dispatch({
      type: "INIT_NOTES",
      data: notes
    });
  };
};

export const createAnecdote = content => {
  return async dispatch => {
    const newNote = await anecdoteService.createNew(content);
    dispatch({
      type: "ADD_NOTE",
      data: newNote
    });
  };
};

const sorted = notes => {
  return notes.sort((a, b) => b.votes - a.votes);
};

export const addLike = anecdote => {
  return async dispatch => {
    const likedAnecdote = await anecdoteService.addLike(anecdote);
    dispatch({
      type: "ADD_LIKE",
      data: likedAnecdote
    });
  };
};

export default reducer;
