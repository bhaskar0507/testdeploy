import { useContext } from "react";
import { DarkContext } from "../context/ChangeThemeContext";
import styled from "styled-components";

const ChangeMode = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: ${(props) =>
    props.theme === "Light" ? "#393230" : "#e7e7e7"};
  color: ${(props) =>
    props.theme === "Light" ? "#e7e7e7" : "#393230"};
`;

export const Mode = () => {
  const { theme, handleChange } = useContext(DarkContext);

  return (
    <div>
      <ChangeMode theme={theme}>
        <h1>Click the Button to change to {theme} Mode</h1>
      </ChangeMode>
      <button
        onClick={() => {
          handleChange();
        }}
      >
        Change Theme
      </button>
    </div>
  );
};
