import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  row-gap: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: rgb(34, 193, 195);
  background: linear-gradient(
    140deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
  color: var(--primary-brand);
  align-items: center;
`;

export const ChatLayout = styled.div`
  width: 280px;
  height: 80vh;
  max-height: 500px;
  z-index: 2;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  border-radius: 8px;
  @media screen and (min-width: 720px) {
    width: 45%;
  }
`;

export const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  column-gap: 0.4rem;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  border-radius: 8px 8px 0 0px;
  background-color: rgb(222, 226, 230);
  .community_name {
    font-weight: bold;
  }
  .tag {
    font-size: 12px;
    display: flex;
    flex-direction: column;
  }
  .members {
    width: 160px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Img = styled.img`
  width: 35px;
  height: 35px;
`;

export const ChatScreen = styled.div`
  height: 65vh;
  width: 100%;
  ::-webkit-scrollbar {
    width: 0.5em;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
  overflow-y: scroll;
`;

export const Message = styled.div`
  .recieved{

  }

  .sent{

  }
`

export const MessageList = styled.div`
  height:fit-content;
`

export const InputForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  height: 50px;
`;

export const Input = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  width: 100%;
  font-size: 15px;
  color: var(--primary-brand);
`;

export const SendButton = styled.button`
  font-size: 15px;
  outline: none;
  border-radius: 3px;
  border: none;
  padding: 5px 10px;
  background: rgb(34, 193, 195);
  :hover {
    cursor: pointer;
  }
`;

export const NoMoreMessages = styled.p`
  text-align: center;
  font-size: 12px;
  color: var(--subtle-text);
`;
