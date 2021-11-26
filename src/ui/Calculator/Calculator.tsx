import React, {useEffect, useState} from 'react';
import Keyboard from '../Keyboard/Keyboard';
import Screen from '../Screen/Screen';

const Calculator = (): JSX.Element => {
  const [statement, setStatement] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const getResult = (): void => {
    setResult(eval(statement));
    setStatement('');
  };

  const clear = (): void => {
    setStatement((statement: string): string => statement.slice(0, statement.length - 1));
    setResult('');
  };

  useEffect(() => {
    statement.length && setResult('');
  }, [statement]);

  return <div>
    <Screen statement={result ? result : statement}/>
    <Keyboard setStatement={setStatement} getResult={getResult} clear={clear}/>
  </div>;
};

export default Calculator;