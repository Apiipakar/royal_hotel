import React from "react";

export const Contact = () => {
  return (
    <section className="Application">
      <div className="row">
        <h1>Make contact</h1>
        <h4>
          for more information and guides you can make in touch
          <br />
          by filling the inner form.
        </h4>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" />
          <label htmlFor="Email">Email</label>
          <input type="text" />
          <label htmlFor="Text_era">Inbox</label>
          <textarea name="" id=""></textarea>
          <button className="Usually_btn">Send</button>
        </form>
      </div>
    </section>
  );
};
