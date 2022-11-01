import styled from "styled-components";

export const Link = styled.a`
    text-align:center;
`

export const Container = styled.div`
    padding: 1rem;
    height: fit-content;
`

export const Heading = styled.h3`
    font-size:28px;
    text-align: center;
    font-weight: ${({fontWeight})  => fontWeight ? fontWeight : ''};
`

export const Span = styled.span`
    font-weight: 400;
`

export const Image = styled.img`
    width:250px;
    height:250px;
    border-radius:8px;
    /* border:2px solid transparent; */
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
`

export const QRContainer = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(3,33%);
    gap:1rem;
    justify-content: center;
    @media screen and (max-width:768px) {
        grid-template-columns: repeat(2,50%);
    }
    @media screen and (max-width:520px) {
        grid-template-columns: auto;
    }
`
export const CodeBox = styled.div`
    display:flex;
    flex-direction: column;
    row-gap:0.3rem;
    align-items: center;
    transition: 0.8s;
    :hover{
        cursor: pointer;
        transform: scale(1.05);
    }
`

export const CodeLabel = styled.span``

export const LinkText = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const LinkHref = styled.a`
    font-weight: 800;
    :hover{
        cursor:pointer;
    }
`