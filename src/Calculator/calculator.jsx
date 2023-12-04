
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Bolme, Cix, Topla, Vurma, updateInp1, updateInp2 } from './CalculatorSlice';

const Calculator = () => {
  const { inp1, inp2, value } = useSelector((state) => state.calculator);
  const dispatch = useDispatch();

  const handleTopla = () => {
    dispatch(Topla());
  };

  const handleCixma = () => {
    dispatch(Cix());
  };

  const handleVurma = () => {
    dispatch(Vurma());
  };

  const handleBolme = () => {
    dispatch(Bolme());
  };

  const handleInp1Change = (e) => {
    dispatch(updateInp1(e.target.value));
  };

  const handleInp2Change = (e) => {
    dispatch(updateInp2(e.target.value));
  };

  return (
    <>
      <input type="text" value={inp1} onChange={handleInp1Change} />
      <input type="text" value={inp2} onChange={handleInp2Change} />
      <button onClick={handleTopla}>+</button>
      <button onClick={handleCixma}>-</button>
      <button onClick={handleVurma}>*</button>
      <button onClick={handleBolme}>/</button>
      <div>{value}</div>
    </>
  );
};

export default Calculator;
