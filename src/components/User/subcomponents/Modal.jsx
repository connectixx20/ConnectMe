import { FaTimes, FaEdit } from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'

const Modal = ({ setModal, edit, data ,openEditHandler}) => {
    return (

        <motion.div className="connectme__user-modal" exit={{ opacity: 0 }}>
            <div className="content">
                <motion.div className="connectme__user-modal__content" initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} >
                    {data?.map((d, i) => (
                        <motion.div className="item" key={d._id} initial={{ x: 50, y: -50, opacity: 0 }} whileInView={{ x: 0, y: 0, opacity: 1 }} transition={{ ease: [.5, .01, -0.05, .95], duration: 2, delay: .5 * i }}>
                            <div className="title">
                                <h4>{d.name} :-</h4>
                            </div>
                            <div className="content">
                                <p>{d.data}</p>
                            </div>
                            {edit && (
                                <div className="background" onClick={()=>openEditHandler(d.data,d.name,'userInfo',{isSubDoc: true,_id: d._id})}>
                                    <FaEdit />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div className="connectme__user-modal__off" onClick={() => setModal(false)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.1 }}>
                    <FaTimes />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Modal