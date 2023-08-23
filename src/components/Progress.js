function Progress({ idx, numQuestions, points, maxPossiblePoints, answer }) {
  console.log(`points: ${points}`);
  console.log(`maxPoints: ${maxPossiblePoints}`);
  return (
    <header className="progress">
      <progress max={numQuestions} value={idx + Number(answer !== null)} />
      <p>
        Question <strong>{idx + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>
          {points}/ {maxPossiblePoints}
        </strong>
      </p>
    </header>
  );
}

export default Progress;
