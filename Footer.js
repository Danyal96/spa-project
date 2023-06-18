import { Col, Container, Row } from "react-bootstrap"
import './Footer.css'

function Footer(){
    return(
        <footer>
            <Container>
            <Row>
                <Col>
                    <h2>رسالت وب سایت</h2>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                </Col>
                <Col style={{textAlign:"left"}}>
                    <img src="https://cdn.zarinpal.com/badges/trustLogo/1.svg" alt="" />
                </Col>
            </Row>
        </Container>
        </footer>
    )
}

export default Footer