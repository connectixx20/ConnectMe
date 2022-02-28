import React, { useEffect, useState } from 'react'
import { data } from '../../../db/data'
import { SwiperSlide, Swiper } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'

import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import Image from 'next/image'
import { FaPlayCircle,FaEdit } from 'react-icons/fa'
import Modal from '../../modal/Modal'

const Testimonial = ({edit}) => {
    const [showVid, setShowVid] = useState(false)
    const [number, setNumber] = useState(0)
    const breakpoints = {
        "600": {
            slidesPerView: 2
        },
        "1100": {
            slidesPerView: 3
        },
        "2200": {
            slidesPerView: 4
        },
    }
    const newData = data.videoData

    useEffect(() => {

    }, [showVid, number])

    return (
        <div className="connectme__user-testimonial">
            <div className="connectme__user-testimonial__title">
                <h1>Testimonial</h1>
                {edit && (
              <div className="background">
                <FaEdit />
              </div>
            )}
            </div>
            <div className="connectme__user-testimonial__content">
                <Swiper loop={true} slidesPerView={1} spaceBetween={50} breakpoints={breakpoints} autoplay speed={600} modules={[Autoplay]}>
                    {newData.map((d, i) => (
                        <SwiperSlide className='connectme__user-testimonial__content-carousel' key={d.name}>

                            <motion.div>
                                <Image src={d.img} width={560} height={350} objectFit="cover" layout="responsive" />
                                <div className="play-button" onClick={() => {
                                    setShowVid(true)
                                    setNumber(i)
                                }} >
                                    <FaPlayCircle />
                                </div>
                            </motion.div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {showVid && (
                <Modal isImg={false} img={"https://res.cloudinary.com/dykwfe4cr/video/upload/v1628828386/samples/sea-turtle.mp4"} setModal={setShowVid} />
            )}
        </div>
    )
}

export default Testimonial