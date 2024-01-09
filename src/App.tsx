import TableComponent from "./components/TableComponent";
import { Link} from 'react-router-dom';
import MainRouter from "./components/MainRouter";
import Navbar from "./components/Navbar";
import { useState } from "react";





const App: React.FC = () => {
  const [isHide, setIsHide] = useState(true);

  const handleIsHide = (isHideData: boolean) => {
    setIsHide(isHideData);
  };

  return(
    
    <div>
       <Navbar onDataChange={handleIsHide} />
      <MainRouter isHide={isHide}/>
    </div>
    
  )
}


export default App
