import {
  Card,
  CardContainer,
  Circle,
  Option,
  OptionDescription,
  ArrowRight,
  BuyOptionLink,
  Image,
} from "../../BuyOption/style";
import { motion } from "framer-motion";
import { RiShirtLine } from "react-icons/ri";
import { FaEthereum } from "react-icons/fa";

export default function Option1({ option, setOption }) {
  return (
    <motion.div
      className="my-[7rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center">
        <h3 className="text-3xl font-bold">Become Our Partner Today</h3>
        <p className="font-thin">
          We look forward to you joining forces with us
        </p>
      </div>
      <CardContainer className="mt-[2.5rem]">
        <Card
          cursor="pointer"
          onClick={() => {
            setOption(1);
          }}
        >
          <Circle>
            <FaEthereum size={30} />
          </Circle>
          <Option>Tech Organization</Option>
          <OptionDescription>
            Partner with us to revolutionize tech. Gain exposure, access new
            customers, and innovate with us. Join now to achieve greater
            success.
          </OptionDescription>
          <BuyOptionLink>Partner with Us </BuyOptionLink>
        </Card>
        <Card
          border="none"
          bgColor="#fafafa"
          cursor="pointer"
          onClick={() => {
            setOption(2);
          }}
        >
          <Circle>
            <RiShirtLine size={30} />
          </Circle>
          <Option>Fashion Brand</Option>
          <OptionDescription>
            Elevate your fashion brand with us. Partnering offers new customer
            exposure, exclusive promotions and more. Join now to take your brand
            to new heights.
          </OptionDescription>
          <BuyOptionLink>Join Us </BuyOptionLink>
        </Card>
      </CardContainer>
    </motion.div>
  );
}
