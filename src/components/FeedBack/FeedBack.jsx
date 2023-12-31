import { useState } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { NotificationMessage } from 'components/NotificationMessage/NotificationMessage';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';

export const FeedBack = () => {
  const [good, goodValue] = useState(0);
  const [neutral, neutralValue] = useState(0);
  const [bad, badValue] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const handleChangeValue = event => {
    switch (event.target.dataset.name) {
      case 'good':
        goodValue(prev => prev + 1);
        break;

      case 'neutral':
        neutralValue(prev => prev + 1);
        break;

      case 'bad':
        badValue(prev => prev + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.floor((good * 100) / countTotalFeedback());
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={options}
          handleChangeValue={handleChangeValue}
        />
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <NotificationMessage message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
