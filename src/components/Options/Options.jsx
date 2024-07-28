import css from "./Options.module.css";

const Options = ({
  updateFeedback,
  resetFeedback,
  toggleReset,
  totalFeedback,
}) => {
  return (
    <div className={css.optionsBtn}>
      <button
        type="button"
        className={css.btn}
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        type="button"
        className={css.btn}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        type="button"
        className={css.btn}
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          type="button"
          className={css.resetBtn}
          onClick={(() => resetFeedback(), toggleReset())}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
