import styled from 'styled-components';

export const BackGround = styled.div`
    position: absolute;
    top:0;
    left:0;
    z-index: 999;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalContainer = styled.div`
    width:350px;
    height:300px;
    color:var(--primary-brand);
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    position: fixed;
    font-size:25px;
    top:15%;
    border-radius: 8px;
`

export const Heading = styled.span`
    font-weight: 600;
    color:var(--primary-brand);
`

export const P = styled.span`
    margin:0 auto;
    text-align: center;
    color:var(--subtle-text);
    font-size:15px;
`

export const ISockLogo = styled.img``