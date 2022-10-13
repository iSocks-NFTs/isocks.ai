import styled from "styled-components";

const Container = styled.div`
    display:flex;
    flex-direction: row;
    column-gap:0.5rem;
    hr{
        width:140px;
        height: 1px;
    }
`

const Divider = () =>{
    return( 
        <Container>
            <hr/>
            Or
            <hr/>    
        </Container>
    )
}

export default Divider;