import {BrowserRouter,Routes,Route} from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Home from "./home";
import StoredData from "./StoredData";

function App(){


return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Register/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/home" element={<Home/>}/>
<Route path="/data" element={<StoredData/>}/>


</Routes>

</BrowserRouter>

)

}

export default App;