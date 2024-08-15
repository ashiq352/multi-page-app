import React, { useState } from 'react';

const CalculatorPage: React.FC = () => {
  const [result, setResult] = useState<string>('');

  const handleClick = (value: string) => {
    setResult(result + value);
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch {
      setResult('Error');
    }
  };

  const clear = () => {
    setResult('');
  };

  return (
    <div>
      <h1>Calculator</h1>
      <div>
        <input type="text" value={result} readOnly />
        <div>
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('+')}>+</button>
        </div>
        <div>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('-')}>-</button>
        </div>
        <div>
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('*')}>*</button>
        </div>
        <div>
          <button onClick={clear}>C</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={calculate}>=</button>
          <button onClick={() => handleClick('/')}>/</button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
