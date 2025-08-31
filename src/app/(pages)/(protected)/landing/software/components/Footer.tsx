import { currentYear, developedBy, developedByLink } from '@/assets/data/constants'
import Link from 'next/link'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  const footerLinks = ['Changelog', 'FAQ', 'Press kit', 'Contact us']
  return (
    <section className="pt-4 pt-sm-6 pb-5 desktop-5">
      <Container>
        <Row className="justify-content-center">
          <Col>
            <div className="text-center">
              <h1 className="text-dark">Be the first to know!</h1>
              <p>We&apos;ll inform you about new updates, features, but no spam, we promise.</p>
            </div>
            <div className="my-4 my-sm-5 pt-0 d-flex align-items-center justify-content-center">
              <Row className="g-2">
                <Col sm={8}>
                  <label className="visually-hidden" htmlFor="email">
                    Email
                  </label>
                  <input type="email" className="form-control mb-2 me-sm-2 shadow-sm" name="email" id="email" placeholder="Your Email" />
                </Col>
                <Col sm={4}>
                  <Button variant="primary" type="submit" className="mb-2">
                    Sign Up
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <hr className="my-4" />
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="text-center mt-5">
              <h5 className="fw-normal">
                {currentYear} © Copyright. All rights reserved. Crafted by <a href={developedByLink}>{developedBy}</a>
              </h5>
              <ul className="list-inline mt-4">
                {footerLinks.map((link, idx) => (
                  <li className="list-inline-item mx-4 mb-3" key={idx}>
                    <Link href="" className="text-dark">
                      {link}
                    </Link>
                  </li>
                ))}
                <li className="list-inline-item mx-4 mb-3">
                  <Link href="" className="text-dark">
                    Careers
                    <span className="align-middle badge badge-soft-info rounded-pill fw-normal fs-11 px-2 py-1">We&apos;re hiring</span>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Footer
