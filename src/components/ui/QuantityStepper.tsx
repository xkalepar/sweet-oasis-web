import * as React from "react";

type Props = {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
};

export default function QuantityStepper({ value, onChange, min = 1, max = 99 }: Props) {
  const dec = React.useCallback(() => onChange(Math.max(min, value - 1)), [value, onChange, min]);
  const inc = React.useCallback(() => onChange(Math.min(max, value + 1)), [value, onChange, max]);

  return (
    <div className="inline-flex items-center rounded-md border bg-card">
      <button type="button" aria-label="decrease" onClick={dec} className="px-3 py-2 hover:bg-accent">-</button>
      <div className="w-10 text-center select-none">{value}</div>
      <button type="button" aria-label="increase" onClick={inc} className="px-3 py-2 hover:bg-accent">+</button>
    </div>
  );
}
