import AnimatedSection from "@/components/AnimatedSection";

export default function Disclaimer() {
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
            <span className="gold-text-gradient">Disclaimer</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection>
          <div className="glass-card p-8 md:p-12 rounded-lg space-y-8 text-muted-foreground text-sm leading-relaxed">
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">General Disclaimer</h2>
              <p>The information provided on theadihomes.co.in is for general informational purposes only. While The ADI Homes strives to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">Property Listings</h2>
              <p>All property details, including but not limited to pricing, floor plans, specifications, amenities, images, and availability, are provided by respective developers and are subject to change without prior notice. The ADI Homes does not own or develop any of the properties listed and acts solely as a real estate consultant and channel partner.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">No Financial Advice</h2>
              <p>Nothing on this website constitutes professional financial, investment, legal, or tax advice. Any references to potential returns, appreciation, or investment performance are estimates based on market trends and do not guarantee actual results. We strongly recommend consulting with qualified professionals before making any investment decisions.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">Images & Renderings</h2>
              <p>All images, 3D renders, and artistic impressions used on this website are for illustrative purposes only and may not represent the actual property or its surroundings. The actual product may vary from what is depicted.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">RERA Compliance</h2>
              <p>All properties promoted through The ADI Homes are RERA-registered projects. Buyers are advised to verify RERA registration numbers and project details on the official RERA website of the respective state before making any purchase decisions.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">Third-Party Content</h2>
              <p>This website may contain links to external websites or third-party content. The ADI Homes is not responsible for the content, accuracy, or practices of any third-party websites and does not endorse them.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">Limitation of Liability</h2>
              <p>In no event shall The ADI Homes be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, arising out of or in connection with the use of this website or reliance on any information provided herein.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">Contact</h2>
              <p>If you have any concerns about the content on this website, please contact us at:</p>
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
