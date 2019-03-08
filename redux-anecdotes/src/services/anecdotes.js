import axios from "axios";
import { asObject } from "../reducers/anecdoteReducer";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async content => {
  const object = asObject(content);
  const response = await axios.post(baseUrl, object);
  //console.log(response.data);
  return response.data;
};

const addLike = async anecdote => {
  const likedAnecdote = {
    ...anecdote,
    votes: anecdote.votes + 1
  };
  const response = await axios.put(`${baseUrl}/${anecdote.id}`, likedAnecdote);
  //console.log(response);
  return response.data;
};

export default { getAll, createNew, addLike };
