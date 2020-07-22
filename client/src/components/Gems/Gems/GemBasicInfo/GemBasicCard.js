import React from 'react';
import style from './GemBasic.css';
const GemCard = ({ data }) => {
  return (
    <>
      {data !== null ? (
        data.data.map((data) => {
          return (
            <div className={style.gemCard} key={data._id}>
              <div className={style.gemCardTitle}>
                <h1>{data.name}</h1>
              </div>
              <div className={style.gemCardContent}>
                <h2>Species:</h2>
                <p>{data.species}</p>
                <h2>Variety</h2>
                <p>{data.variety}</p>
                <h2>Habit</h2>
                <p>{data.habit}</p>
                <h2>Crystal</h2>
                <p>{data.crystal}</p>
                <h2>Chemical</h2>
                <p>{data.chemical}</p>
              </div>
            </div>
          );
        })
      ) : (
        <h1>Nothing here yet...</h1>
      )}
    </>
  );
};

export default GemCard;
