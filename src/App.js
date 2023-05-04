import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";

function App() {
  return (
    <>
      {/* agar me chata hum ki navbar ke aande aise title pass karun to {  mereko props mean properties use karna padega
      lkin ek batt props use karne se phle tmko props upar jnha export navabar us function me usko pass karna hoga tabhi ye kaam karta hai 
    
    or han props ko diretly change ni kar skte wo kahli read only hota hai} */}

      <Navbar title="TextUtils" about="About Us" />
      <div className="container my-3">
        <Textform heading="Enter the text to analyze " />
      </div>
      {/* <div className="container my-3">
        <About />
      </div> */}
    </>
  );
}

export default App;
