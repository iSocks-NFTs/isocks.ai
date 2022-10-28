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
    width:${({width}) => width ? width : "380px"};
    height:${({height}) => height ? height : "380px"};
    color:var(--primary-brand);
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    position: fixed;
    font-size:30px;
    top:15%;
    border-radius: 5px;
    @media screen and (max-width:768px){
        width:${({mdWidth}) => mdWidth ? mdWidth : "700px"};
        height:${({mdHeight}) => mdHeight ? mdHeight : "700px"}
    }
    @media screen and (max-width:480px){
        width: ${({mbWidth}) => mbWidth ? mbWidth : "450px"};
        height: ${({mbHeight}) => mbHeight ? mbHeight : "450px"};
    }
`

export const ISockLogo = styled.img``