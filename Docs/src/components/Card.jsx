import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownloadCloud } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({ data, reference }) {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={0.1} dragTransition={{bounceStiffness:100, bounceDamping:30}} className="relative h-72 w-60 bg-neutral-900 rounded-[40px] text-white px-8 py-10 overflow-hidden">
            <FaRegFileAlt />
            <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
            <div className="footer absolute bottom-0 left-0 w-full  ">
                <div className='flex items-center justify-between py-3 px-8 mb-5'>
                    <h5>{data.filesize}</h5>
                    <span className='w-8 h-8 rounded-full flex items-center justify-center bg-neutral-700'>
                        {data.isCloseable ? <IoClose size='.8em' color='#fff' /> : <FiDownloadCloud size='.8em' color='#fff' />}
                    </span>
                </div>
                { data.tag.isOpen ? <div className={`tag w-full py-4 bg-${data.tag.color}-500 flex justify-center items-center`}>
                        <h5 className='font-semibold text-sm'>{data.tag.title}</h5>
                    </div> : null }

            </div>
        </motion.div>

    )
}

export default Card