import ReactDOM from "react-dom";
import { styled } from "styled-components";
import Logout from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../redux/modal-slice";
import LogoutModal from "./LogoutModal";
import { useNavigate } from "react-router-dom";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PeopleAltIcons from "@mui/icons-material/PeopleAlt";
import ExpandMore from "@mui/icons-material/ExpandMore";
import RocketLaunchOutlined from "@mui/icons-material/RocketLaunchOutlined";
import Bolt from "@mui/icons-material/Bolt";
import FilterList from "@mui/icons-material/FilterList";
import PersonAddOutlined from "@mui/icons-material/PersonAddOutlined";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import ListsManager from "./ListsManager";

const Lists = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isModalOpen = useSelector((state) => state.modal.isOpen);

  const handleLogout = () => {
    dispatch(openModal());
  };
  const handleConfirmLogout = () => {
    navigate("/login");
    dispatch(closeModal());
  };

  const handleCancelLogout = () => {
    dispatch(closeModal());
  };

  return (
    <Container>
      <Header>
        <div>
          <IconsStyled src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAnElEQVR4nO2YSw7CMAwFe7xW3LHuAfJ6Afs0hXsYISFWtGRFCJ2RvHyWovwmGQYAgJ/E5JdZfjNFvq3i12WNqUWmikdwt+mreWwtMlV8bPqsFpkqGICYgWQJWdebuHR+jC5rTIfNS2wmH1tkAL6BIXOBzBkyp55vYvEeSGZAyJwjc3BaDJkLZM5QCSFziY3qtDpd+JlLfuYA4P+5AxTpg08LWBnlAAAAAElFTkSuQmCC" />
          <main>
            <IconsStyled
              style={{ width: "20px" }}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABM0lEQVR4nO2ZUYoCMQyGc5D1RCoeSgTPINtcoBGfdCcVd73Squ/KoCguajpDoR33/yFPQ9N8pH+nMyWCIKiV2K9HLLp1Eg4s4ZgznISDE/1h0WEjCCc6zV08P4XSSYNO5C+YX8H4amCDiG5zF8pW+PAdA7LvAMguAqSAQsWO1iDO63I2X328Gls/Zwkrq4gUuagtiDXxdfyi6lkgKXJRW5CYia0cKXMRQBoIHXkgLC2G2W+CRx4IHmF45CZ4pGseeZtDI9fH80XVsyCc16/SQfJ9WBFAAjrCWFoEj9wJu5Zg+/2H75FZwh90WUE4wfmoFJBjSUEAkc51RIu/6HESfk2Q8+1p4SA+bGI6MsxdKBvxOV/3TZBLVyYFd2McBXGF8dWgvj0twzO6r5dTdCcgCKK/OgEQzBlWz+melgAAAABJRU5ErkJggg=="
            />
            <h2>Trello</h2>
          </main>
          <main>
            <span>Рабочие пространства</span>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAo0lEQVR4nO2Uuw6DMAxF8xOt4NM7OJU6ErO2spdKdILC0g79HJA7IYSAvDYfKUoW36M7OMYoiqKkApAbQO5vNZ1jsyQDHA8W6bUvdtRZ5NE6/sbIZVYy/lnI7b64up8A6SMD4Ph3qR+lr3SZca2eRdCgjzxYGiOPlobIk0l95MmlR+TZpFvy7NLV3ZR79k7x4Wwyb5m96WpzpLec7E0VRVHMggnV2whonEUnJgAAAABJRU5ErkJggg=="
              alt="icon"
            />
          </main>
          <main>
            <span>Недавние</span>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAo0lEQVR4nO2Uuw6DMAxF8xOt4NM7OJU6ErO2spdKdILC0g79HJA7IYSAvDYfKUoW36M7OMYoiqKkApAbQO5vNZ1jsyQDHA8W6bUvdtRZ5NE6/sbIZVYy/lnI7b64up8A6SMD4Ph3qR+lr3SZca2eRdCgjzxYGiOPlobIk0l95MmlR+TZpFvy7NLV3ZR79k7x4Wwyb5m96WpzpLec7E0VRVHMggnV2whonEUnJgAAAABJRU5ErkJggg=="
              alt="icon"
            />
          </main>
          <main>
            <span>В избранном</span>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAo0lEQVR4nO2Uuw6DMAxF8xOt4NM7OJU6ErO2spdKdILC0g79HJA7IYSAvDYfKUoW36M7OMYoiqKkApAbQO5vNZ1jsyQDHA8W6bUvdtRZ5NE6/sbIZVYy/lnI7b64up8A6SMD4Ph3qR+lr3SZca2eRdCgjzxYGiOPlobIk0l95MmlR+TZpFvy7NLV3ZR79k7x4Wwyb5m96WpzpLec7E0VRVHMggnV2whonEUnJgAAAABJRU5ErkJggg=="
              alt="icon"
            />
          </main>
          <main>
            <span>Шаблоны</span>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAo0lEQVR4nO2Uuw6DMAxF8xOt4NM7OJU6ErO2spdKdILC0g79HJA7IYSAvDYfKUoW36M7OMYoiqKkApAbQO5vNZ1jsyQDHA8W6bUvdtRZ5NE6/sbIZVYy/lnI7b64up8A6SMD4Ph3qR+lr3SZca2eRdCgjzxYGiOPlobIk0l95MmlR+TZpFvy7NLV3ZR79k7x4Wwyb5m96WpzpLec7E0VRVHMggnV2whonEUnJgAAAABJRU5ErkJggg=="
              alt="icon"
            />
          </main>
          <button>Создать</button>
        </div>
        <div>
          <input type="text" placeholder="Поиск" />
          <NewIconsStyled
            src="https://img.icons8.com/fluency/48/000000/test-account.png"
            alt="test-account"
          />
          <Logout style={{ color: "#9eacba" }} onClick={handleLogout}>
            LOG OUT
          </Logout>
        </div>
      </Header>
      {/*  */}
      <TransparentHeader>
        <div>
          <h3>Redux-Toolkit practice</h3>
          <StarBorderIcon fontSize="small" style={{ color: "#ffffff" }} />
          <PeopleAltIcons fontSize="small" style={{ color: "#ffffff" }} />
          <Button>по доскe</Button>
          <ExpandMore fontSize="medium" style={{ color: "#ffffff" }} />
        </div>
        <main>
          <RocketLaunchOutlined fontSize="small" style={{ color: "#ffffff" }} />
          <Bolt style={{ color: "#ffffff" }} />
          <button>
            <FilterList />
            Фильтр
          </button>
          <Button>
            <PersonAddOutlined fontSize="small" />
            Поделиться
          </Button>
          <MoreHoriz style={{ color: "#ffffff", cursor: "pointer" }} />
        </main>
      </TransparentHeader>
      <ListsManager/>
      {isModalOpen &&
        ReactDOM.createPortal(
          <LogoutModal
            onLogoutConfirmed={handleConfirmLogout}
            onLogoutCancelled={handleCancelLogout}
          />,
          document.getElementById("logout-modal")
        )}
    </Container>
  );
};

export default Lists;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-image: url("https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/e9434c62b9b40657bdbbc9b876020e31/photo-1683481951374-1d62b42afaba.jpg");
  background-blend-mode: multiply;
  background-position: center;
`;
const Header = styled.header`
  width: 100%;
  height: 3rem;
  background-color: #1d2125;
  border-bottom: 1px solid #2f353a;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
  & * {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    & input {
      padding: 6px 10px;
      padding-left: 15px;
      border-radius: 5px;
      border: 1px solid #636567;
      background-color: #22272b;
      color: #b5b5b5;
      cursor: auto;
      font-size: 15px;
      &::placeholder {
        color: #b5b5b5;
        font-size: 15px;
      }
    }
  }
`;
const IconsStyled = styled.img`
  width: 25px;
  height: 25px;
  &:hover {
    background-color: #3e454c;
  }
`;
const NewIconsStyled = styled.img`
  width: 32px;
  height: 32px;
`;
const TransparentHeader = styled.header`
  width: 100%;
  height: 3.5rem;
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  padding: 0rem 2rem;
  justify-content: space-between;
  & main {
    display: flex;
    align-items: center;
    gap: 1rem;
    &button {
      display: flex;
      align-items: center;
      padding: 6px 15px;
      border-radius: 5px;
      gap: 10px;
      border: none;
      color: #ffffff;
      background: none;
      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
  }
  & div {
    display: flex;
    align-items: center;
    gap: 1rem;
    &h3{
      color: #ffffff;
    }
  }
`;
const Button = styled.button`
  padding: 7px 12px;
  background-color: #dfe1e6;
  border-radius: 4px;
  border: none;
  color: #485873;
  cursor: pointer;
  &:hover {
    background-color: #ffffff;
  }
`;
