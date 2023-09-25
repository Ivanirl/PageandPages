import Roller from "../Resources/board.png";
import { motion } from "framer-motion";

export default function Nothing() {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
      className="spin-doctor"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="Spin"
      >
        <img src={Roller} />
      </motion.div>
      <div className="textholder">
        <span>Nothing to see here yet folks!</span>
      </div>
    </motion.div>
  );
}
