"use client"

import {motion} from 'framer-motion'

export const Contact = () => {
    return (
        <section id="contact" className=' overflow-x-clip py-32 text-white max-w-[1200px] mx-auto px-4'>
            <motion.div
            initial={{opacity: 0 , y: 20}}
            whileInView={{opacity: 1 , y: 0}}
            transition={{duration: 0.8}}
            viewport={{once: true}}
            className='grid lg-grid-cols-2 gap-16'
            >
                <div className='space-y-12'>
                    <motion.h2
                    initial={{opacity: 0 , y: -20}}
                    whileInView={{opacity: 1 , x: 0}}
                    transition={{duration: 0.6 , delay: 0.2}}
                    className='texxt-7xl font-bold text-gray-300'
                    >
                        Get in <span className='text-purple-500'>touch</span>
                    </motion.h2>

                    <motion.div
                    initial={{opacity: 0 , y: -20}}
                    whileInView={{opacity: 1 , x: 0}}
                    transition={{duration: 0.6 , delay: 0.4}}
                    className='glass p-8 rounded-2xl space-y-8'
                    >
                        <div className='space-y-2'>
                            <p className='text-lg text-gray-300'>Phone</p>
                            <a href="tel: +999999999"
                            className='text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2'>+91 8099557005</a>
                            <span className='text-gray-500'>➚</span>

                        </div>

                        <div className='space-y-2'>
                            <p className='text-lg text-gray-300'>Email</p>
                            <a href="mailto:samsgym.fitnesscenter@gmail.com" className='text-3xl lg:text-4xl font-semibold hover:text-purple-400 transition duration-300 flex items-center'>samsgym.fitnesscenter
                                <span className='text-gray-500'>➚</span>
                            </a>
                        </div>

                        <div className='space-y-2'>
                            <p className='text-lg text-gray-300'>Office</p>
                            <address className='text-xl not-italic leading-relaxed'>
                            Nagaram , 500083<br />
                            Hyderabad<br />
                            India
                            </address>
                        </div>

                    </motion.div>
                </div>

                {/* <motion.div
                initial={{opacity: 0 , x: 20}}
                whileInView={{opacity: 1 , x: 0}}
                transition={{duration: 0.6 , delay: 0.6}}
                className='w-full h-full min-h-[400px] rounded-2xl overflow-hidden'
                >
                    {/* <iframe
                    src='https://maps.app.goo.gl/DnaMFjkr1Pr9PVtY6'
                    width="100%"
                    height="100%"
                    style={{border: 0}}
                    allowFullScreen
                    loading="lazy"
                    >

                    </iframe> */}
                {/* </motion.div> */} 

            </motion.div>
        </section>
    )
}