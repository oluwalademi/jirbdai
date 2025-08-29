import React from "react";
import TopBar from "@/components/TopBar";

const page = () => {
  return (
    <div className={"container px-4 text-black"}>
      <TopBar titleHeader={"Privacy Policy Overview"} />
      <br />
      <br />
      <p>
        The Journal of Institutional Research, Big Data Analytics and Innovation
        (JIRBDAI) is committed to protecting the privacy of authors, reviewers,
        readers, and visitors to our website. This policy outlines how personal
        information is collected, used, and safeguarded in accordance with
        applicable data protection regulations.
      </p>
      <br />

      <h3>1. Information We Collect</h3>
      <p>
        JIRBDAI may collect personal data such as name, email address,
        institutional affiliation, contact details, manuscript submissions, peer
        review records, and technical data (e.g., IP address, browser type).
        This information is collected either directly from users or
        automatically through website usage.
      </p>
      <br />
      <br />

      <h3>2. Use of Personal Information</h3>
      <p>
        We use your data to manage manuscript submissions and reviews,
        communicate editorial decisions, improve our services, and comply with
        legal obligations. JIRBDAI processes your information based on
        legitimate academic interest, your consent, or compliance with law.
      </p>
      <br />
      <br />

      <h3>3. Confidentiality and Data Security</h3>
      <p>
        All information submitted to JIRBDAI is treated as confidential. Only
        authorized personnel have access to personal and manuscript-related
        data. We use appropriate technical and organizational measures to
        protect your data from loss, misuse, and unauthorized access.
      </p>
      <br />
      <br />

      <h3>4. Sharing and Disclosure</h3>
      <p>
        JIRBDAI does not sell or rent your personal data. We may share data with
        third-party services for processing and publication support only when
        necessary and under strict confidentiality agreements. Your data may
        also be disclosed in response to legal obligations.
      </p>
      <br />
      <br />

      <h3>5. Cookies and Usage Data</h3>
      <p>
        Our website uses cookies for functional and analytical purposes. These
        help us understand how users interact with the site and improve the user
        experience. No personal targeting is conducted, and cookies can be
        disabled in your browser settings.
      </p>
      <br />
      <br />

      <h3>6. Data Retention</h3>
      <p>
        Personal information is retained only as long as necessary for editorial
        operations or to meet legal or regulatory obligations. Author and
        reviewer data may be archived for academic integrity and historical
        purposes.
      </p>
      <br />
      <br />

      <h3>7. Your Rights</h3>
      <p>
        You have the right to access, correct, or request deletion of your
        personal data. You may also restrict processing or object to our use of
        your data, subject to legal limitations. To exercise your rights,
        contact us at:
        <span className="font-semibold text-curiousblue underline">
          editorial.office@jirbdai.com.ng
        </span>
        .
      </p>
      <br />
      <br />

      <h3>8. Third-Party Links</h3>
      <p>
        Our website may contain links to external sites. JIRBDAI is not
        responsible for the content or privacy policies of those sites. Users
        should review external policies before submitting any data to them.
      </p>
      <br />
      <br />

      <h3>9. Policy Updates</h3>
      <p>
        JIRBDAI may update this Privacy Policy periodically. The latest version
        will be available on our website. Continued use of our site implies
        acceptance of any changes.
      </p>
      <br />
      <br />

      <h3>10. Contact Us</h3>
      <p>
        If you have questions about this policy or your personal information,
        please contact:
        <br />
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
