// // Components imports
// import Home from "./components/Home";
// import Blog from "./components/Blog"
// import About from "./components/About"
// import Projects from "./components/Projects"
// import Contact from "./components/Contact"
// import Layout from "./components/common/Layout"
// import Skills from "./components/Skills"

// import {
//   Route,
//   Link
// } from 'react-router-dom'

// // CSS imports
// import "./css/App.css";

// const App = () => {
//   return (
//     <div className="App">
//       <Layout>
//         <Route exact path="/" component={Home} />
//         <Route path="/about" component={About} />
//         {/* <Route path="/blog" component={Blog} /> */}
//         <Route path="/skills" component={Skills} />
//         <Route path="/projects" component={Projects} />
//         <Route path="/contact" component={Contact} />
//       </Layout>
//     </div>
//   );
// };

// Components imports
import Home from "./components/Home";
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Layout from "./components/common/Layout"
import Skills from "./components/Skills"

import {
  Route,
  Link
} from 'react-router-dom'

// CSS imports
import "./css/App.css";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Layout>
    </div>
  );
};

export default App;

// export default App;
