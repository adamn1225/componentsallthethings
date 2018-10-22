import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <aside id="contact">
      <header>
      <h1>Contact Me</h1>
      <p>Please feel free to drop a line with compliments and good vibes!</p>
      </header>
      <form action="#" method="post">
      <div class="form-field">
      <label for="user_name">Name</label>
      <br />
      <input name="user_name" required="" type="text"/>
      </div>
      <input value="Contact me! :)" type="submit"/>
      </form>
      </aside>
    )
  }
}
export default Contact;
