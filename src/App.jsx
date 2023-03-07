import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Simple, traffic-based pricing</h1>
        <p>
          Sign-up for our 30-day trial. <br /> No credit required
        </p>
        <p>Pageviews</p>
      </div>
      <div className="card">
        <div className="slider-wrapper">
          <p>100k Pageviews</p>
          <div className="range-wrapper">
            <input type="range" name="pageviews" id="pageviews" />
          </div>
          <p>PGK /month</p>
        </div>
        <div className="billing-wrapper">
          <input type="checkbox" name="billingType" id="billingType" />
          <label htmlFor="billingType">
            <p>Monthly Billing</p>
            <div className="fake-checkout"></div>
            <p>
              Yearly Billing{" "}
              <span>
                25% <span>discount</span>
              </span>
            </p>
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
