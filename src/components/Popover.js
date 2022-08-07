import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Popover = ({ onClose }) => {
  const settingsWindowRef = useRef(null);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (!settingsWindowRef.current.contains(e.target)) {
        onClose();
      }
    };

    window.addEventListener("click", pageClickEvent, true);

    return () => {
      window.removeEventListener("click", pageClickEvent, true);
    };
  });

  return <Wrapper ref={settingsWindowRef}>123123</Wrapper>;
};

const Wrapper = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border: 5px solid black;
  right: 0;
  top: 58px;
`;

export default Popover;
