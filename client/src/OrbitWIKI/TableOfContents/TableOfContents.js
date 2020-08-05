import React from "react";
import "./TableOfContents.css";

function TableOfContents() {
  return (
    <div className="tableOfContents-body">
      <div className="container">
        <div className="header-container">
          <h1>TABLE OF CONTENTS</h1>
        </div>
        <p>
          1. <a>Electronics</a>
        </p>
        <p>
          2. <a>Mechanical</a>
        </p>
        <p>
          3. <a>Payload</a>
        </p>
        <p>
          4. <a>Sub-Orbital</a>
        </p>
        <p>
          5. <a>Satellite Communications</a>
        </p>
        <p>
          6. <a>On-Board-Computer (OBC)</a>
        </p>
        <p>
          7. <a>The Attitude determination and control system (ADCS)</a>
        </p>
      </div>
    </div>
  );
}

export default TableOfContents;
