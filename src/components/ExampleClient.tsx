"use client";
import { Button } from "./ui/button";

const ExampleClient = () => {
  const handleClick = () => {
    alert("Hello World");
  };

  return (
    <div>
      <h1>Example Client</h1>
      <Button onClick={handleClick}>Click me</Button>
    </div>
  );
};

export default ExampleClient;
