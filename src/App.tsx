import { Contador } from './components/Contador';
import { ContadorConHook } from './components/ContadorConHook';
import { Forms } from './components/Formularios';
import { Login } from './components/Login';
import { Users } from './components/Usuarios';
import { Funciones } from './typescript/Funciones';
import { ObjetosLiterales } from './typescript/ObjetosLiterales';
import { TiposBasicos } from './typescript/TiposBasicos';

const App = () => {
  return (
    <div className="mt-2">
      <h1>Introducción a TS - React</h1>
      <hr />
      {/* <TiposBasicos /> */}
      {/* <ObjetosLiterales /> */}
      {/* <Funciones /> */}
      {/* <Contador /> */}
      {/* <ContadorConHook /> */}
      {/* <Login /> */}
      {/* <Users /> */}
      <Forms />
    </div>
  );
};

export default App;
