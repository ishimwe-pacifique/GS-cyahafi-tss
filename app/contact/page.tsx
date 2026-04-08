import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contact Us - GS Cyahafi TSS',
  description: 'Get in touch with GS Cyahafi TSS. We are here to help with any inquiries.',
};

export default function ContactPage() {
  return (
    <div className="w-full">
      <Navigation />

      {/* Hero Banner */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Have questions? We would love to hear from you. Send us a message
              and we will respond as soon as possible.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <Container>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Address Card */}
            <Card className="flex flex-col items-center text-center p-8 hover:shadow-lg transition-shadow">
              <div className="bg-secondary/20 p-4 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Address</h3>
              <p className="text-muted-foreground mb-2">
                Gitega, Nyarugenge District
              </p>
              <p className="text-muted-foreground">Kigali, Rwanda</p>
            </Card>

            {/* Phone Card */}
            <Card className="flex flex-col items-center text-center p-8 hover:shadow-lg transition-shadow">
              <div className="bg-secondary/20 p-4 rounded-full mb-4">
                <Phone className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Phone</h3>
              <p className="text-muted-foreground mb-2">+250 XXX XXX XXX</p>
              <p className="text-sm text-muted-foreground">
                Monday - Friday, 8:00 AM - 5:00 PM
              </p>
            </Card>

            {/* Email Card */}
            <Card className="flex flex-col items-center text-center p-8 hover:shadow-lg transition-shadow">
              <div className="bg-secondary/20 p-4 rounded-full mb-4">
                <Mail className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
              <p className="text-muted-foreground">info@gscyahafi.rw</p>
              <p className="text-sm text-muted-foreground">
                We respond within 24 hours
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-primary mb-2">
                Send us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we will get back to you soon.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+250 XXX XXX XXX"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="What is this about?"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary text-secondary-foreground py-3 rounded-lg font-bold text-lg hover:shadow-lg hover:scale-105 transition-all"
                >
                  Send Message
                </button>
              </form>
            </Card>
          </div>

          {/* Office Hours */}
          <div className="max-w-2xl mx-auto mt-20">
            <Card className="bg-muted p-8 md:p-12">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Office Hours
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>
                      <span className="font-semibold text-foreground">
                        Monday - Friday:{' '}
                      </span>
                      8:00 AM - 5:00 PM
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">
                        Saturday:{' '}
                      </span>
                      9:00 AM - 12:00 PM
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">
                        Sunday:{' '}
                      </span>
                      Closed
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
