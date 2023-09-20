import css from './FeedbackOptions.module.css';
import setData from 'components/Utils/utils';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttonsNames = setData(options);
  return (
    <>
      <div className={css.buttons}>
        {buttonsNames.map(buttonItem => {
          return (
            <button
              key={buttonItem}
              type="button"
              className={css.btn}
              data-name={buttonItem}
              onClick={onLeaveFeedback}
            >
              {buttonItem}
            </button>
          );
        })}
      </div>
      <h2 className={css.statisticTitle}>Statistics</h2>
    </>
  );
};
