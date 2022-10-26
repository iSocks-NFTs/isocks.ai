import styled from "styled-components";

export const Container = styled.div`
    padding: 1rem 1rem;
    height: 100vh;
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
    width:300px;
    height:300px;
`