// import logo from "logo.png";
import "./App.css";
import { Helmet } from "react-helmet";
function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fresh Land</title>
        <link rel="Fresh land" href="http://www.freshlandfood.com" />
        <meta
          name="description"
          content="Get your Dried catfish at a cheap an affordable price"
        />
      </Helmet>
      <img className="App-logo " src="logo.png" alt="logo" />
      <h1>COMING SOON</h1>
      <p>
        If you have any question or inquiry? <br /> Get in touch
      </p>
      <div className="contactUs">
        <a className="bn31span" href="mailto:Mercy@freshlandfood.com">
          Send Email
        </a>
        <a className="bn31span" href="tel:+2348119205944">
          Call Us
        </a>
      </div>
    </div>
  );
}

export default App;
