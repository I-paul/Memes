import './logo.css';
import { motion } from 'framer-motion';
const Logo = ({icons}) => {
    if (icons) {
        return (
            <div className="logo">
                <h1 className="small">PAL</h1>
            </div>
        );
    }
    return (
        <motion.div className="logo">
            <motion.h1 className="logotxt"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
            >
                PAL
            </motion.h1>
        </motion.div>
    );
}

export default Logo;