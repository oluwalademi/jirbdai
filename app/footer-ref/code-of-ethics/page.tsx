import React from "react";
import TopBar from "@/components/TopBar";

const page = () => {
  return (
    <div className={"container px-4 text-black"}>
      <TopBar titleHeader={"JIRBDAI Code of Ethics and Professional Conduct"} />
      <br />

      <p>
        Computing professionals&#39; actions change the world. To act
        responsibly, they should reflect upon the wider impacts of their work,
        consistently supporting the public good. This Code serves as a framework
        for ethical conduct for all individuals involved in computing-related
        roles within the Journal of Institutional Research, Big Data Analytics
        and Innovation (JIRBDAI).
      </p>
      <br />
      <br />

      <h3>1. General Ethical Principles</h3>
      <p>
        <strong>1.1 Contribute to society and human well-being.</strong> Use
        computing skills to benefit society, uphold human rights, and promote
        inclusivity and environmental sustainability.
      </p>

      <p>
        <strong>1.2 Avoid harm.</strong> Carefully consider potential negative
        consequences of computing work and mitigate harm proactively.
      </p>

      <p>
        <strong>1.3 Be honest and trustworthy.</strong> Provide full
        transparency about systems, qualifications, and conflicts of interest.
      </p>

      <p>
        <strong>1.4 Be fair and avoid discrimination.</strong> Promote diversity
        and inclusivity. Avoid bias, harassment, and practices that disadvantage
        any group.
      </p>

      <p>
        <strong>1.5 Respect intellectual property.</strong> Credit others
        appropriately and support open sharing when ethically appropriate.
      </p>

      <p>
        <strong>1.6 Respect privacy.</strong> Collect and use personal data
        responsibly, with informed consent and minimal retention.
      </p>

      <p>
        <strong>1.7 Honor confidentiality.</strong> Protect sensitive
        information unless required to disclose for ethical or legal reasons.
      </p>

      <br />

      <h3>2. Professional Responsibilities</h3>
      <p>
        <strong>2.1 Strive for high quality.</strong> Commit to excellence in
        both process and product, respecting stakeholder interests.
      </p>
      <p>
        <strong>2.2 Maintain professional competence.</strong> Continuously
        develop technical and ethical expertise through learning and reflection.
      </p>

      <p>
        <strong>2.3 Respect applicable rules.</strong> Adhere to legal and
        institutional policies unless unethical, in which case challenge
        appropriately.
      </p>

      <p>
        <strong>2.4 Accept and provide peer review.</strong> Engage in
        constructive feedback to ensure high standards in computing work.
      </p>

      <p>
        <strong>2.5 Evaluate systems and risks thoroughly.</strong> Analyze
        impacts and risks, especially in machine learning and critical systems.
      </p>

      <p>
        <strong>2.6 Perform work only within competence.</strong> Accept tasks
        only when adequately qualified or after proper preparation.
      </p>

      <p>
        <strong>2.7 Foster public understanding.</strong> Communicate computing
        concepts and implications clearly and responsibly to the public.
      </p>

      <p>
        <strong>2.8 Access systems responsibly.</strong> Use computing systems
        only with authorization or when justifiably in the public interest.
      </p>

      <p>
        <strong>2.9 Design secure systems.</strong> Prioritize robust security,
        usability, and proactive mitigation of vulnerabilities.
      </p>

      <br />

      <h3>3. Professional Leadership Principles</h3>
      <p>
        <strong>3.1 Prioritize the public good.</strong> Make the public
        interest the central focus in all stages of computing work.
      </p>

      <p>
        <strong>3.2 Promote social responsibility.</strong> Encourage
        organizational members to engage ethically and uphold professional
        duties to society.
      </p>

      <p>
        <strong>3.3 Enhance work life quality.</strong> Ensure inclusive,
        accessible, safe, and respectful working conditions for all personnel.
      </p>

      <p>
        <strong>3.4 Enforce ethical policies.</strong> Establish and maintain
        practices aligned with ethical principles and take corrective action
        when breached.
      </p>

      <p>
        <strong>3.5 Support professional development.</strong> Provide learning
        opportunities related to ethics, complexity, responsibility, and system
        impact.
      </p>

      <p>
        <strong>3.6 Manage legacy systems responsibly.</strong> Avoid disrupting
        user workflows during changes, and ensure informed transitions for
        deprecated systems.
      </p>

      <p>
        <strong>3.7 Monitor infrastructure systems.</strong> Recognize when
        systems become essential to society and manage them with care, fairness,
        and transparency.
      </p>

      <br />

      <h3>4. Compliance with the Code</h3>
      <p>
        <strong>4.1 Uphold and promote the Code.</strong> Adhere to the
        principles and encourage others to do the same, addressing issues
        transparently.
      </p>

      <p>
        <strong>
          4.2 Treat violations as inconsistent with JIRBDAI’s standards.
        </strong>{" "}
        Report ethical violations as appropriate to maintain the integrity of
        JIRBDAI’s community and reputation.
      </p>

      <br />

      <p></p>
      <br />
      <p>
        For questions or concerns, contact:
        <span className="font-semibold text-curiousblue underline">
          editorial.office@jirbdai.com.ng
        </span>
      </p>
      <br />
      <br />
    </div>
  );
};

export default page;
