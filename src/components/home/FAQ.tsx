import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "On average, branding projects take 4-6 weeks, while web design projects can range from 8-12 weeks. We provide a detailed timeline and keep you informed throughout the project."
    },
    {
      question: "What is the cost of working with you?",
      answer: "Our pricing varies based on project scope and requirements. We offer transparent pricing with no hidden fees. Contact us for a detailed quote tailored to your specific needs."
    },
    {
      question: "How involved will I be in the process?",
      answer: "We believe in collaborative design. You'll be involved in key decision points, reviews, and feedback sessions. We use tools like Slack, Trello, or Notion to ensure seamless communication throughout the project."
    },
    {
      question: "Can you work with my existing brand?",
      answer: "Absolutely! We can work with your existing brand guidelines or help evolve and enhance your current brand identity. We adapt our process to fit your needs and brand requirements."
    }
  ];

  return (
    <section className="py-24 bg-muted/30" style={{ fontFamily: 'Sansation, sans-serif' }}>
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your questions, answered
          </h2>
          <p className="text-xl text-text-subtitle">
            Whether you're a new client or a long-time partner, we're here to help. Below are answers to the most common questions.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 hover:border-primary/50 transition-colors"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-text-subtitle pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};