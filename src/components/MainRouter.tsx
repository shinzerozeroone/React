import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import Vladick from "../pages/Vladick";
import Lituk from "../pages/Lituk";
import Vasya from "../pages/Vasya";
import Kolya from "../pages/Kolya";
import {  VLAD_ROUTE , LITUK_ROUTE, VASYA_ROUTE, KOLYA_ROUTE } from '../routes/config'

type PropTypes = {
  isHide: boolean;
};


const MainRouter: React.FC<PropTypes> = ({ isHide }) => {
  
  const basedPath: RouteObject[] = [

    { path: VLAD_ROUTE, element: <Vladick /> },
    { path: LITUK_ROUTE, element: <Lituk /> },
    { path: "*", element: <Navigate to={'/'} replace />},
  ]

  const authPath: RouteObject[] = [

    { path: VASYA_ROUTE, element: <Vasya /> },
    { path: KOLYA_ROUTE, element: <Kolya /> },

  ]

  const resultPaths: RouteObject[] = basedPath
  
  if(!isHide){
    resultPaths.push(...authPath)
  }
  return useRoutes(resultPaths);
}

export default MainRouter;