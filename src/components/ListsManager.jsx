import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addList, addCard, deleteList } from "../redux/lists-slice";
import styled from "styled-components";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ListsModal from "./ListsModal";
import CardModal from "./CardModal";

const ListsManager = () => {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists);
  const [newListTitle, setNewListTitle] = useState("");
  const [newCardTitles, setNewCardTitles] = useState(
    new Array(lists.length).fill("")
  );
  const [showAddListInput, setShowAddListInput] = useState(false);
  const [showAddCardInputs, setShowAddCardInputs] = useState(
    new Array(lists.length).fill(false)
  );
  const [isModalClose, setIsModalClose] = useState(false);
  const [selectedListIndex, setSelectedListIndex] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const addListButtonText =
    lists.length > 0 ? "Добавить еще одну колонку" : "Добавить список";

  useEffect(() => {
    const savedLists = JSON.parse(localStorage.getItem("lists"));
    if (savedLists && savedLists.length > 0 && lists.length === 0) {
      savedLists.forEach((list) => {
        dispatch(addList(list.title));
        if (list.cards) {
          list.cards.forEach((card) => {
            dispatch(
              addCard({ listIndex: lists.length - 1, cardTitle: card.title })
            );
          });
        }
      });
    }
  }, [dispatch, lists]);

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  const handleAddListClick = () => {
    if (newListTitle.trim() !== "") {
      dispatch(addList(newListTitle));
      setNewListTitle("");
      setShowAddListInput(false);
    }
  };

  const handleAddCardClick = (listIndex) => {
    if (newCardTitles[listIndex].trim() !== "") {
      dispatch(addCard({ listIndex, cardTitle: newCardTitles[listIndex] }));
      const updatedCardTitles = [...newCardTitles];
      updatedCardTitles[listIndex] = "";
      setNewCardTitles(updatedCardTitles);
      setShowAddCardInputs((prev) => {
        const updated = [...prev];
        updated[listIndex] = false;
        return updated;
      });
    }
  };

  const openModal = (listIndex) => {
    setSelectedListIndex(listIndex);
    setIsModalClose(true);
  };

  const handleArchiveList = () => {
    if (selectedListIndex !== null) {
      const updatedLists = [...lists];
      updatedLists.splice(selectedListIndex, 1);
      if (lists[selectedListIndex]) {
        dispatch(deleteList(selectedListIndex));
      }

      setIsModalClose(false);
      setSelectedListIndex(null);
    }
  };

  const handleCardAdded = (listIndex) => {
    setShowAddCardInputs((prev) => {
      const updated = [...prev];
      updated[listIndex] = true;
      return updated;
    });
    setIsModalClose(false);
  };

  const openCardModal = (listIndex, cardIndex) => {
    setSelectedCard({ listIndex, cardIndex });
  };

  const closeCardModal = () => {
    setSelectedCard(null);
  };

  return (
    <Container>
      {lists.map((list, listIndex) => (
        <List key={listIndex}>
          <main>
            <h2>{list.title}</h2>
            <MoreHorizIcon
              style={{ color: "#9eacba" }}
              onClick={() => openModal(listIndex)}
            />
          </main>

          <Cards>
            {list.cards.map((card, cardIndex) => (
              <Card
                key={cardIndex}
                onClick={() => openCardModal(listIndex, cardIndex)}
              >
                {card.title}
              </Card>
            ))}
            {showAddCardInputs[listIndex] && (
              <CardInput>
                <input
                  type="text"
                  placeholder="Ввести заголовок для этой карточки"
                  value={newCardTitles[listIndex]}
                  onChange={(e) => {
                    const updatedCardTitles = [...newCardTitles];
                    updatedCardTitles[listIndex] = e.target.value;
                    setNewCardTitles(updatedCardTitles);
                  }}
                />
                <div>
                  <Button onClick={() => handleAddCardClick(listIndex)}>
                    Добавить карточку
                  </Button>
                  <span
                    onClick={() =>
                      setShowAddCardInputs((prev) => {
                        const updated = [...prev];
                        updated[listIndex] = false;
                        return updated;
                      })
                    }
                  >
                    ✖
                  </span>
                </div>
              </CardInput>
            )}
          </Cards>
          <NewButton onClick={() => handleCardAdded(listIndex)}>
            <span>+</span>
            Добавить карточку
          </NewButton>
          {isModalClose && (
            <ListsModal
              closeModal={() => setIsModalClose(false)}
              handleArchiveList={handleArchiveList}
              handleCardAdded={() => handleCardAdded(listIndex)}
            />
          )}

          {selectedCard !== null && (
            <CardModal
              cardTitle={
                lists[selectedCard.listIndex].cards[selectedCard.cardIndex]
                  .title
              }
              listTitle={lists[selectedCard.listIndex].title}
              closeModal={closeCardModal}
            />
          )}
        </List>
      ))}
      {showAddListInput ? (
        <ListInput>
          <input
            type="text"
            placeholder="Ввести заголовок списка"
            value={newListTitle}
            onChange={(e) => setNewListTitle(e.target.value)}
          />
          <div>
            <Button onClick={handleAddListClick}>Добавить список</Button>
            <span onClick={() => setShowAddListInput(false)}>✖</span>
          </div>
        </ListInput>
      ) : (
        <AddListButton onClick={() => setShowAddListInput(true)}>
          <span>+</span>
          {addListButtonText}
        </AddListButton>
      )}
    </Container>
  );
};
const Container = styled("div")`
  display: flex;
  width: 100%;
  height: 86.8%;
  padding: 1rem;
  overflow-x: auto;
`;
const List = styled("div")`
  background-color: #101204;
  margin-right: 16px;
  height: max-content;
  min-width: 300px;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  & main {
    display: flex;
    justify-content: space-between;
  }
  & * {
    cursor: pointer;
  }
  h2 {
    font-size: 18px;
    color: #b5c1ce;
    margin-bottom: 8px;
    margin-left: 10px;
  }
`;
const Cards = styled("div")`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Card = styled("div")`
  background-color: #22272b;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 4px;
  color: #b5c1ce;
  &:hover {
    background-color: #2b3136;
  }
`;
const ListInput = styled("div")`
  background-color: #101204;
  margin-right: 16px;
  min-width: 300px;
  height: 100px;
  border-radius: 8px;
  padding: 8px;
  transform: 3s;
  div {
    display: flex;
    align-items: center;
    margin-top: 18px;
  }
  & input {
    width: 100%;
    padding: 6px 10px;
    padding-left: 15px;
    border-radius: 3px;
    border: 1px solid #636567;
    background-color: #22272b;
    color: #b5b5b5;
    font-size: 15px;
    &:focus {
      outline: 1.6px solid #4c9aff;
      border: 1.5px solid #4c9aff;
    }
    &::placeholder {
      color: #b5b5b5;
      font-size: 15px;
    }
  }
  & span {
    font-size: 25px;
    color: #8b9aaa;
    margin-left: 10px;
    cursor: pointer;
  }
`;
const CardInput = styled("div")`
  background-color: #22272b;
  border-radius: 3px;
  padding: 6px;
  margin-bottom: 4px;
  input {
    width: 100%;
    padding: 6px;
    border: none;
    border-radius: 3px;
    margin-bottom: 4px;
    color: #a8b3bf;
    background-color: #22272b;
    &::placeholder {
      color: #a8b3bf;
    }
    &:focus {
      outline: 1.6px solid #22272b;
      border: 1.5px solid #22272b;
    }
  }
  & span {
    font-size: 25px;
    color: #8b9aaa;
    margin-left: 10px;
  }
  div {
    display: flex;
    gap: 1rem;
  }
`;
const AddListButton = styled("button")`
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  gap: 10px;
  height: 3rem;
  font-size: 14px;
  color: #f9f6f3;
  border: none;
  border-radius: 10px;
  padding: 0px 40px;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  & span {
    font-size: 25px;
  }
`;
const Button = styled("button")`
  padding: 8px 10px;
  border-radius: 4px;
  background-color: #579dff;
  color: #1d2125;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #75b0ff;
  }
`;
const NewButton = styled("button")`
  background-color: #101204;
  border: none;
  color: #919eaa;
  display: flex;
  align-items: center;
  border-radius: 8px;
  font-size: 15px;
  gap: 10px;
  margin-top: 5px;
  &:hover {
    background-color: #373c42;
  }
  & span {
    font-size: 25px;
  }
`;
export default ListsManager;
