import AnimatedSection from "@/components/AnimatedSection";

export default function Terms() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-6 lg:px-10 max-w-4xl">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold/40" />
            <span className="text-gold text-[12px] font-medium tracking-[0.3em] uppercase">Legal</span>
            <div className="h-px w-8 bg-gold/40" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-10">
            Terms & <span className="gold-text-gradient">Conditions</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection>
          <div className="glass-card p-8 md:p-12 rounded-lg space-y-8 text-muted-foreground text-sm leading-relaxed">
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using the website of The ADI Homes (theadihomes.co.in), you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or services.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. Services</h2>
              <p>The ADI Homes provides real estate consultancy and brokerage services in Greater Noida West and surrounding areas. We act as intermediaries between property buyers/investors and developers. We do not own, develop, or construct any properties listed on our website.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. Property Information</h2>
              <p>While we strive to provide accurate and up-to-date information about properties, prices, specifications, and availability, all such information is subject to change without notice. The ADI Homes does not guarantee the accuracy, completeness, or timeliness of property listings.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">4. No Guarantee of Returns</h2>
              <p>Any projections, estimates, or statements regarding potential returns on investment are for informational purposes only and do not constitute financial advice. Real estate investments carry inherent risks, and past performance is not indicative of future results.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">5. User Obligations</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>You agree to provide accurate and truthful information when submitting enquiries or forms.</li>
                <li>You shall not use our website for any unlawful or unauthorized purpose.</li>
                <li>You agree not to reproduce, duplicate, or exploit any portion of our website without express written permission.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">6. Intellectual Property</h2>
              <p>All content on this website, including text, images, logos, graphics, and design, is the property of The ADI Homes and is protected by applicable copyright and trademark laws. Unauthorized use of any content is strictly prohibited.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">7. Limitation of Liability</h2>
              <p>The ADI Homes shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of our website or services. Our total liability shall not exceed the amount paid by you for our services, if any.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">8. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of any third-party sites.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">9. Governing Law</h2>
              <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Greater Noida, Uttar Pradesh.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">10. Contact</h2>
              <p>For any questions regarding these Terms and Conditions, please contact us at:</p>
              <p className="mt-2">
                <strong className="text-foreground">The ADI Homes</strong><br />
                Email: info@theadihomes.co.in<br />
                Phone: +91 9958004587<br />
                Address: Greater Noida West, UP, India
              </p>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
