import React from "react";
import { Row } from "react-bootstrap";

import leetcode from '../../assets/leetcodestat.png' ;

const Leetcode = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="yellow">LeetCode</strong> Stat
      </h1>
      <div className="leetcodestat">
          <img src={leetcode} alt="" style={{width: "80%"}}/>
      </div>
    </Row>
  );
}

export default Leetcode;
