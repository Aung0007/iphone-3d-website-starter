

import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import SoundSection from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import WebgiViewer from "./components/WebgiViewer";
import Loader from "./components/loader";


function App() {

  return (
    <div className="App">
      <Loader></Loader>
      <Nav></Nav>
      <Jumbotron></Jumbotron>
      <SoundSection></SoundSection>
      <DisplaySection></DisplaySection>
      <WebgiViewer></WebgiViewer>
    </div>
  );
}

export default App;
