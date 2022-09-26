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
    width:650px;
    height:auto;
    color:var(--primary-brand);
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    font-size:25px;
    top:15%;
    border-radius: 5px;
    @media screen and (max-width:520px) {
        width:360px;
    }
    :hover{
        cursor: pointer;
    }
`

export const ComingSoonVideo = styled.video`
    width:${(props) => props.width ? props.width : "100%"};
    height:${(props) => props.height ? props.height: "100%"};
    border-radius:5px;
`

export const Source = styled.source`
`