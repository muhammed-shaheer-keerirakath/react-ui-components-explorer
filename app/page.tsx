import { Button, Card } from "@shaheershukur/react-ui-components";

export default function Home() {
  return (
    <div>
      <Card skin="outlined" roundness="large">
        <Button skin="primary" size="large">
          Button
        </Button>
        <Button skin="secondary" size="medium">
          Button
        </Button>
        <Button skin="danger" size="small">
          Button
        </Button>
      </Card>
    </div>
  );
}
