import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  min-height:100vh;
`;

export const Heading = styled.h3`
  font-size: 28px;
  text-align: center;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "")};
  padding-bottom:${({paddingBottom}) => (paddingBottom ? paddingBottom : "")};
`;

export const Text = styled.p`
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "")};
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  padding: 1rem;
  height: fit-content;
`;

export const Span = styled.span`
  font-weight: 400;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--primary-brand);
  color: #fff;
  width: fit-content;
  padding: 1rem;
  transition: 0.8s;
  border-radius: 8px;
  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
  @media screen and (max-width: 520px) {
    font-size: 10px;
  }
`;

export const TransactionData = styled.span``;

export const Pill = styled.span`
  width: ${({ width }) => (width ? width : "")};
  height: ${({ height }) => (height ? height : "")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "13px")};
  background-color: var(--primary-brand);
  color: #fff;
  padding: 10px;
  border-radius: 8px;
`;

export const Link = styled.a`
  display: flex;
  flex-direction: column;
`;
