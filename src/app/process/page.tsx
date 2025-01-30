import { Card, Button } from '@phoenix-vc/design-system';

export default function ProcessPage() {
  return (
    <div>
      <header>
        <h1>Our Investment Process</h1>
      </header>
      <main>
        <Card>
          <h2>Step 1: Initial Screening</h2>
          <p>We evaluate the potential of the startup.</p>
        </Card>
        <Card>
          <h2>Step 2: Due Diligence</h2>
          <p>We conduct a thorough analysis of the business.</p>
        </Card>
        <Card>
          <h2>Step 3: Investment Decision</h2>
          <p>We decide whether to invest in the startup.</p>
        </Card>
        <Button>Contact Us</Button>
      </main>
    </div>
  );
}
