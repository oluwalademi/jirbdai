import React from "react";
import TopBar from "@/components/TopBar";

const page = () => {
  return (
    <div className={"container px-4 text-black"}>
      <TopBar titleHeader={"JIRBDAI Terms of Use"} />
      <br />
      <br />
      <p>
        Welcome to the Journal of Institutional Research, Big Data Analytics and
        Innovation (JIRBDAI) website. Your access and use of our publications,
        materials, and features are subject to these Terms of Use. By using our
        site, you agree to comply with these terms.
      </p>
      <br />

      <h3>1. Authorized Users</h3>
      <p>
        Authorized users include authors, reviewers, editors, learners, and
        subscribers with legitimate access rights. Access is granted for
        research, educational, or personal scholarly use within academic or
        institutional environments.
      </p>
      <br />
      <br />

      <h3>2. Permitted Uses</h3>
      <p>
        You may read, download, and print published articles for personal or
        educational purposes. Sharing within your institution — such as through
        course reserves or inter-library loan — is allowed. No automated
        scraping, mass downloading, or redistribution is permitted.
      </p>
      <br />
      <br />

      <h3>3. Restrictions</h3>
      <p>
        You must not share login credentials, bypass access controls, post
        content on external servers or P2P networks, or use bots to harvest
        content. Any unauthorized activity may result in access termination and
        other legal actions.
      </p>
      <br />
      <br />

      <h3>4. Access for Institutions</h3>
      <p>
        Institutional subscribers may share content within their organization —
        including students, staff, and faculty — via established internal
        systems. Walk-in access for on-site visitors is also permitted where
        applicable.
      </p>
      <br />
      <br />

      <h3>5. Personal vs. Institutional Use</h3>
      <p>
        Individual account holders may use content for personal and scholarly
        purposes but may not share it with others externally. Institutional use
        is bounded by the terms above.
      </p>
      <br />
      <br />

      <h3>6. Copyright and Intellectual Property</h3>
      <p>
        All materials on this site are protected by copyright. Downloading does
        not transfer ownership. Any reproduction, distribution, or modification
        must adhere to copyright laws and granted licensing agreements.
      </p>
      <br />
      <br />

      <h3>7. Archiving and Perpetual Access</h3>
      <p>
        Subscribers maintain access to published content for the duration of
        their subscription and may retain archived copies from the subscribed
        period. After expiration, only publicly available content may be
        accessed.
      </p>
      <br />
      <br />

      <h3>8. Security and Account Integrity</h3>
      <p>
        Users must secure their login credentials and notify us immediately of
        any breach. Sharing credentials is strictly forbidden.
      </p>
      <br />
      <br />

      <h3>9. Compliance and Enforcement</h3>
      <p>
        Violations of these Terms may result in suspension or termination of
        access, legal action, and revocation of publication rights within
        JIRBDAI.
      </p>
      <br />
      <br />

      <h3>10. Changes to Terms</h3>
      <p>
        We may update these Terms periodically. Continued use of this site after
        changes implies your agreement. The current version is always available
        here.
      </p>
      <br />
      <br />

      <h3>11. Contact Information</h3>
      <p>
        Questions or concerns about these Terms can be directed to:
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
