import "./App.css";
import Job from "./components/Job";
import Person from "./components/Person";
import Pet from "./components/Pet";
import WinxSaga from "./images/winx-saga.jpg";
import OTW from "./images/outside-the-wire.jpg";
import STdisco from "./images/startrek-discovery.jpg";
import QueenG from "./images/queens-gambit.jpg";
import Witcher from "./images/witcher.jpg";
import ImageLink from "./components/ImageLink";

const App = () => {
  return (
    <div className="App">
      <h1>Codenation Week 5</h1>
      <Person name="Alex" age="29" />
      <Job job="Junior Developer" />
      <Pet petsName="Cooper" type="Dog" />
      <div className="images">
        <ImageLink file={WinxSaga} alt="Winx Saga Poster" />
        <ImageLink file={OTW} alt="Outside The Wire Poster" />
        <ImageLink file={STdisco} alt="Star Trek Discovery Poster" />
        <ImageLink file={QueenG} alt="Queens Gambit Poster" />
        <ImageLink file={Witcher} alt="The Witcher Poster" />
      </div>
    </div>
  );
};

export default App;
