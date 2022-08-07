import React, { useState } from "react";
import styled from "styled-components";
import Popover from "./Popover";

const NavBar = () => {
  const [isPopperShown, setIsPopperShown] = useState(false);
  const onOpenerClick = (e) => {
    e.stopPropagation();
    setIsPopperShown(!isPopperShown);
  };

  const onClose = () => {
    setIsPopperShown(false);
  };
  return (
    <div>
      <Opener onClick={onOpenerClick}>Opener</Opener>
      {isPopperShown && (
        <Popover onClose={onClose}>
          <Popper>Popper</Popper>
        </Popover>
      )}
    </div>
  );
};

const Opener = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 150px;
  height: 50px;
  background-color: #fbd14b;
  font-size: 20px;
  border-radius: 5px;
`;

const Popper = styled.div`
  width: 200px;
  height: 150px;
  background-color: #fffcf0;
  padding: 20px;
  color: black;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

export default NavBar;
