import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <main id="about-me">
      <h1>About Me</h1>
      <picture>
      <source media="(min-width: 426px)" srcset="https://www.deshebideshe.com/assets/news_images/7f5320efbbe7f01edaa136c52973fcc9.jpg"/>
      <img src="https://pbs.twimg.com/profile_images/739109952212467713/Vr_n84CJ.jpg" alt="my pictire' profile picture" />
      </picture>
      <div>
      <p> Hello my name is ADammm </p>
      </div>
      </main>
    )
  }
}

export default Main;
