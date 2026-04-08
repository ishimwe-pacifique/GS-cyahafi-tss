import { Container } from '../layout/Container';

export function LocationSection() {
  const contactInfo = [
    { label: 'Address', value: 'Gitega, Nyarugenge District\nKigali, Rwanda' },
    { label: 'Phone', value: '+250 XXX XXX XXX' },
    { label: 'Email', value: 'info@gscyahafi.rw' },
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Us Today</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Located in the heart of Gitega, Nyarugenge District, Kigali
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="bg-primary-foreground/10 backdrop-blur rounded-xl p-6"
              >
                <h3 className="font-semibold text-lg mb-2">{info.label}</h3>
                <p className="text-primary-foreground/90 whitespace-pre-line">
                  {info.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
