import AnimatedSection from "@/components/AnimatedSection";

export default function RefundPolicy() {
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
            Refund <span className="gold-text-gradient">Policy</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection>
          <div className="glass-card p-8 md:p-12 rounded-lg space-y-8 text-muted-foreground text-sm leading-relaxed">
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Overview</h2>
              <p>The ADI Homes operates as a real estate consultancy and channel partner. We facilitate property transactions between buyers/investors and developers. This Refund Policy outlines the terms and conditions governing refunds for our services.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. Consultancy Services</h2>
              <p>Our consultancy services, including property search, site visits, market analysis, and investment guidance, are provided free of charge to buyers and investors. As no fees are collected for these services, no refund is applicable.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. Booking Amounts & Payments to Developers</h2>
              <p>Any booking amounts, token money, or payments made towards a property are paid directly to the respective developer. The ADI Homes does not collect or hold any property purchase payments. Refund of such amounts is subject to the developer's own cancellation and refund policy.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">4. Brokerage & Service Fees</h2>
              <p>In cases where a service fee or brokerage charge is applicable and has been communicated to the client in advance:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li><strong className="text-foreground">Before Property Booking:</strong> If you decide not to proceed before any booking is made, no service fee will be charged.</li>
                <li><strong className="text-foreground">After Property Booking:</strong> Once a property has been booked through our assistance, the service fee/brokerage is considered earned and is non-refundable.</li>
                <li><strong className="text-foreground">Cancellation by Developer:</strong> If the developer cancels the project or booking, we will assist you in obtaining a refund from the developer. Our service fee, if already paid, will be refunded in full.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">5. Refund Process</h2>
              <p>If you are eligible for a refund as per the conditions above:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Submit a written refund request to info@theadihomes.co.in with your transaction details.</li>
                <li>Refund requests will be processed within 15-30 business days after verification.</li>
                <li>Refunds will be credited to the original payment method used.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">6. Disputes</h2>
              <p>In case of any disputes regarding refunds, both parties agree to attempt resolution through mutual discussion. If unresolved, the dispute shall be subject to the jurisdiction of courts in Greater Noida, Uttar Pradesh, India.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">7. Contact Us</h2>
              <p>For refund-related queries, please reach out to:</p>
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
