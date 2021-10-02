import { useContext } from "react";
import { DarkMode } from "../context/DarkModeContext";
import styled from "styled-components";

const Change = styled.div`
  height: 95vh;
  background: ${(props) => (props.theme === "light" ? "#292e33" : "#dfdfdf")};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  color: ${(props) => (props.theme === "Light" ? "#393230" : "#e7e7e7")};
`;

export const ChangeMode = () => {
  const { theme, handlethemechange } = useContext(DarkMode);

  return (
    <div>
      <button
        onClick={() => {
          handlethemechange();
        }}
      >
        Change Theme
      </button>
      <Change theme={theme}>
        <h1>Enter to {theme} Mode</h1>
        <img
          src={
            theme === "light"
              ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkItWJflHhk3nnysbiBmhvG-8Kahi7prWTdA&usqp=CAU"
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0J9D2SA4ci6rtOq0ylZHh9cfFEK9eDY3bDg&usqp=CAU"
          }
          alt="img"
        />
        <h1>Enter to {theme} Mode</h1>
      </Change>
    </div>
  );
};
