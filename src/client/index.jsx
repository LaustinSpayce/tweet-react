import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets'
console.log(tweets)

class User extends React.Component {
  render() {
    return (
      <div className="card-title">
        <h5>
          <a href={this.props.user.url}>{this.props.user.screen_name}</a> <span className="text-muted">@{this.props.user.name}</span>
        </h5>
      </div>
    )
  }
}

class Likes extends React.Component {
  render () {
    return (
      <span>
        <i className="material-icons md-18">thumb_up</i> {this.props.likes}
      </span>
    )
  }
}

class Retweets extends React.Component {
  render() {
    return (
      <span>
        <i className="material-icons md-18">double_arrow</i> {this.props.retweets}
      </span>
    )
  }
}

class TweetText extends React.Component {
  render () {
    return (
      <p className="card-text">{this.props.text}</p>
    )
  }
}

class Tweet extends React.Component {

  render() {
      return (
        <div className="card mb-2">
          <div className="card-body">
            <User user={this.props.tweet.user}/>
            <TweetText text={this.props.tweet.text}/>
          </div>
          <div className="card-footer">
            <Likes likes={this.props.tweet.favorite_count}/> <Retweets retweets={this.props.tweet.retweet_count}/>
          </div>
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
        <p>After a long day of work, Kanye West goes to his Kanye Nest to take his Kanye Rest. He wakes up feeling his Kanye Best. Then he’ll get Kanye Dressed on his Kanye Vest to go on a Kanye Quest. He goes to church and becomes Kanye Blessed, then to a hotel room to be a Kanye Guest. Then to school to take his Kanye Test. He forgot to brush his teeth. Did he run out of Kanye Crest? His neighbor stole it, what a Kanye Pest.</p>
        <hr/>
        {tweetsList}
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App tweets={tweets}/>, element );//
console.log(tweets)

console.log("tweet react");
