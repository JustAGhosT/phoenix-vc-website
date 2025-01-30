import { Button, Card } from '@phoenix-vc/design-system';

export default function HomePage() {
  return (
    <div>
      <header>
        <h1>Welcome to Phoenix VC</h1>
      </header>
      <main>
        <Card>
          <h2>Our Mission</h2>
          <p>We invest in the future of technology.</p>
        </Card>
        <Button>Learn More</Button>
      </main>
    </div>
  );
}
