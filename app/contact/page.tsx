import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact Data On Demand | Talk to Our Team",
  description:
    "Get in touch with the Data On Demand team. Explore our AI analytics platform and connect with Humanli AI.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="py-10 bg-gradient-to-b from-background to-muted/20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Get in touch</h1>
              <p className="text-xl text-muted-foreground">
                We'd love to hear from you. Connect with the Data On Demand
                team to learn more about our AI-powered data intelligence
                platform.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <MapPin className="h-7 w-7 text-primary mb-5" />

                  <h2 className="text-2xl font-bold mb-4">
                    Visit Humanli AI
                  </h2>

                  <address className="not-italic text-muted-foreground space-y-2">
                    <p>Data On Demand | Humanli AI</p>
                    <p>MIIC (MNIT), Jaipur, Rajasthan — 302017</p>
                  </address>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <Mail className="h-7 w-7 text-primary mb-5" />

                  <h2 className="text-2xl font-bold mb-4">
                    Contact our team
                  </h2>

                  <p className="text-muted-foreground mb-4">
                    For questions, product information, or general enquiries,
                    reach us at:
                  </p>

                  <a
                    href="mailto:contact@humanli.ai"
                    className="text-primary hover:underline font-medium"
                  >
                    contact@humanli.ai
                  </a>
                </CardContent>
              </Card>

              <Card className="md:col-span-2 bg-primary text-primary-foreground">
                <CardContent className="p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">
                      See Data On Demand in action
                    </h2>
                    <p className="opacity-90">
                      Explore the platform and discover how AI-powered data
                      intelligence can support your business.
                    </p>
                  </div>

                  <Button
                    asChild
                    variant="secondary"
                    size="lg"
                    className="shrink-0"
                  >
                    <a
                      href="https://dod.humanli.ai/login"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book a demo
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}