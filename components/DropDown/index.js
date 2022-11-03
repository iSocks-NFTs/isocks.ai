import { DropDownButton } from "./style";
import {AiOutlineDown} from 'react-icons/ai'


const DropDown = ({countries}) =>{
    
    return(
        <>
            <DropDownButton>
            <span>Nigeria</span>
              <div>
                <AiOutlineDown />
              </div>
            </DropDownButton>
        </>
    )
}

export default DropDown;