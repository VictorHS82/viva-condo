"use client";

type Morador = {
  primeiroNome: string;
  sobrenome: string;
};

export default function Home() {

  function formatarNomeMorador(morador: Morador){
    return morador.primeiroNome + ' ' + morador.sobrenome;
  }

  const morador = {
    primeiroNome: 'Sandro',
    sobrenome: 'pereira'
  };

  function obterSaudacao(morador: null | Morador){
    if (morador){
      return <span>Olá, {formatarNomeMorador(morador)}</span>;
    }
    return <span>Olá, Estranho</span>;
  }

  <h1 className="text-2xl font-semibold">{obterSaudacao(null)}</h1>
  return (
    <h1 className="text-2xl font-semibold">{obterSaudacao(null)}</h1>
  //   <div className="flex flex-col items-center justify-center h-screen">
  //     <h1 className="text-4xl font-bold">{formatarNomeMorador(morador)}</h1>
  //   </div>
  );
};