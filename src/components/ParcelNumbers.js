import React from 'react';
//Número de parcela(s)
import ParcelNumber from './ParcelNumber';

export default function ParcelNumbers({ parcelNumbers }) {
  return (
    <div>
      {parcelNumbers.map((parcel) => {
        const { id, value, desc, percentage } = parcel;
        const colorDiscount = desc > 0 ? styles.positive : styles.negative;

        const colorPercentage =
          percentage > 0 ? styles.positive : styles.negative;

        return (
          <ParcelNumber
            key={id}
            id={id}
            value={value}
            discount={desc}
            percentage={percentage}
            colorDiscount={colorDiscount}
            colorPercentage={colorPercentage}
          />
        );
      })}
    </div>
  );
}

const styles = {
  positive: {
    fontWeight: 'bold',
    color: '#00e676',
  },

  negative: {
    fontWeight: 'bold',
    color: '#b71c1c',
  },
};
