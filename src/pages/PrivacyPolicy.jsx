import React from "react";
import Footer from "../component/Footer";
import logoImage from "../assets/image/Logo.png";
import { FaEnvelope } from "react-icons/fa6";


const PrivacyPolicy = () => {
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
        
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy for Fantasy Baller League</h1>
      <p className="mb-6">Effective Date: 07/06/24</p>

      <p className="mb-6">
        Fantasy Baller League (“we”, “our”, or “us”) is committed to protecting your
        privacy. This Privacy Policy explains how we collect, use, and protect your
        personal information when you use our mobile application (the “App”).
      </p>

      <div className="mb-4">
        <h2 className="font-semibold mb-2">1. What Data We Collect</h2>
        <ul className="list-disc pl-5">
          <li>Email address</li>
        </ul>
        <p>
          This email is used as your unique username and to enable you to participate in our fantasy football experience.
        </p>
        <p>
          We do not collect your name, phone number, location data, or any payment or financial information.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold mb-2">2. How We Use Your Data</h2>
        <ul className="list-disc pl-5">
          <li>Create and manage your Fantasy Baller League account</li>
          <li>Authenticate your login</li>
          <li>Allow access to the gameplay experience</li>
        </ul>
        <p>
          We do not use your data for marketing, profiling, or third-party advertising.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold mb-2">3. Data Sharing</h2>
        <p>
          We do not sell or share your data with third parties. We may share data only if
          required by law, court order, or legal process.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold mb-2">4. Data Storage & Security</h2>
        <p>
          Your data is stored securely using industry-standard encryption methods. We take
          appropriate security measures to prevent unauthorised access, disclosure,
          alteration, or destruction of your data.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold mb-2">5. User Rights</h2>
        <ul className="list-disc pl-5">
          <li>Access the data we hold about you</li>
          <li>Request correction or deletion of your data</li>
          <li>Withdraw your consent and delete your account at any time</li>
        </ul>
        <p className="mt-2">
          To make any of these requests, please contact us at:
        </p>
        <p className="flex gap-2 items-center">
            <FaEnvelope color="#06FF8B"/>
            ballerleaguefantasy@gmail.com
        </p>
        <p>We aim to respond to all requests within 14 days.</p>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold mb-2">6. Children’s Privacy</h2>
        <p>
          This app is not intended for use by individuals under the age of 17. We do not
          knowingly collect data from anyone under this age.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold mb-2">7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Updates will be posted
          within the app and the effective date will be revised accordingly.
        </p>
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
