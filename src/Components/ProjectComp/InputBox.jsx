import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "INR",
  amountDisable = false,
  currencyDisable = false,
}) {
  const amountInputId = useId();

  return (
    <div className="flex justify-between items-end gap-3">
      {/* Amount Field */}
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="block text-sm text-indigo-600 font-medium mb-1"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          type="text"
          inputMode="numeric"
          pattern="[1-9][0-9]*"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => {
            const raw = e.target.value;
            if (!/^\d*$/.test(raw)) return;              // Allow only digits
            const cleaned = raw.replace(/^0+(?=\d)/, "");           // Remove leading zeros
            onAmountChange && onAmountChange(Number(cleaned));            // Set number in state
          }}
          className="outline-none py-1.5 w-full font-bold px-1.5"
        />
      </div>

      {/* Currency Dropdown */}
      <div className="w-1/2">
        <label className="block text-sm text-indigo-600 font-medium mb-1">
          Currency
        </label>
        <select
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:cursor-pointer"
          value={selectCurrency}
          disabled={currencyDisable}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
