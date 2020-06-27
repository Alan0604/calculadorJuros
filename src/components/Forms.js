import React from 'react';
import css from './form.module.css';

export default function Forms({
  onChangeValueCalculated,
  onChangeInterestRate,
  onChangeRatePeriot,
}) {
  const handleValueCalculated = (event) => {
    const value = event.target.value;
    onChangeValueCalculated(value);
  };

  const handleChangeInterestRate = (event) => {
    const value = event.target.value;
    onChangeInterestRate(value);
  };

  const handleChangeRatePeriot = (event) => {
    const value = event.target.value;
    onChangeRatePeriot(value);
  };

  return (
    <div className={css.body}>
      <form className={css.forms}>
        <section className="card-panel  teal accent-1">
          <div className="input-group mb-3" id={css.formDiv}>
            <span className="input-group-text" style={styles.inputGreen}>
              Montante Inicial{' '}
            </span>
            <input
              id={css.formInput}
              type="number"
              style={styles.inputGreen}
              className="form-control"
              aria-label="Dollar amount (with dot and two decimal places)"
              onChange={handleValueCalculated}
              autoFocus
            />
          </div>
        </section>

        <section className="card-panel red lighten-4">
          <div className="input-group mb-3" id={css.formDiv}>
            <span className="input-group-text" style={styles.inputRed}>
              Taxa de juros
            </span>
            <input
              id={css.formInput}
              type="number"
              style={styles.inputRed}
              className="form-control"
              aria-label="Dollar amount (with dot and two decimal places)"
              min="-12"
              max="12"
              step="0.1"
              onChange={handleChangeInterestRate}
            />
          </div>
        </section>

        <section className="card-panel blue lighten-4">
          <div className="input-group mb-3" id={css.formDiv}>
            <span className="input-group-text" style={styles.inputBlue}>
              Período Mensal
            </span>
            <input
              id={css.formInput}
              type="number"
              style={styles.inputBlue}
              className="form-control"
              aria-label="Dollar amount (with dot and two decimal places)"
              onChange={handleChangeRatePeriot}
            />
          </div>
        </section>
      </form>
    </div>
  );
}

const styles = {
  inputGreen: {
    fontWeight: 'bold',
    color: '#00796b',
  },

  inputRed: {
    fontWeight: 'bold',
    color: '#d32f2f',
  },

  inputBlue: {
    fontWeight: 'bold',
    color: '#1565c0',
  },
};
