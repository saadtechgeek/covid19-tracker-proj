import React, { useState } from 'react';
import NavBar from './Components/NavBar'
import InfoPanel from './Components/InfoPanel'
import FootNav from './Components/FootNav'
function App(){
  // state maintain ho rahe hai 1 hai zero hai one hai etc.
  const screenConfig = useState(0);
  
  return (
    <div>
    <NavBar/>
    <InfoPanel currentState={screenConfig[0]} />
    <FootNav screenConfig={screenConfig}/>
    </div>
  );
}

export default App;
