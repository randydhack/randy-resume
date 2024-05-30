import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import AnimatedCursor from "react-animated-cursor";
import Footer from "./components/Footer/Footer";
import PageRedirect from "./PageRedirect";
import "./App.css";



function App() {

  return (
    <main className="mx-[40px] overflow-hidden">
      <AnimatedCursor
        innerSize={12}
        outerSize={20}
        color="255,255,255"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={4}
        showSystemCursor={true}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          {
            target: ".custom",
            options: {
              innerSize: 5,
              outerSize: 5,
              color: "255, 255, 255",
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 5,
            },
          },
        ]}
      />
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route path="" component={PageRedirect} />
        </Switch>
        <Footer />
    </main>
  );
}

export default App;
