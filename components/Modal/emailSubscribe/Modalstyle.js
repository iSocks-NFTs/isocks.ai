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
    width:580px;
    height:480px;
    color:var(--primary-brand);
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    position: fixed;
    font-size:25px;
    top:15%;
    border-radius: 5px;
`

export const ISockLogo = styled.img``