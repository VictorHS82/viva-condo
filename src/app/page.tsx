"use client";

const Home = () =>{
type Morador = {
  primeiroNome: string;
  sobrenome: string;
}

  function formatarNomeMorador(morador: Morador){
    return morador.primeiroNome + ' ' + morador.sobrenome;
  }

  const morador = {
    primeiroNome: 'Sandro',
    sobrenome: 'pereira'
  }

  function obterSaudacao(morador: null | Morador){
    if (morador){
      return <span>Olá, {formatarNomeMorador(morador)}</span>;
    }
    return <span>Olá, Estranho</span>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-blue-9000 py-5 px-20 rounded-md">
        <h1 className="text-4xl font-bold">{obterSaudacao(morador)}</h1>
      </div>

    </div>
  )
}

export default Home