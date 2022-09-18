import {Row,Col} from 'react-bootstrap';
import { Container,P,Heading } from './joinWhiteList';

const JoinWhiteList = () =>{
    return (
        <Container>
            <Row>
                <Col>
                    <Heading>Whitelist</Heading>
                    <P>iSocks NFT will be airdropped to the wallet address you provided on the launch day.</P>
                </Col>
            </Row>
        </Container>
    )
}

export default JoinWhiteList;