import {Container} from '../style';

export async function getServerSideProps(context) {
    return {
      props: {data}, // will be passed to the page component as props
    }
  }

const Table = ({data}) =>{
    return(
        <Container>

        </Container>
    )
}

export default Table;