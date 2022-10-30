import styled from "styled-components";

export const Container = styled.div`
    padding: 1rem;
    height: ${({height}) => height ? height : ""};
`

export const Heading = styled.h3`
    font-size:28px;
    text-align: center;
    font-weight: ${({fontWeight})  => fontWeight ? fontWeight : ''};
`

export const Text = styled.p`
    text-align: ${({textAlign}) => textAlign ? textAlign : ''};
`

export const TableContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    row-gap:1rem;
    padding:1rem;
    height: fit-content;
`

export const Span = styled.span`
    font-weight: 400;
`

export const Block = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--primary-brand);
    color:#fff;
    width:fit-content;
    padding:1rem;
    transition:0.8s;
    border-radius:8px;
    :hover{
        cursor:pointer;
        transform: scale(1.05);
    }
    @media screen and (max-width:520px){
        font-size:10px;
    }
`

export const TransactionData = styled.span``