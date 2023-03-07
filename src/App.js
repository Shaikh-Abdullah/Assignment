import Navigationbar from './Navigation/Navbar';
import Main from './Main/Main';
// import Features from './Features/Features';
import Percentage from './Percentage/Percentage';
import Offering from './Offering/Offering';
import Experience from './Experience/Experience';
import Business from './Business/Business';
import Footer from './Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Main />
      {/* <Features /> */}
      <Percentage />
      <Offering />
      <Experience />
      <Business />
      <Footer />
    </div>
  );
}

export default App;
