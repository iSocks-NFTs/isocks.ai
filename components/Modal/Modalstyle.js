import styled from "styled-components";

export const BackGround = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  position: relative;
  width: ${({ width }) => (width ? width : "380px")};
  height: ${({ height }) => (height ? height : "380px")};
  color: var(--primary-brand);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  position: fixed;
  font-size: 30px;
  top: 15%;
  border-radius: 5px;
  z-index: 999;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
  row-gap: ${(rowGap) => (rowGap ? rowGap : "")};
  box-shadow: 3px 3px -15px 40px #f5f5f5;
  @media screen and (max-width: 768px) {
    width: ${({ mdWidth }) => (mdWidth ? mdWidth : "700px")};
    height: ${({ mdHeight }) => (mdHeight ? mdHeight : "700px")};
  }
  @media screen and (max-width: 480px) {
    width: ${({ mbWidth }) => (mbWidth ? mbWidth : "450px")};
    height: ${({ mbHeight }) => (mbHeight ? mbHeight : "450px")};
  }
`;

export const ISockLogo = styled.img``;

export const CloseIcon = styled.div`
  position: absolute;
  top:-0.5rem;
  right:-0.5rem;
  cursor:pointer;
  svg{
    transform:scale(1.5)
  }
`;
