import React from "react";
import _1 from "../../assets/imgs/_1.png";
import _2 from "../../assets/imgs/_2.png";
import "./Documentation.scss";

const Documentation = () => {
  return (
    <div className="document-container">
      <div className="banner"></div>
      <div className="content">
        <div className="intro">
          <h2 className="title">Get Started</h2>
          <p>
            Need a schedule for your students before the new term starts? Here’s
            the fastest and easiest way to do it. I guarantee and guarantee the
            quality of our services.
          </p>
          <p>
            We’ll cover the basics of using this site to generate a schedule...
          </p>
        </div>
        <div className="guide">
          <div className="step">
            <h2 className="title">
              <span>1.</span> Import file (*.csv)
            </h2>
            <p>
              Firstly, we need a file (.csv) to read all about what you provided
              and check if it's validate.
              <br />
              The input data must have the following format:
              <img src={_1} alt="" />
              You can download a file we provided, It's named{" "}
              <a href="#">example.csv</a>. Then you can use it to fill out
              without editting format.
              <br />
              After formatting and adding data to the file, now import the file
              into our website by clicking the (<b>import *.csv</b>) button
              located at the left corner of the calendar screen. So that we can
              best meet your needs!
            </p>
          </div>
          <div className="step">
            <h2 className="title">
              <span>2.</span> Choose all lessons you're satisfied
            </h2>
            <p>
               We provide you a timetable, so you can choose the lessons that you would like to. you must do this before sending data to our server.
               <br />
               Here's an example:
               <img src={_2} alt="" />
              When all done, let's push the (<b>Send {`>>`}</b>) button and Wait a munite!. We will analyze and process it. THIS MIGHT TAKE A FEW MINUTE! 
            </p>
          </div>
          <div className="step">
            <h2 className="title">
              <span>3.</span> Generate a new Schedule?
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="step">
            <h2 className="title">
              <span>4.</span> Export a file (*.csv)
            </h2>
            <p>
            If you feel this is what you need, it has met your needs, export it to a file and enjoy it.
            <br />
            All you have to do is click the (<b>export</b>) button. It will automatically compress into a file (<b>*.csv</b>) and download it to your computer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
