import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap:0.5rem;
  margin:1rem 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
`;

export const ProductSlide = styled.div`
  border: 1px solid lemonchiffon;
  width: 100%;
  display: grid;
  grid-template-columns: auto;
`;

export const OutLineButton = styled.button`
  border-radius: 32px;
  border: none;
  padding: 15px 50px;
  width: 165px;
  background-color: #fff;
  border:1px solid #e1e1e1;
  color: var(--primary-brand);
  transition:0.5s;
  :hover {
    cursor: pointer;
    color:#fff;
    background-color: var(--primary-brand);
  }
`;

export const FilledButton = styled.button`
  background-color: var(--primary-brand);
  border-radius: 32px;
  border: 1px solid var(--primary-brand);
  padding: 15px 40px;
  border-color: #e1e1e1;
  color: #fff;
  transition: 0.5s;
  width:350px;
  :hover {
    cursor: pointer;
    border:1px solid #e1e1e1;
    background-color:#fff;
    color:var(--primary-brand);
  }
`;

export const ProductCard = styled.div``;

export const ProductDescription = styled.span``;