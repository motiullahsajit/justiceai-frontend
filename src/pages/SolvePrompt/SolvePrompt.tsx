import React from "react";
import "./SolvePrompt.scss";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SolvePrompt = () => {
  return (
    <section className="flex justify-center">
      <div className="prompt-container flex justify-end">
        <div className="prompt-input">
          <p>Generating...</p>
          <p>
            When dealing with stakeholder issues, focus on meeting your
            fiduciary duties and any contractual obligations. Have open
            discussions to understand all views and find mutually agreeable
            solutions if possible. But be prepared to make difficult decisions
            to protect the company's long-term interests if needed. Proper
            documentation is key - ensure agreements clearly outline roles and
            responsibilities. Address problems proactively rather than letting
            them escalate, as small conflicts can have larger legal
            implications. Consult an experienced business attorney if the
            situation reaches litigation. They can advise on compliance,
            liability risks, and the best path forward. Managing stakeholders
            properly is important from both a legal and business strategy
            perspective. Let me know if you need any other counsel!
          </p>
          <div className="flex justify-end">
            <div className="buttons-container flex item-center">
              <button>Match a Lawyer</button>
              <FontAwesomeIcon className="send-button" icon={faPaperPlane} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolvePrompt;
