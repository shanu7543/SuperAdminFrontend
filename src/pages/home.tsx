import React from 'react'
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from '../component/sidebar/Sidebar';
import Sidebar from '../component/sidebar/Sidebar';

function Home(){

  // ReactDOM.createRoot(document.querySelector("#root")!).render(
  //   <React.StrictMode>
  //     <StyledEngineProvider injectFirst>
       
  //     </StyledEngineProvider>
  //   </React.StrictMode>
  // );
  
  return (
    <div className='flex justify-center items-center'>
      <div>
      <Sidebar />
      </div>
    
    </div>
  )
}

export default Home





