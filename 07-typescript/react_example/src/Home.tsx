import { useState } from "react";
import { Button1, Button2 } from "./Button";

export default function Home() {
  const onClick = (test: string) => {
    return 5;
  };
  const icon = <i>i</i>;
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen flex justify-center">
      <Button1
        backgroundColor="red"
        fontSize={12}
        pillShape={false}
        padding={[2, 3]}
        borderRadius={{
          topLeft: 5,
          topRight: 5,
        }}
        onClick={onClick}
        setCount={setCount}
      >
        Click me {icon}
      </Button1>
      <Button2 type="submit" autoFocus={true} defaultValue="test" />
    </main>
  );
}
