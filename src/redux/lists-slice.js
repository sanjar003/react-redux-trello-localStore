import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("lists")
  ? JSON.parse(localStorage.getItem("lists"))
  : [];

const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    addList: (state, action) => {
      state.push({ title: action.payload, cards: [] });
      saveListsToLocalStorage(state);
    },
    addCard: (state, action) => {
      const { listIndex, cardTitle } = action.payload;
      state[listIndex].cards.push({ title: cardTitle });
      saveListsToLocalStorage(state);
    },
    deleteList: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

const saveListsToLocalStorage = (lists) => {
  localStorage.setItem("lists", JSON.stringify(lists));
};

export const { addList, addCard, deleteList, updateListTitle } =
  listsSlice.actions;
export default listsSlice.reducer;
