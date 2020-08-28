import React from "react";
import { Counter } from "../components/Counter/Counter";
import { SomethingElse } from "../components/SomethingElse/SomethingElse";

export function CounterPage() {
  return (
    <div>
      <h1>Counter Page</h1>
      <Counter />
      <SomethingElse />
    </div>
  );
}
