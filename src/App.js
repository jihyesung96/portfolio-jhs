import './App.css';
import Footer from './components/Footer';
import Headers from './components/Headers';
import Aboutme from './page/Aboutme';
import FAQ from './page/FAQ';
import Introduction from './page/Introduction';
import Project from './page/Project';
import Share from './page/Share';
import Title from './page/Title';

function App() {
  return (
    <div className="App">
      <Headers/>
      <Title/>
      <Introduction/>
      <Aboutme/>
      <Share/>
      <Project/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
