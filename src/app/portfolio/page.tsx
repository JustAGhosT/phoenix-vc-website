import { Card, Button } from '@phoenix-vc/design-system';

export default function PortfolioPage() {
  return (
    <div>
      <header>
        <h1>Our Portfolio</h1>
      </header>
      <main>
        <Card>
          <h2>Investment 1</h2>
          <p>Description of investment 1.</p>
        </Card>
        <Card>
          <h2>Investment 2</h2>
          <p>Description of investment 2.</p>
        </Card>
        <Button>Contact Us</Button>
      </main>
    </div>
  );
}
