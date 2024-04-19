import { Button, Card, Text } from "@shaheershukur/react-ui-components";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-8">
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
