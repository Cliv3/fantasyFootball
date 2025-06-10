import React from "react";
import Footer from "../component/Footer";
import logoImage from "../assets/image/Logo.png";

const TermsAndCondition = () => {
  return (
     <div className="bg-black text-white min-h-screen">
                  <div>
                    {/* Header */}
                    <header className="flex justify-between items-center py-4 px-6">
                        <a href="/">
                            <img src={logoImage} alt="Fantasy Baller League Logo" className="h-10" />
                        </a>
                    </header>
                  </div> 
    <div className="p-6 max-w-4xl mx-auto text-sm md:text-base leading-7">
      <h1 className="text-2xl md:text-4xl font-bold mb-6">Fantasy Baller League – Terms and Conditions</h1>

      <div className="mb-4">
        <p>
          Welcome to the Fantasy Baller League app (“App”). By downloading, installing, or using the App, you (“User”, “you”) agree to the following Terms and Conditions (“Terms”). If you do not agree, do not use the App.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold">1. Purpose of the App</h2>
        <p>
          The Fantasy Baller League app is a fantasy sports platform created for entertainment and user engagement purposes. The App allows users to create teams, track players, compete with others, and interact with features that may include digital assets or blockchain elements.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold">2. No Affiliation with Baller League</h2>
        <p>
          We are not affiliated with, do not own the rights to, and do not claim any official partnership with the Baller League, its organisers, teams, players, sponsors, or intellectual property holders. All references to the Baller League are purely for descriptive and entertainment purposes. All trademarks and copyrights remain the property of their respective owners.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold">3. Use of Crypto or Digital Assets</h2>
        <ul className="list-disc pl-6">
          <li>
            Some features within this App may involve interaction with digital tokens or blockchain-based functionality (the “Digital Assets”). These features are optional and may be subject to limitations or restrictions based on your local jurisdiction.
          </li>
          <li>
            We do not sell or promote any cryptocurrency or token as an investment. This is not a trading app.
          </li>
          <li>
            This app does not constitute a financial promotion under the UK Financial Services and Markets Act 2000.
          </li>
          <li>
            We are not registered with the UK Financial Conduct Authority (FCA) or any other regulatory body in any jurisdiction as a financial services provider.
          </li>
          <li>
            Users are solely responsible for compliance with their local laws regarding the use of crypto or blockchain services.
          </li>
          <li>
            Access to crypto features may be disabled or limited in certain jurisdictions due to regulatory restrictions.
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold">4. Eligibility</h2>
        <p>
          You must be at least 18 years old (or the age of majority in your country) to use this App. By using this App, you confirm that you meet this requirement.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold">5. No Guarantee of Accuracy</h2>
        <p>
          Fantasy scores and player data are derived from publicly available sources and/or community submissions. We do not guarantee the accuracy, completeness, or real-time delivery of this data. Your use of the App is at your own risk.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold">6. Liability Disclaimer</h2>
        <p>
          The App is provided “as is” and “as available.” To the maximum extent permitted by law, we disclaim all warranties—express or implied—including but not limited to merchantability, fitness for a particular purpose, and non-infringement.
        </p>
        <ul className="list-disc pl-6">
          <li>Losses from inaccurate fantasy scoring</li>
          <li>Missed earnings, prizes, or performance-based outcomes</li>
          <li>Any financial losses linked to Digital Assets or tokens</li>
          <li>User error in blockchain transactions</li>
          <li>App downtime, bugs, or malfunctions</li>
        </ul>
        <p>You acknowledge that all use of this App is at your own risk.</p>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold">7. User Conduct</h2>
        <ul className="list-disc pl-6">
          <li>Not use the App for illegal or fraudulent activity</li>
          <li>Not interfere with the App’s infrastructure</li>
          <li>Not attempt to extract or reverse-engineer proprietary software or logic</li>
          <li>Not impersonate others or misrepresent your identity</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold">8. Intellectual Property</h2>
        <p>
          All original content, code, and branding of the App—excluding any Baller League-related references—are the exclusive property of Fantasy Baller League.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold">9. Termination</h2>
        <p>
          We reserve the right to terminate or suspend access to the App at our sole discretion, with or without notice, including for violations of these Terms.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold">10. Governing Law</h2>
        <p>
          These Terms are governed by the laws of England and Wales, without regard to conflict of law provisions. Any dispute arising from or relating to these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold">11. Updates to Terms</h2>
        <p>
          We reserve the right to update these Terms at any time. Continued use of the App after such changes constitutes acceptance of the new Terms.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold">12. Contact</h2>
        <p>
          For questions, complaints, or legal concerns, contact: <a href="mailto:ballerleaguefantasy@gmail.com" className="text-blue-600">ballerleaguefantasy@gmail.com</a>
        </p>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default TermsAndCondition;
