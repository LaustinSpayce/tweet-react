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
        <i className="material-icons">thumb_up</i> {this.props.likes}
      </span>
    )
  }
}

class Retweets extends React.Component {
  render() {
    return (
      <span>
        <i className="material-icons">double_arrow</i> {this.props.retweets}
      </span>
    )
  }
}

class TweetText extends React.component {
  render () {
    return (
      <p className="card-text">{this.props.text}</p>
    )
  }
}

class Tweet extends React.Component {

  render() {
      return (
        <div className="card">
          <User user={this.props.tweet.user}/>
          <TweetText text={this.props.tweet.text}/>
          <div className="card-body">
            <Likes likes={this.props.tweet.favorite_count}/> - <Retweets retweets={this.props.tweet.retweet_count}/>
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
        {tweetsList}
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App tweets={tweets}/>, element );//
console.log(tweets)

console.log("tweet react");
