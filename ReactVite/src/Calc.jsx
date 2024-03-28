import React, { useState } from "react";
import style from "./Calc.module.css";
import Menu from "./components/menu";

export const Calc = () => {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [numero3, setNumero3] = useState("");
  const [numero4, setNumero4] = useState("");
  const [numero5, setNumero5] = useState("");
  const [media, setMedia] = useState("");

  const handleCalc = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    const num3 = parseFloat(numero3);
    const num4 = parseFloat(numero4);
    const num5 = parseFloat(numero5);

    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3) && !isNaN(num4) && !isNaN(num5)) {
      const avg = (num1 + num2 + num3 + num4 + num5) / 5;
      setMedia(avg.toFixed(2)); // Arredondando para 2 casas decimais
    } else {
      setMedia("Insira números válidos");
    }
  };

  return (
    <div className={style.sectionCalc}>
      <Menu />
      <div className={style.wrapCalc}>
        <h1>Calculadora de Média</h1>
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
            value={numero3}
            onChange={(e) => setNumero3(e.target.value)}
          />
          <input
            className={style.inpStyle}
            type="text"
            placeholder="Digite o quarto número"
            value={numero4}
            onChange={(e) => setNumero4(e.target.value)}
          />
          <input
            className={style.inpStyle}
            type="text"
            placeholder="Digite o quinto número"
            value={numero5}
            onChange={(e) => setNumero5(e.target.value)}
          />
          <button onClick={handleCalc}>Calcular Média</button>
        </div>
        <div className={style.wrapEach}>
          <h1>Média</h1>
          <p>{media}</p>
        </div>
      </div>
    </div>
  );
};
