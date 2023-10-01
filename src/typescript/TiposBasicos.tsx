export const TiposBasicos = () => {
  const nombre: string = 'Fernando';
  const edad: number = 35;
  const estadoActivo: boolean = false;
  const poderes: string[] = ['Velocidad', 'Volar', 'Respirar en el agua'];

  return (
    <>
      <h3>Tipos Básicos</h3>
      {nombre}, {edad}, {estadoActivo ? 'activo' : 'no activo'}
      <br />
      {poderes.join(', ')}
    </>
  );
};
