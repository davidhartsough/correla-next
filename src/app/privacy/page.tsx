import type { Metadata } from "next";
import { getBasicMeta } from "@/metadata-utils";
import BasePageLayout from "@/components/BasePageLayout";
import "./privacy.css";

export const metadata: Metadata = getBasicMeta(
  "Privacy Policy",
  "privacy",
  "The privacy policy document for Correla explains what information we collect, why we collect it, how we collect it, how we use it, and more."
);

export default function Privacy() {
  return (
    <BasePageLayout title="Privacy Policy">
      <article id="privacy-policy" className="mb-8">
        <p>
          This privacy policy for Correla (&quot;we&quot;, &quot;us&quot;, or
          &quot;our&quot;) explains how and why we collect, store, and use your
          information when you use our website and application services
          (&quot;website&quot;, &quot;application&quot;, &quot;services&quot;).
        </p>
        <p>Contents:</p>
        <ol>
          <li>
            <a href="#what-we-collect">What we collect</a>
          </li>
          <li>
            <a href="#why-we-collect-it">Why we collect it</a>
          </li>
          <li>
            <a href="#how-we-collect-it">How we collect it</a>
          </li>
          <li>
            <a href="#how-we-use-it">How we use it</a>
          </li>
          <li>
            <a href="#how-we-store-it">How we store it</a>
          </li>
          <li>
            <a href="#how-we-secured-it">How we secured it</a>
          </li>
          <li>
            <a href="#how-long-we-retain-it">How long we retain it</a>
          </li>
          <li>
            <a href="#who-has-access-to-it">Who has access to it</a>
          </li>
          <li>
            <a href="#how-you-can-manage-it">How you can manage it</a>
          </li>
          <li>
            <a href="#what-your-rights-are">What your rights are</a>
          </li>
          <li>
            <a href="#how-to-handle-other-websites">
              How to handle other websites
            </a>
          </li>
          <li>
            <a href="#how-we-update-this-policy">How we update this policy</a>
          </li>
          <li>
            <a href="#how-to-contact-us">How to contact us</a>
          </li>
        </ol>
        <h2 id="what-we-collect">What we collect</h2>
        <p>
          We may collect personal identification information, including your:
        </p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
        </ul>
        <h2 id="why-we-collect-it">Why we collect it</h2>
        <p>We collect your data so that we can:</p>
        <ul>
          <li>Manage your account</li>
          <li>Help you build your profile</li>
        </ul>
        <h2 id="how-we-collect-it">How we collect it</h2>
        <p>
          We collect this data either directly from you or our third party auth
          platforms, including Google.
        </p>
        <p>You directly provide us with the data we collect.</p>
        <p>We collect data when you:</p>
        <ul>
          <li>Create an account via Google Sign In</li>
          <li>Fill out forms within the application</li>
        </ul>
        <h2 id="how-we-use-it">How we use it</h2>
        <p>Your name and email is used for a few essential purposes.</p>
        <p>Your name may be used for the following purposes:</p>
        <ul>
          <li>
            <strong>Profile suggestions</strong>: Your name will be used as a
            suggestion for your potential username and the potential name you
            could use in your profile.
          </li>
          <li>
            <strong>Personalization</strong>: Our services will refer to you by
            your name to ensure you know which account is currently logged in.
          </li>
          <li>
            <strong>Social interaction</strong>: When interacting with other
            users, your name may be visible to them in select areas of the
            application.
          </li>
        </ul>
        <p>Your email may be used for the following purposes:</p>
        <ul>
          <li>
            <strong>Notifications</strong>: You may opt in to receive
            informative notification emails that assist in the functionality of
            the application&#39;s services.
          </li>
          <li>
            <strong>Updates</strong>: You may opt in to receive email updates on
            key changes to the application&#39;s services, including new
            features and functionality.
          </li>
          <li>
            <strong>Requests</strong>: If you email us a request and provide us
            with consent, then we may use your email to assist you with
            fulfilling your request, such as retrieving or deleting your account
            and its data.
          </li>
        </ul>
        <h2 id="how-we-store-it">How we store it</h2>
        <p>
          We securely store your data in databases located in Portland, USA.
        </p>
        <h2 id="how-we-secured-it">How we secured it</h2>
        <p>
          We protect your data in our databases by enforcing strict safeguards
          that ensure your data is secure and to prevent unauthorized access.
        </p>
        <h2 id="how-long-we-retain-it">How long we retain it</h2>
        <p>
          We will keep your account data for only as long as is necessary to
          provide you with the services you request from the website and
          application.
        </p>
        <h2 id="who-has-access-to-it">Who has access to it</h2>
        <h3>Database access</h3>
        <p>
          Your data is stored securely in a database that is only accessible to
          the webmasters as anonymized, serialized, and otherwise encrypted
          data. Anyone with this access is subject to strict contractual and
          legal confidentiality obligations.
        </p>
        <h3>In-app access</h3>
        <p>
          From within the application, you may put any name on your profile, and
          thus whatever name you use will be accessible to other users who view
          your profile.
        </p>
        <h3>Company access</h3>
        <p>We do NOT share your data with any other companies.</p>
        <h2 id="how-you-can-manage-it">How you can manage it</h2>
        <p>
          You may manage your data either directly from the website application
          or by emailing us your request.
        </p>
        <p>
          Within the application you may update or delete any account data you
          wish at any time, including the option to completely delete your
          entire account and all of its data.
        </p>
        <p>
          You may also email us to correct, delete, or request access to any
          personal information that you have provided to us.
        </p>
        <p>
          Upon your request, we can delete your data at any time for you by
          completely removing it from our databases.
        </p>
        <h2 id="what-your-rights-are">What your rights are</h2>
        <p>
          Every user is entitled to the following data protection rights to:
        </p>
        <ul>
          <li>
            <strong>Access</strong>: You have the right to request copies of
            your personal data.
          </li>
          <li>
            <strong>Rectification</strong>: You have the right to request that
            we correct any information you believe is inaccurate. You also have
            the right to request for us to help you complete the information you
            believe is incomplete.
          </li>
          <li>
            <strong>Erasure</strong>: You have the right to request that we
            erase your personal data, under certain conditions.
          </li>
          <li>
            <strong>Restrict processing</strong>: You have the right to request
            that we restrict the processing of your personal data, under certain
            conditions.
          </li>
          <li>
            <strong>Object to processing</strong>: You have the right to object
            to our processing of your personal data, under certain conditions.
          </li>
          <li>
            <strong>Data portability</strong>: You have the right to request
            that we transfer the data that we have collected to another
            organization, or directly to you, under certain conditions.
          </li>
        </ul>
        <p>
          If you make a request, we have one month to respond to you. If you
          would like to exercise any of these rights, please contact us at our
          email:{" "}
          <a href="mailto:correla@gmail.com" target="_blank" rel="noreferrer">
            correla@gmail.com
          </a>
        </p>
        <h2 id="how-to-handle-other-websites">How to handle other websites</h2>
        <p>
          Our website may contain links to other websites. Our privacy policy
          applies only to our website, so if you click on a link and go to
          another website, you should read their privacy policy. These external
          sites are not operated by us. We have no control over and assume no
          responsibility for the content, privacy policies, or practices of any
          third-party sites or services.
        </p>
        <h2 id="how-we-update-this-policy">How we update this policy</h2>
        <p>
          We keep our privacy policy under regular review and place any updates
          on this web page. We may update our Privacy Policy from time to time.
          Please revisit this page periodically to review any changes we have
          posted here.
        </p>
        <p>This privacy policy was last updated on 24 June 2023.</p>
        <h2 id="how-to-contact-us">How to contact us</h2>
        <p>
          If you have any questions about our privacy policy or the data we hold
          on you, or if you would like to exercise one of your data protection
          rights, please do not hesitate to contact us.
        </p>
        <p>
          Email us at:{" "}
          <a href="mailto:correla@gmail.com" target="_blank" rel="noreferrer">
            correla@gmail.com
          </a>
        </p>
      </article>
    </BasePageLayout>
  );
}
