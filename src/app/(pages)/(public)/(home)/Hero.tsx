'use client';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import Typist from 'react-text-typist';
import Image from 'next/image';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import IconifyIcon from '@/components/wrappers/IconifyIcon';

const SwiperSlider = () => {
  const images = [
    '/assets/images/hero/saas1.jpg',
    '/assets/images/hero/saas2.jpg',
    '/assets/images/hero/saas3.jpg',
  ];

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      spaceBetween={30}
      loop
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx}>
          <div className="swiper-slide-content">
            <Image
              src={img}
              alt={`SaaS Hero ${idx + 1}`}
              width={712}
              height={471}
              className="img-fluid"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const Hero = () => {
  return (
    <section className="position-relative hero-13 overflow-hidden pt-7 pt-lg-6 pb-5">
      <Container>
        <Row className="align-items-center text-center text-sm-start">
          <Col lg={6}>
            <div className="mb-lg-0">
              <Image
                src="/assets/images/logo.png"
                alt="Prompt Logo"
                width={150}
                height={50}
                className="logo-text mb-4"
              />
              <h1 className="hero-title">
                A modern look and feel for your&nbsp;
                <Typist
                  className="highlight highlight-success d-inline-block"
                  sentences={['saas', 'mobile app', 'software', 'startup', 'agency', 'portfolio', 'coworking', 'crypto', 'marketing']}
                  typingSpeed={1500}
                  deletingSpeed={700}
                  showCursor={false}
                  startDelay={100}
                  cursorSmooth
                  pauseTime={2500}
                />
              </h1>
              <p className="fs-18 text-muted pt-3">
                Make your website or web application stand out with high-quality landing pages designed and developed by professionals.
              </p>
              <div className="pt-3 pt-sm-5 mb-4 mb-lg-0">
                <a href="#demos" className="btn btn-primary" data-toggle="smooth-scroll">
                  View Demos
                  <IconifyIcon style={{ height: 16, width: 16 }} className="ms-2 icon icon-xxs" icon="lucide:arrow-down" />
                </a>
                <Link href="/" className="btn btn-link text-primary fw-semibold ms-2">
                  Documentation
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={5} className="offset-lg-1 hero-right">
            <div className="img-container">
              <SwiperSlider />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
