import style from "./Calc.module.css";
import Menu from "./components/menu";
import { useState } from "react";

export const Calc = () => {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [media, setMedia] = useState("");

  const handleCalc = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if (!isNaN(num1) && !isNaN(num2)) {
      const avg = (num1 + num2) / 2;
      setMedia(avg.toFixed(2)); // Arredondando para 2 casas decimais
    } else {
      setMedia("Insira números válidos");
    }
  };

  return (
    <div className={style.sectionCalc}>
      <Menu />
      <div className={style.wrapCalc}>
        <h1>calculadora de media</h1>
        <div className={style.wrapInputsCalc}>
          <input
            className={style.inpStyle}
            type="text"
            placeholder="Digite o primeiro número"
            value={numero1}
            onChange={(e) => setNumero1(e.target.value)}
          />
          <input
            className={style.inpStyle}
            type="text"
            placeholder="Digite o segundo número"
            value={numero2}
            onChange={(e) => setNumero2(e.target.value)}
          />
           <input
            className={style.inpStyle}
            type="text"
            placeholder="Digite o terceiro número"
            value={numero2}
            onChange={(e) => setNumero2(e.target.value)}
          />
           <input
            className={style.inpStyle}
            type="text"
            placeholder="Digite o quarto número"
            value={numero2}
            onChange={(e) => setNumero2(e.target.value)}
          />
           <input
            className={style.inpStyle}
            type="text"
            placeholder="Digite o quinto número"
            value={numero2}
            onChange={(e) => setNumero2(e.target.value)}
          />
          <button onClick={handleCalc}>Calcular Média</button>
        </div>
        <div className={style.wrapEach}>
          <h1>Média</h1>
          {!isNaN(media) ? <p>{media}</p> : <p>{media}</p>}
        </div>
      </div>
    </div>
  );
};
