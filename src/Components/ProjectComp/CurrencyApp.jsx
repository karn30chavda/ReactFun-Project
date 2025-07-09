import { useState } from "react";
import InputBox from "./InputBox";
import useCurrencyInfo from "../../Hooks/useCurrencyInfo";
import { RefreshCw, ArrowRightLeft } from "lucide-react";

function CurrencyApp() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full md:w-[80%] h-[95%] md:min-h-[70vh] bg-gray-300 flex items-center justify-center px-4 py-10 mx-auto rounded-2xl">
        <div className="w-full max-w-lg p-6 rounded-2xl bg-white shadow-lg space-y-6">
          <h1 className="text-2xl font-bold text-center text-indigo-700">
            <RefreshCw className="inline mr-2" size={20} /> Currency Converter
          </h1>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
            className="space-y-6"
          >
            <InputBox
              label="From"
              amount={amount}
              onAmountChange={(amount) => setAmount(amount)}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
            />

            <div className="flex justify-center">
              <button
                type="button"
                onClick={swap}
                className="flex items-center gap-2 bg-indigo-500 text-white px-4 py-1.5 rounded-md hover:bg-indigo-600 hover:cursor-pointer transition"
              >
                <ArrowRightLeft size={18} /> Swap
              </button>
            </div>

            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />

            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 bg-indigo-700 text-white font-medium px-4 py-2 rounded-lg hover:bg-indigo-800 transition hover:cursor-pointer"
            >
              <RefreshCw size={18} /> Convert {from.toUpperCase()} to{" "}
              {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CurrencyApp;
