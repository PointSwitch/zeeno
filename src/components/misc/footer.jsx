import { Container, Row, Col } from "react-bootstrap";

function Footer(){
    return(
        <section style={{backgroundColor:"#202324 !important", height:"200px", display:"flex", alignItems:"center"}}>
            <Container>
                <Row>
                    <Col>
                    © 2022 ZEENO. All Rights Reserved.
                    </Col>
                    <Col>
                    <div style={{display:"flex", justifyContent:"space-around"}}>
                    <a style={{color:"white", textDecoration:"none"}} href="/aboutus">About Us</a>
                    <a>Get into contact</a>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer