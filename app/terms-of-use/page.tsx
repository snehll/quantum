// src/app/terms-of-use/page.tsx
import AnimatedSection from "@/components/AnimatedSection";

export const metadata = { title: "Terms of Use | QUANTUM EUROPE" };

export default function TermsOfUse() {
  return (
    <>
      {/* HERO – Matches Products Section Style */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-emerald-400 via-emerald-300 to-emerald-500" />
        <div className="absolute inset-0 bg-linear-to-tr from-emerald-400/20 via-transparent to-emerald-600/20" />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative container mx-auto px-6 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Terms of Use
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-4xl mx-auto drop-shadow-lg">
            QUANTUM EUROPE SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <AnimatedSection>
            <div className="prose prose-lg prose-emerald max-w-none text-slate-700">
              <p className="text-sm text-slate-500 mb-12">
                Last updated: March 23rd, 2026.
              </p>

              <h2 className="text-3xl font-bold text-emerald-900 mt-12 mb-6">1. Introduction</h2>
              <p>
                These Terms of Use (“Terms”) govern your access to and use of the website{" "}
                <a href="https://quantum-eur.pl" className="text-emerald-600 hover:text-emerald-700 font-medium">https://quantum-eur.pl</a>{" "}
                (the “Website”), operated by QUANTUM EUROPE Spółka z ograniczoną odpowiedzialnością (the “Company”, “we”, “us”, or “our”).
              </p>
              <p>
                By accessing or using the Website, you agree to be bound by these Terms. If you do not agree, you must not use the Website.
              </p>

              <h2 className="text-3xl font-bold text-emerald-900 mt-12 mb-6">2. Nature of the Website</h2>
              <p>
                The Website is provided for informational and business communication purposes only. It presents general information about the Company’s services, including international logistics, procurement, and industrial equipment supply.
              </p>
              <p>
                Nothing on this Website constitutes a binding offer to sell goods or services. Any engagement between the Company and a client shall be subject to a separate written agreement.
              </p>

              <h2 className="text-3xl font-bold text-emerald-900 mt-12 mb-6">3. Use of the Website</h2>
              <p>You agree to use the Website only for lawful purposes and in a manner that does not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>violate applicable laws or regulations (including EU and Polish law);</li>
                <li>infringe the rights of the Company or third parties;</li>
                <li>interfere with or disrupt the operation or security of the Website.</li>
              </ul>
              <p>
                We reserve the right to restrict or terminate access to the Website at any time without notice.
              </p>

              <h2 className="text-3xl font-bold text-emerald-900 mt-12 mb-6">4. No Professional or Technical Advice</h2>
              <p>
                All content on the Website is provided for general informational purposes only and does not constitute professional, technical, engineering, or commercial advice.
              </p>
              <p>
                Any decisions regarding procurement, logistics, or equipment use should be based on independent evaluation and formal contractual arrangements.
              </p>

              <h2 className="text-3xl font-bold text-emerald-900 mt-12 mb-6">5. Intellectual Property and Third-Party Materials</h2>
              <p>
                All content on the Website, including text, layout, design elements, and graphics, is owned by or licensed to the Company unless otherwise indicated.
              </p>
              <p>
                The Website may display trademarks, logos, and brand names of third-party manufacturers (including but not limited to industrial equipment producers). Such trademarks and logos are the property of their respective owners and are used solely for identification and informational purposes.
              </p>
              <p>
                The Company is not affiliated with, endorsed by, or an official distributor of such third-party brands unless explicitly stated.
              </p>
              <p>
                You may not reproduce, distribute, modify, or otherwise use Website content without prior written consent from the Company, except as permitted by applicable law.
              </p>

              <h2 className="text-3xl font-bold text-emerald-900 mt-12 mb-6">6. Accuracy of Information</h2>
              <p>
                While we aim to ensure that the information on the Website is accurate and up to date, we make no representations or warranties, express or implied, regarding:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>completeness, accuracy, or reliability of the content;</li>
                <li>availability of products or services;</li>
                <li>timelines, delivery speeds, or logistics performance;</li>
                <li>suitability of any solutions for specific purposes.</li>
              </ul>
              <p>
                All specifications, delivery timeframes (including statements such as “24–72h” or “within 4 hours”), and performance-related descriptions are indicative only and subject to confirmation in a separate binding agreement.
              </p>

              <h2 className="text-3xl font-bold text-emerald-900 mt-12 mb-6">7. No Warranties</h2>
              <p>
                To the fullest extent permitted by applicable law, the Website and its content are provided on an “as is” and “as available” basis.
              </p>
              <p>The Company does not guarantee that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>the Website will be uninterrupted or error-free;</li>
                <li>the Website will be secure or free from harmful components;</li>
                <li>any described services will achieve specific commercial or operational outcomes.</li>
              </ul>

              <h2 className="text-3xl font-bold text-emerald-900 mt-12 mb-6">8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, the Company shall not be liable for any indirect, incidental, consequential, or special damages, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>loss of profits;</li>
                <li>loss of contracts or business opportunities;</li>
                <li>operational delays or downtime;</li>
                <li>loss of data;</li>
              </ul>
              <p>arising out of or in connection with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>the use of or inability to use the Website;</li>
                <li>reliance on information presented on the Website.</li>
              </ul>

              <h2 className="text-3xl font-bold text-emerald-900 mt-12 mb-6">9. Services and Commercial Terms</h2>
              <p>Descriptions of services on the Website, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>air, sea, and intermodal transportation;</li>
                <li>heavy and oversized logistics;</li>
                <li>turnkey procurement;</li>
                <li>customs and documentation support;</li>
                <li>project logistics;</li>
              </ul>
              <p>are for informational purposes only.</p>
              <p>
                Any specific obligations, service levels, timelines, certifications, or guarantees shall be defined exclusively in separate written agreements between the Company and the client.
              </p>
              <p>
                Any references to “quality guaranteed”, “on-time delivery”, “full compliance”, or similar statements are indicative and do not constitute legally binding guarantees unless expressly agreed in writing.
              </p>

              <h2 className="text-3xl font-bold text-emerald-900 mt-12 mb-6">10. Logistics and International Trade Disclaimer</h2>
              <p>Logistics and international trade services may involve:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>third-party carriers and subcontractors;</li>
                <li>customs authorities and regulatory bodies;</li>
                <li>cross-border compliance requirements.</li>
              </ul>
              <p>
                The Company does not assume responsibility beyond the scope expressly agreed in a separate contract.
              </p>
              <p>
                Transport of oversized, complex, or regulated goods may be subject to additional legal and operational risks.
              </p>

              <h2 className="text-3xl font-bold text-emerald-900 mt-12 mb-6">11. Third-Party Links and Services</h2>
              <p>
                The Website may reference or link to third-party products, services, or platforms. The Company does not control and is not responsible for such third parties or their content.
              </p>
              <p>Any interaction with third parties is solely between you and the respective third party.</p>

              <h2 className="text-3xl font-bold text-emerald-900 mt-12 mb-6">12. Personal Data</h2>
              <p>
                By submitting information through the Website (including contact forms), you acknowledge that you have read and understood the Privacy Policy and consent to the processing of your personal data in accordance with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>the General Data Protection Regulation (EU) 2016/679 (“GDPR”);</li>
                <li>applicable Polish data protection laws.</li>
              </ul>

              <h2 className="text-3xl font-bold text-emerald-900 mt-12 mb-6">13. Indemnification</h2>
              <p>You agree to indemnify and hold harmless the Company from any claims, damages, losses, or expenses arising out of:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>your misuse of the Website;</li>
                <li>your violation of these Terms;</li>
                <li>your infringement of any third-party rights.</li>
              </ul>

              <h2 className="text-3xl font-bold text-emerald-900 mt-12 mb-6">14. Changes to the Terms</h2>
              <p>
                We may update these Terms from time to time. Any changes will be published on this page and will take effect upon publication.
              </p>
              <p>Your continued use of the Website constitutes acceptance of the updated Terms.</p>

              <h2 className="text-3xl font-bold text-emerald-900 mt-12 mb-6">15. Governing Law and Jurisdiction</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the Republic of Poland.
              </p>
              <p>
                Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts of Warsaw, Poland.
              </p>

              <h2 className="text-3xl font-bold text-emerald-900 mt-12 mb-6">16. Contact Information</h2>
              <p>If you have any questions regarding these Terms, you may contact us at:</p>
              <p className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <strong>QUANTUM EUROPE Spółka z ograniczoną odpowiedzialnością</strong>
                <br />
                Plac Bankowy 2, lok. 1309
                <br />
                00-095 Warszawa, Poland
                <br />
                NIP: 5253064961
                <br />
                Email: <a href="mailto:witamy@quantum-eur.pl" className="text-emerald-600 hover:text-emerald-700">witamy@quantum-eur.pl</a>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
