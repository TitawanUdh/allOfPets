import React from 'react'
import { Card, Carousel, Col, Image, Row } from 'react-bootstrap';
import { FaClock, FaGlobe, FaPhoneAlt } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import useHistory from 'use-history';
import { MENU_COMMUNITIES_CAFE } from '../../router/routes';
import { IoChevronBack } from 'react-icons/io5';

function CafeDetail() {
    const location = useLocation();
    const d = location.state?.data;
    console.log('data', d);
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(MENU_COMMUNITIES_CAFE);
    };
    return (
        <div className='p-5 mt-4'>

            <div onClick={handleGoBack} className='text-secondary d-flex justify-content-start'>
                <IoChevronBack className='pointer-events' style={{ fontSize: '30px', marginTop: 5 }} />
            </div>
            <h2 className='text-center pb-3'>{d.title}</h2>

 
            <div className='d-flex justify-content-center'>
                <Card className="border-0">
                    <Carousel>
                        {d?.image?.map((dataImg, i) => (
                            <Carousel.Item key={i}>
                                <span style={{ width: "50px" }}>
                                    <Col xl={12}>
                                        <div className="d-flex row align-items-center">
                                            <Col className="col-xl-6">
                                                <div className="p-3 card-cafe-info" style={{
                                                    width: '80vw',
                                                    height: '80vh'
                                                }}>
                                                    <Image
                                                        src={dataImg.img}
                                                        className="img-experience"
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'contain',
                                                            objectPosition: 'center'
                                                        }}
                                                    />
                                                </div>
                                            </Col>
                                        </div>
                                    </Col>
                                </span>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Card>
            </div>

            <Row>
                <Col xl={12}>
                    <Row>
                        <Col xl={6} className='d-flex justify-content-end mt-4'>
                            <div >
                                <iframe src={d.subData[0].map} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div></Col>
                        <Col xl={6}>
                            <div className='info-cafe-detail text-start col-6 '>
                                {/* time */}
                                <div className=''>
                                    <FaClock className='me-2 ' />
                                    {d.subData[0].open}
                                </div>

                                {/* website */}
                                {d.subData[0].web === '' ? (
                                    <></>
                                ) : (
                                    <div className=''>
                                        <FaGlobe className='me-2 ' />
                                        <a href={d.subData[0].web} target="_blank" rel="noopener noreferrer">
                                            {d.subData[0].web}
                                        </a>
                                    </div>
                                )}
                                {/* phone */}
                                {d.subData[0].phone === '' ? (
                                    <></>
                                ) : (
                                    <div className=''>
                                        <FaPhoneAlt className='me-2 ' />
                                        {d.subData[0].phone}
                                    </div>
                                )}

                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default CafeDetail
