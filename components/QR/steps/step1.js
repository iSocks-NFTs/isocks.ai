import {
  Card,
  CardContainer,
  OptionDescription,
  Option,
  Circle,
} from "../../BuyOption/style";
import { AiOutlineQrcode } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { motion } from "framer-motion";

const Step1 = ({ page, setPage }) => {
  return (
    <>
      <CardContainer
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Card
          justifyContent="center"
          bgColor="var(--primary-brand)"
          color="#fff"
          cursor="pointer"
          onClick={() => setPage(page + 1)}
        >
          <Circle>
            <AiOutlineQrcode color="var(--primary-brand)" />
          </Circle>
          <Option>Generate QR</Option>
          <OptionDescription>
            Create New QR Code, with Dynamic URL Redirection.
          </OptionDescription>
        </Card>
        <Card justifyContent="center" cursor="pointer">
          <Circle>
            <FiSettings color="var(--primary-brand)" />
          </Circle>
          <Option>Manage QR Codes</Option>
          <OptionDescription>Edit/Delete QR Codes</OptionDescription>
        </Card>
      </CardContainer>
    </>
  );
};

export default Step1;
