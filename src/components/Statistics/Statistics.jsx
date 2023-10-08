import '../Statistics/Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <h2>
        Good:
        <span>{good}</span>
      </h2>
      <h2>
        Neutral:
        <span>{neutral}</span>
      </h2>
      <h2>
        Bad:
        <span>{bad}</span>
      </h2>
      <h2>
        Total:
        <span>{total}</span>
      </h2>
      <h2>
        Positive feedback:
        <span>{positivePercentage} %</span>
      </h2>
    </div>
  );
};
