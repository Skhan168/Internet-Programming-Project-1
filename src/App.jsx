import Header from "./Header.jsk";
import UserData from "./UserData.jsx";
import CoreConcept from "./CoreConcept.jsx";
import{Core_concepts} from './data.js';

function App() {
  return (
    <div>
      <Header />
      <main>
      <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
           <CoreConcept title = {Core_Concepts[0].title}
           alt = {Core_Concepts[0].title}
           description = {Core_Concepts[0].description}
           image = {Core_Concepts[0].image}/>
            
           <Core_Concepts title = {core_concepts[1].title}
            alt = {Core_Concepts[1].title}
            description = {Core_Concepts[1].description}
            image = {Core_Concepts[1].image}/>

            <Core_Concepts title = {core_concepts[2].title}
            alt = {Core_Concepts[2].title}
            description = {Core_Concepts[2].description}
            image = {Core_Concepts[2].image}/>

            <Core_Concepts title = {core_concepts[3].title}
            alt = {Core_Concepts[3].title}
            description = {Core_Concepts[3].description}
            image = {Core_Concepts[3].image}/>
          </ul>
          </section>
          </main>
          </div>
  );
}

export default App;
