import React, { useState, useEffect } from 'react';
import Forms from './components/Forms';
import ParcelNumbers from './components/ParcelNumbers';

export default function App() {
  const [initValue, setInitValue] = useState({});
  const [interestRate, setInterestRate] = useState({});
  const [period, setPeriod] = useState({});
  const [parcelNumber, setParcelNumber] = useState([]);

  useEffect(() => {
    const newParcelNumbers = [];

    for (let i = 1; i <= period; i++) {
      //M = C (1+i)t
      const value = initValue * Math.pow(1 + interestRate / 100, i);
      //J = M - C
      const desc = value - initValue;
      const percentage = (desc * 100) / initValue;
      const newParcelNumber = {
        value,
        desc,
        percentage,
        id: i,
      };
      //console.log(newParcelNumber);
      newParcelNumbers.push(newParcelNumber);
    }

    setParcelNumber(newParcelNumbers);
  }, [initValue, interestRate, period]);

  return (
    <div className="card-panel grey lighten-3">
      <h1 className="center">React - Juros Compostos</h1>
      <Forms
        onChangeValueCalculated={setInitValue}
        onChangeInterestRate={setInterestRate}
        onChangeRatePeriot={setPeriod}
        onChangeParcelNumbers={parcelNumber}
      />
      <div>
        <ParcelNumbers parcelNumbers={parcelNumber} />
      </div>
    </div>
  );
}
