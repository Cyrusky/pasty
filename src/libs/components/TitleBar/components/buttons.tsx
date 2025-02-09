import { maximize, minimize } from "@/libs/components/TitleBar/utils.ts";
import { FC } from "react";

import WindowsMinimizeIcon from "@/assets/icons/windows/minimize.svg";
import WindowsMaximizeIcon from "@/assets/icons/windows/maximize.svg";
import WindowsCloseIcon from "@/assets/icons/windows/close.svg";
import styled from "styled-components";

const ButtonsContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding-right: 12px;
  column-gap: 5px;
`;

const Button = styled.div`
  height: 100%;
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background: rgba(101, 101, 101, 0.22);
  }
`;

export const WindowButtons: FC = () => {
  return (
    <ButtonsContainer>
      <Button onClick={minimize}>
        <img src={WindowsMinimizeIcon} alt="minimize" />
      </Button>
      <Button onClick={maximize}>
        <img src={WindowsMaximizeIcon} alt="maximize" />
      </Button>
      <Button onClick={close}>
        <img src={WindowsCloseIcon} alt="close" />
      </Button>
    </ButtonsContainer>
  );
};
