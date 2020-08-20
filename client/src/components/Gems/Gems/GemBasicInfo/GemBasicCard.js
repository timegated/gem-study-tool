import React from 'react';
import style from './GemBasic.module.css';

const GemCard = ({ data }) => {
  return (
    <>
      {data !== null ? (
        data.data.map((gemData) => {
          return (
            <div className={style.gemCard} key={gemData._id}>
              <div className={style.gemCardTitle}>
                <h1>{gemData.name}</h1>
              </div>
              <div className={style.gemCardContent}>
                <h2>Species:</h2>
                <p>{gemData.species}</p>
                <h2>Variety</h2>
                <p>{gemData.variety}</p>
                <h2>Habit</h2>
                <p>{gemData.habit}</p>
                <h2>Crystal</h2>
                <p>{gemData.crystal}</p>
                <h2>Chemical</h2>
                <p>{gemData.chemical}</p>
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
