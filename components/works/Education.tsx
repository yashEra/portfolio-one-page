import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Undergraduate
        <span className="text-textGreen tracking-wide">Computer Science and Technology</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2023 - present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Uva Wellassa University of Sri Lanka
        </li>
      </ul>
    </motion.div>
  );
};

export default Education;
