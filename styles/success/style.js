import styled from "styled-components";

export const Container = styled.div`
    max-width:100%;
    height:80vh;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap:1rem;
    font-size:30px;
    text-align: center;
`

export const Button = styled.a`
    border-radius: 8px;
    border:1px solid var(--primary-brand);
    padding:10px 20px;
    background-color: var(--primary-brand);
    color:#fff;
    font-size:20px;
`