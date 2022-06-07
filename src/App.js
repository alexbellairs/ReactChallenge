import "./App.css";
import ImgLink from "./components/ImgLink";
import Job from "./components/Job";
import Person from "./components/Person";
import Pet from "./components/Pet";
// import WinxSaga from "./images/winx-saga.jpg";
// import OTW from "./images/outside-the-wire.jpg";
// import STdisco from "./images/startrek-discovery.jpg";
// import QueenG from "./images/queens-gambit.jpg";
// import Witcher from "./images/witcher.jpg";
import ImageLink from "./components/ImageLink";
import Float from "./images/float.jpg";
import LivingRoom from "./images/lux-living-room.webp";
import Villa from "./images/villa.jpg";
import Snow from "./images/winter.jpg";

const App = () => {
  return (
    <div className="App">
      <h1>Codenation Week 5</h1>
      <Person name="Alex" age="29" />
      <Job job="Junior Developer" />
      <Pet petsName="Cooper" type="Dog" />
      <div className="images">
        {/* <ImageLink file={WinxSaga} alt="Winx Saga Poster" />
        <ImageLink file={OTW} alt="Outside The Wire Poster" />
        <ImageLink file={STdisco} alt="Star Trek Discovery Poster" />
        <ImageLink file={QueenG} alt="Queens Gambit Poster" />
        <ImageLink file={Witcher} alt="The Witcher Poster" /> */}
        <ImgLink
          file={LivingRoom}
          alt="Luxury Living Room"
          para="Luxury Living Room"
        />
        <ImgLink file={Villa} alt="Villa" para="Entire Homes" />
        <ImgLink file={Float} alt="Floating Villa" para="Unique Stays" />
        <ImgLink file={Snow} alt="Winter Cabin" para="Pets Allowed" />
      </div>
    </div>
  );
};

export default App;
