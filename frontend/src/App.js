import "./App.css";
import { useState } from "react";

function App() {
  const [futures, setFutures] = useState(false);
  const [strike, setStrike] = useState("strikeType");
  const handleChange = (e) => {
    console.log(e.target.value);
    setStrike(e.target.value);
  };

  return (
    <div className="bg-gray-100  items-center">
      <div className="bg-black-300 flex justify-center">
        <div className="flex justify-center mt-20">
          <h1 className="text-base font-medium mr-1 ">select segments</h1>
          <div class="inline-flex ml-1">
            <button
              onClick={() => setFutures(true)}
              class="bg-gray-300 focus:bg-sky-900 focus:text-white  text-xs text-black-800 not-italic  py-1 px-4 rounded-l-3xl"
            >
              Futures
            </button>

            <button
              onClick={() => setFutures(false)}
              class="bg-gray-300 focus:bg-sky-900 focus:text-white text-xs text-gray-800 not-italic  py-1 px-4 rounded-r-3xl"
            >
              Options
            </button>
          </div>
        </div>
      </div>

      {futures ? (
        <div className="flex justify-center mt-5">
          {" "}
          <div>
            <p className="text-sm  font-medium mb-2">Total Lot</p>
            <input
              type="number"
              min="1"
              className="rounded-3xl w-16 pl-3 "
              defaultValue="1"
            />
          </div>
          <div className="ml-8">
            {/* <p className="text-sm font-medium" >Position</p>
          <input type="number" min="1" className="rounded-3xl w-16 pl-3" /> */}
            <label for="countries" class="block mb-2 text-sm font-medium">
              Position
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-white  text-gray-900 text-sm rounded-3xl focus:ring-blue-500  block  px-2.5 py-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {/* <option selected>Choose a country</option> */}
              <option selected value="US">
                Sell
              </option>
              <option value="CA">Buy</option>
            </select>
          </div>
        </div>
      ) : (
        <div className=" flex flex-col items-center space-y-3 justify-center mt-5 md:flex-row">
          <div className="flex">
            <div>
              <p className="text-sm  font-medium mb-2">Total Lot</p>
              <input
                type="number"
                min="1"
                className="rounded-3xl w-16 pl-3 "
                defaultValue="1"
              />
            </div>

            <div className="ml-8">
              {/* <p className="text-sm font-medium" >Position</p>
          <input type="number" min="1" className="rounded-3xl w-16 pl-3" /> */}
              <label for="countries" class="block mb-2 text-sm font-medium">
                Position
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-white  text-gray-900 text-sm rounded-3xl focus:ring-blue-500  block  px-2.5 py-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {/* <option selected>Choose a country</option> */}
                <option selected value="US">
                  Sell
                </option>
                <option value="CA">Buy</option>
              </select>
            </div>

            <div className="ml-8">
              {/* <p className="text-sm font-medium" >Position</p>
          <input type="number" min="1" className="rounded-3xl w-16 pl-3" /> */}
              <label for="countries" class="block mb-2 text-sm font-medium">
                Option Type
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-white  text-gray-900 text-sm rounded-3xl focus:ring-blue-500  block  px-2.5 py-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {/* <option selected>Choose a country</option> */}
                <option selected value="US">
                  Call
                </option>
                <option value="CA">Put</option>
              </select>
            </div>

            <div className="ml-8">
              {/* <p className="text-sm font-medium" >Position</p>
          <input type="number" min="1" className="rounded-3xl w-16 pl-3" /> */}
              <label for="countries" class="block mb-2 text-sm font-medium">
                Expiry
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-white  text-gray-900 text-sm rounded-3xl focus:ring-blue-500  block  px-2.5 py-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {/* <option selected>Choose a country</option> */}
                <option selected value="US">
                  Weekly
                </option>
                <option value="CA">Monthly</option>
              </select>
            </div>
          </div>

          <div className="ml-8">
            {/* <p className="text-sm font-medium" >Position</p>
          <input type="number" min="1" className="rounded-3xl w-16 pl-3" /> */}
            <label for="countries" class="block mb-2 text-sm font-medium">
              Select Strike Criteria
            </label>
            <select
              onChange={handleChange}
              id="countries"
              class="bg-gray-50 border border-white  text-gray-900 text-sm rounded-3xl focus:ring-blue-500  block  px-2.5 py-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {/* <option selected>Choose a country</option> */}
              <option selected value="strikeType">
                Strike Type
              </option>
              <option value="premium">Premium Range</option>
              <option value="closest">Closest Premium</option>
              <option value="straddle">Straddle Width</option>
            </select>
          </div>
          {strike === "strikeType" && (
            <div className="ml-8">
              {/* <p className="text-sm font-medium" >Position</p>
          <input type="number" min="1" className="rounded-3xl w-16 pl-3" /> */}
              <label for="countries" class="block mb-2 text-sm font-medium">
                Strike Type
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-white  text-gray-900 text-sm rounded-3xl focus:ring-blue-500  block  px-2.5 py-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {/* <option selected>Choose a country</option> */}
                <option selected value="US">
                  ATM
                </option>
                <option value="CA">ITM 1</option>
                <option value="CA">ITM 2</option>
                <option value="CA">ITM 3</option>
                <option value="CA">ITM 4</option>
                <option value="CA">ITM 5</option>
                <option value="CA">OTM 1</option>
                <option value="CA">OTM 2</option>
                <option value="CA">OTM 3</option>
                <option value="CA">OTM 4</option>
                <option value="CA">OTM 5</option>
              </select>
            </div>
          )}

          {strike === "premium" && (
            <div className="flex">
              <div>
                <p className="text-sm  font-medium mb-2">Lower Range</p>
                <input
                  type="number"
                  min="1"
                  className="rounded-3xl w-16 pl-3 "
                  defaultValue="50"
                />
              </div>
              <div className="ml-3">
                <p className="text-sm  font-medium mb-2">Upper Range</p>
                <input
                  type="number"
                  min="1"
                  className="rounded-3xl w-16 pl-3 "
                  defaultValue="200"
                />
              </div>
            </div>
          )}

          {strike === "closest" && (
            <div className="ml-3">
              <p className="text-sm  font-medium mb-2">Premium</p>
              <input
                type="number"
                min="1"
                className="rounded-3xl w-16 pl-3 "
                defaultValue="50"
              />
            </div>
          )}

          {strike === "straddle" && (
            <div className="ml-3">
              {/* < className="text-sm  font-medium mb-2">Presfsdfdsfmium</> */}
              <div className="flex">
                <p className="text-sm  font-medium ">[ATM Strike</p>
                <select
                  id="countries"
                  class="bg-gray-50 border border-white  text-gray-900 text-sm rounded-3xl focus:ring-blue-500  block  px-2.5 py-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  {/* <option selected>Choose a country</option> */}
                  <option selected value="plus">
                    +
                  </option>
                  <option value="minus">-</option>
                </select>
                <p className="text-sm  font-medium ">(</p>
                <input
                  type="number"
                  min="1.5"
                  className="rounded-3xl w-16 pl-3 "
                  defaultValue="0.5"
                />
                <p className="text-sm  font-medium "> xATM Straddle Price)]</p>
              </div>
            </div>
          )}
        </div>
      )}
      <div className="flex justify-center mt-12 pb-14" >
        <button class="bg-sky-900 text-xs text-white font-medium not-italic  py-1 px-10 rounded-3xl mr-2">
          Add Leg
        </button>
        <button class="bg-white font-medium text-xs text-sky-900 not-italic  py-1 px-10 rounded-3xl ml-2">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default App;
