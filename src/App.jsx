import './App.scss';
import Title_Jumbotron from './components/Title_Jumbotron';
import Slider_section from './components/slider_section';
import Big_side_heading from './components/big_side_heading';
import about_us_text from './content/about_us';
import Faq from './components/Faq';
import Speakers from './components/Speakers';
// import homepage_subtitle
import { homepage_subtitle } from './content/subtitle_texts';
function App() {
  return (
    <div className="App container-fluid appcont" >
      <div className="col appcol">
          <div className="row approw">
          <Title_Jumbotron bigHeader={"Synergy is"} bigHeaderCaps={"BACK"} subtitle={homepage_subtitle} />
          </div>
          <div className="row approw">
          <Slider_section />
          </div>
          <div className="row approw">
          <Big_side_heading
        heading1="About"
        heading2="Us"
        content={about_us_text}
        className='about_us_section'
      ></Big_side_heading>
          </div>
          <div className="row approw">
          <Faq className ='homepage_faq'/>
          </div>
          <div className='emptybox'></div>
      </div>
      {/* <Speakers title={"Speakers"} /> */}
    </div>
  );
}

export default App;
