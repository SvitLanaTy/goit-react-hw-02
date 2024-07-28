import { useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Section from "./components/Section/Section";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import "./App.css";

const App = () => {
  const [isActiveReset, setReset] = useState(false);
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // useEffect(() => {
  //   localStorage.setItem("feedbackValue", feedbacks);
  // }, [feedbacks]);

  const toggleReset = () => {
    setReset(!isActiveReset);
  };

  const updateFeedback = (feedbackType) => {
    setFeedbacks({ ...feedbacks, [feedbackType]: feedbacks[feedbackType] + 1 });
  };

  const resetFeedback = () => setFeedbacks({ good: 0, neutral: 0, bad: 0 });

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  const positiveFeedback = Math.round((feedbacks.good / totalFeedback) * 100);

  return (
    <>
      <Section>
        <Description />

        <Options
          updateFeedback={updateFeedback}
          totalFeedback={totalFeedback}
          toggleReset={toggleReset}
          resetFeedback={resetFeedback}
        />

        {totalFeedback > 0 && (
          <Feedback
            good={feedbacks.good}
            neutral={feedbacks.neutral}
            bad={feedbacks.bad}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        )}
        {!isActiveReset && <Notification />}
      </Section>
    </>
  );
};

export default App;
