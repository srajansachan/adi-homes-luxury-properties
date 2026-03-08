import AnimatedSection from "@/components/AnimatedSection";

export default function PrivacyPolicy() {
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
            Privacy <span className="gold-text-gradient">Policy</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection>
          <div className="glass-card p-8 md:p-12 rounded-lg space-y-8 text-muted-foreground text-sm leading-relaxed">
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
              <p>The ADI Homes ("we," "our," or "us") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website theadihomes.co.in or interact with our services.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
              <p className="mb-2">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong className="text-foreground">Personal Information:</strong> Name, email address, phone number, and any other details you voluntarily provide through our contact forms or enquiry submissions.</li>
                <li><strong className="text-foreground">Usage Data:</strong> Information about how you access and use our website, including IP address, browser type, pages visited, time spent on pages, and referring URLs.</li>
                <li><strong className="text-foreground">Cookies:</strong> We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>To respond to your enquiries and provide real estate consultation services.</li>
                <li>To send you property updates, newsletters, and promotional materials (with your consent).</li>
                <li>To improve our website, services, and customer experience.</li>
                <li>To comply with legal obligations and protect our rights.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">4. Information Sharing</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted partners and service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">5. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">6. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information. You may also opt out of receiving marketing communications at any time by contacting us at info@theadihomes.co.in.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">7. Changes to This Policy</h2>
              <p>We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated effective date.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">8. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
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
