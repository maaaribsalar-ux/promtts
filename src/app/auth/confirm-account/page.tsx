import Link from 'next/link'
import logo from '@/assets/images/logo.png'
import Image from 'next/image'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Confirm Account' }

const ConfirmAccount = () => {
  return (
    <div className="bg-gradient2 min-vh-100 align-items-center d-flex justify-content-center pt-2 pt-sm-5 pb-4 pb-sm-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8} xl={6}>
            <div className="mx-auto mb-3">
              <Link href="/" className="d-flex justify-content-center align-items-center">
                <Image src={logo} alt="" height={30} />
              </Link>
            </div>
            <Card>
              <CardBody className="p-0">
                <div className="p-4 text-center">
                  <h4 className="mt-3">Please check your inbox</h4>
                  <div className="py-3">
                    <span className="icon icon-xl text-info">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink">
                        <title>Stockholm-icons / Communication / Mail-opened</title>
                        <desc>Created with Sketch.</desc>
                        <g id="Stockholm-icons-/-Communication-/-Mail-opened" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                          <rect id="bound" x={0} y={0} width={24} height={24} />
                          <path
                            d="M6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,12 C19,12.5522847 18.5522847,13 18,13 L6,13 C5.44771525,13 5,12.5522847 5,12 L5,3 C5,2.44771525 5.44771525,2 6,2 Z M7.5,5 C7.22385763,5 7,5.22385763 7,5.5 C7,5.77614237 7.22385763,6 7.5,6 L13.5,6 C13.7761424,6 14,5.77614237 14,5.5 C14,5.22385763 13.7761424,5 13.5,5 L7.5,5 Z M7.5,7 C7.22385763,7 7,7.22385763 7,7.5 C7,7.77614237 7.22385763,8 7.5,8 L10.5,8 C10.7761424,8 11,7.77614237 11,7.5 C11,7.22385763 10.7761424,7 10.5,7 L7.5,7 Z"
                            id="Combined-Shape"
                            fill="#335EEA"
                            opacity="0.3"
                          />
                          <path
                            d="M3.79274528,6.57253826 L12,12.5 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 Z"
                            id="Combined-Shape"
                            fill="#335EEA"
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                  <p className="text-muted mb-4">
                    We sent a confirmation link to you at <span className="text-dark fw-medium">youremail@domain.com</span>
                  </p>
                  <p className="text-muted mb-0 fs-13">Simply click on the link available in the email to confirm your account.</p>
                </div>
              </CardBody>
            </Card>
            <Row className="mt-3">
              <Col xs={12} className="text-center">
                <p className="text-muted">
                  Back to{' '}
                  <Link href="/auth/login" className="text-primary fw-semibold ms-1">
                    Log In
                  </Link>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default ConfirmAccount
