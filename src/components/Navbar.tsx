
import { Link} from 'react-router-dom';
import MainRouter from './MainRouter';
import { useState } from 'react';
import { VLAD_ROUTE , LITUK_ROUTE, KOLYA_ROUTE, VASYA_ROUTE } from '../routes/config';

type PropTypes = {
    onDataChange: (childData: boolean) => void;
  };

const Navbar: React.FC<PropTypes> = ({ onDataChange })=>{
    
    const [isHide, setIsHide] = useState(false);

    const sendDataToParent = () => {
        setIsHide(!isHide);
        onDataChange(isHide);
      };

    return(

        <div >
            <ul>
                <li><Link className='link' to={VLAD_ROUTE}>VLAD</Link></li>
                <li><Link className='link' to={LITUK_ROUTE}>LITUK</Link></li>

                    {isHide  && <><li><Link className='link' to={KOLYA_ROUTE}>KOLYA</Link></li>
                    <li><Link className='link' to={VASYA_ROUTE}>VASYA</Link></li></>}
                    

                
            </ul>
            <button onClick={sendDataToParent}>Login</button>
   
        </div>
    )
}

export default Navbar;