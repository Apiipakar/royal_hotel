import React from "react";

export const Application = () => {
  return (
    <section className="Application">
      <div className="row">
        <h1>Application</h1>
        <h4>
          Here Is How Our Operators Will Serve You With Your Consent And
          <br />
          Satisfied With Our Work.
        </h4>
        <div className="App_contents">
          <div className="col_one">
            <h2>1</h2>
            <p>
              checkout available services <br />
            </p>
          </div>
          <div className="col_one">
            <h2>2</h2>
            <p>view The details and requirments</p>
          </div>
          <div className="col_one">
            <h2>3</h2>
            <p>Make Booking </p>
          </div>
        </div>
        <div className="book_btn">
          <button className="Usually_btn Book">Book now</button>
        </div>
      </div>
    </section>
  );
};
