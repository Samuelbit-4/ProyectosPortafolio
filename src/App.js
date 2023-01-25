
import "./styles/style.css";
import Testimonio from "./components/componente";

function App() {
  return (
    <div className="contenedor-padre">
      <h1 className="h1-p">CREACIÓN DE COMPONENTES - REACT JS</h1>
      <Testimonio
        imagen="shawn"
        nombre="Shawn Wang"
        pais="Singapore"
        puesto="Software Engineer"
        empresa="Amazon"
        descripcion='"Its scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life'
      />
      <Testimonio
        imagen="sarah"
        nombre="Sarah Chima"
        pais="Nigeria"
        puesto="Software Engineer"
        empresa="ChatDesk"
        descripcion='freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.'
      />
      <Testimonio
        imagen="emma"
        nombre="Emma Bostian"
        pais="Sweden"
        puesto="Software Engineer"
        empresa="Spotify"
        descripcion='Ive always struggled with learning JavaScript. Ive taken many courses but freeCodeCamps course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.'
      />
    </div>
  );
}

export default App;
