import { Card, Button, Input, TextArea } from '@phoenix-vc/design-system';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
          Contact Us
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Ready to discuss your next venture? We&apos;d love to hear from you.
        </p>
      </header>
      <main className="max-w-2xl mx-auto">
        <Card className="p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <Input id="name" type="text" placeholder="Your Name" className="w-full" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <Input id="email" type="email" placeholder="Your Email" className="w-full" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <TextArea id="message" placeholder="Tell us about your project or investment opportunity" className="w-full min-h-[150px]" />
            </div>
            <Button type="submit" variant="primary" className="w-full">
              Send Message
            </Button>
          </form>
        </Card>
      </main>
    </div>
  );
}
