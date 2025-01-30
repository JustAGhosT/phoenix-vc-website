import { Card, Button, Input, TextArea } from '@phoenix-vc/design-system';

export default function ContactPage() {
  return (
    <div>
      <header>
        <h1>Contact Us</h1>
      </header>
      <main>
        <Card>
          <h2>Get in Touch</h2>
          <form>
            <div>
              <label htmlFor="name">Name</label>
              <Input id="name" type="text" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Input id="email" type="email" placeholder="Your Email" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <TextArea id="message" placeholder="Your Message" />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </Card>
      </main>
    </div>
  );
}
