import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets'
console.log(tweets)

class Tweet extends React.Component {

  render() {
      return (
        <div>
          <h3>{this.props.tweet.user.screen_name}, <small></small></h3>
          <p>{this.props.tweet.text}</p>
        </div>
      );
  }
}

class App extends React.Component {
  render() {
    let tweetsList = this.props.tweets.tweets.map( ( tweet, index ) => {
      return <Tweet tweet={tweet}/>
    })

    return (
      <div>
        {tweetsList}
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App tweets={tweets}/>, element );//
console.log(tweets)

console.log("tweet react");
