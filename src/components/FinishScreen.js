function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = Math.ceil((points / maxPossiblePoints) * 100);
  let emoji;
  if (percentage === 100) emoji = "🥇";
  else if (percentage > 75) emoji = "🥈";
  else if (percentage > 65) emoji = "🥉";
  else if (percentage === 0) emoji = "🤦‍♂️";
  else emoji = "😢";

  return (
    <>
      <p className="result">
        {emoji} You scored: <strong>{points}</strong> out of {maxPossiblePoints}{" "}
        points ({percentage}%).
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
