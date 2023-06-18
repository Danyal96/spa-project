import { Col, Container, Row } from "react-bootstrap";
import MyNavbar from "../../components/navbar/Navbar";
import ProgImage from "../../assets/images/progeraming.svg";
import CourseItem from "../../components/course/CourseItem";
import { useState } from "react";
import Footer from "../../components/footer/Footer";
import {DataItem} from '../../components/data/data'

function Home() {

    let[courses, setCourses]=useState(DataItem)

  return (
    <>
      <MyNavbar />
      <Container fluid="md">
        <Row className="my-5 align-items-center">
          <Col lg={6}>
            <h1>برنامه نویسی زیبا</h1>
            <p style={{ textAlign: "justify" }}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </Col>
          <Col lg={6} className="py-4">
            <img src={ProgImage} className="img-fluid" alt="" />
          </Col>
        </Row>

        <Row className="my-5">
            <h2 className="py-4">دوره های آموزشی</h2>

           {courses.map(course => (
            <Col className="py-3" md={6} lg={4} xl={3} key={course.id}>
                <CourseItem {...course} />
            </Col>
           ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
