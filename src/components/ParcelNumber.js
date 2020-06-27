import React from 'react';
import css from './parcelNumber.module.css';

export default function ParcelNumber({
  id,
  value,
  discount,
  percentage,
  colorDiscount,
  colorPercentage,
}) {
  //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
  //utilizado nas duas funções
  function formatNumber(value) {
    //Converte o valor para o padrão moeda brasileira
    return value.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  function formatNumberPercent(value) {
    return value.toLocaleString('pt-br', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
  }

  return (
    <div className={css.forms}>
      <section className="card-panel grey lighten-3">
        <div className={css.idParcelNumbers}>{id}</div>
        <div style={{ fontWeight: 'bold' }}>{formatNumber(value)}</div>
        <div className={css.valor} style={colorDiscount}>
          {percentage > 0 && '+'}
          {formatNumber(discount)}
        </div>
        <div style={colorPercentage}>
          {percentage > 0 && '+'}
          {formatNumberPercent(percentage)}%
        </div>
      </section>
    </div>
  );
}
