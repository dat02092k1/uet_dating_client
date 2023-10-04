import { useState } from 'react' 
import BaseScreen from './components/BaseScreen/BaseScreen'
import { RouteType } from './types/types';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)
  const ROUTE: Array<RouteType> = [
    {
      path: "/login",
      component: <BaseScreen />,
      exact: true,
      isPublic: true,
    },
  ];

  return (
    <>
    <BrowserRouter>
     
     <Routes>
       {ROUTE.map((e, i) => (
         <Route key={i} path={e.path} element={e.component}/>
       ))}
       {/* <Route path="*" element={<Navigate to="/notfound" />} /> */}
       
     </Routes>
      
   </BrowserRouter>
    </>
  )
}

export default App
