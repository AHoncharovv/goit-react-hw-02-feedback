import React, {Component} from "react";

import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  options = Object.keys(this.state);
  
  onLeaveFeedback = e => {
    this.setState({
      [e.target.value]: this.state[e.target.value] + 1
    })
  }

  countTotalFeedback(){
    const { good, neutral, bad } = this.state;
    let sum = good + neutral + bad;
    return sum;
  }

  countPositiveFeedbackPercentage() {
    if (this.state.good === 0){return}
    const total = this.countTotalFeedback();
    const positive = (this.state.good / total)*100;
    return Math.round(positive);
  }

  render() {
    
    return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
            options={this.options}
            onLeaveFeedback={this.onLeaveFeedback}
        />
        <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positive={this.countPositiveFeedbackPercentage()}
        />  
      </Section>
    </div>
  );
  } 
}


