import styled from "styled-components";

export const Container = styled.div`    
    height: auto;
    max-width: 100%;
    background-color: #fff;
    background-image: url('/img/roadmap/background.png') no-repeat;
    border:1px solid #fff;
    padding:2.5rem 0;
    @media screen and (max-width:768px) {
        padding:2.5rem 0;
    }
`

export const Heading = styled.h3`
    font-family: "Nunito Sans";
    text-align:center;
    font-weight: 600;
    font-size:35px;
    margin-bottom:-0.1rem;
    @media screen and (max-width:768px) {
        font-size:25px;
    }
`

export const ComingSoonGrid = styled.div`
    display: flex;  
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
    column-gap:1rem;
`

export const Stage = styled.img`
    @media screen and (max-width:768px) {
        width:20%;
        height:auto;
    }
`

export const Text = styled.span`
    color:var(--subtle-text);
`