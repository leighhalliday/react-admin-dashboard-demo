import React from "react";
import "hammerjs";
import {
  Chart,
  ChartLegend,
  ChartTooltip,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  Sparkline
} from "@progress/kendo-react-charts";
import { Dialog, DialogActionsBar } from "@progress/kendo-react-dialogs";
import { Button } from "@progress/kendo-react-buttons";
import { Ripple } from "@progress/kendo-react-ripple";

import "@progress/kendo-theme-material/dist/all.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./App.css";

import {
  sales,
  categories,
  reviews,
  customers,
  deliveries,
  supports,
  colors
} from "./data";

export default function App() {
  const [activeReview, setActiveReview] = React.useState(null);

  return (
    <Ripple>
      <div className="container-fluid">
        <nav className="mb-3">
          <Button icon="hamburger" style={{ marginRight: "1rem" }} />
          <strong>The Wonderful World Of Camping Admin</strong>
        </nav>

        <main>
          {activeReview && (
            <Review
              review={activeReview}
              triggerClose={() => {
                setActiveReview(null);
              }}
            />
          )}

          <div className="row">
            <StatBox img="/money.svg" text="Revenue Earned" value="$24,431">
              <ul>
                {customers.map(customer => (
                  <li key={customer.id}>
                    <a href="/">
                      <img
                        src="/customer.svg"
                        alt="customer"
                        style={{ width: "1rem", marginRight: "0.5rem" }}
                      />
                      {customer.name}
                    </a>
                  </li>
                ))}
              </ul>
            </StatBox>
            <StatBox img="/delivery.svg" text="Pending Deliveries" value="50">
              <ul>
                {deliveries.map(delivery => (
                  <li key={delivery.id}>
                    <a href="/">
                      <img
                        src="/package.svg"
                        alt="package"
                        style={{ width: "1rem", marginRight: "0.5rem" }}
                      />
                      {delivery.name}
                    </a>
                  </li>
                ))}
              </ul>
            </StatBox>
            <StatBox img="/megaphone.svg" text="Review Approval" value="10">
              <ul>
                {reviews.map(review => (
                  <li key={review.id}>
                    <Button
                      onClick={() => {
                        setActiveReview({ ...review });
                      }}
                      icon="cog"
                      style={{ float: "right" }}
                    />
                    {[...Array(review.stars).keys()].map(star => (
                      <span key={star} role="img" aria-label="star">
                        ⭐️
                      </span>
                    ))}
                    <br />
                    <a href="/">{review.product}</a>
                  </li>
                ))}
              </ul>
            </StatBox>
            <StatBox img="/support.svg" text="Awaiting Support" value="15">
              <ul>
                {supports.map(support => (
                  <li key={support.id}>
                    <a href="/">
                      <img
                        src="/customer.svg"
                        alt="customer"
                        style={{ width: "1rem", marginRight: "0.5rem" }}
                      />
                      {support.name}
                    </a>
                  </li>
                ))}
              </ul>
            </StatBox>
          </div>

          <div className="row mt-4">
            <div className="col">
              <div className="card shadow-1">
                <RevenueChart />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-6 mt-4">
              <div className="card shadow-1">
                <CategorySparklines />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 mt-4">
              <div className="card shadow-1">
                <CategoryPieChart />
              </div>
            </div>
          </div>
        </main>
      </div>
    </Ripple>
  );
}

const StatBox = ({ img, text, value, children }) => (
  <div className="col-sm-12 col-md-6 col-lg-3 mt-4">
    <div className="card shadow-1">
      <div className="row">
        <div className="col-4">
          <div className="card shadow-2 stat-box-icon">
            <img src={img} alt={text} style={{ maxHeight: "100%" }} />
          </div>
        </div>

        <div className="col-8 text-right">
          <span className="block">{text}</span>
          <span className="block">
            <strong>{value}</strong>
          </span>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">{children}</div>
      </div>
    </div>
  </div>
);

const Review = ({ review, triggerClose }) => (
  <Dialog title={"Please review"} onClose={triggerClose}>
    <h2>{review.product}</h2>
    <p>{review.text}</p>
    <DialogActionsBar>
      <Button
        onClick={() => {
          alert("denied");
          triggerClose();
        }}
      >
        Deny
      </Button>
      <Button
        onClick={() => {
          alert("approved");
          triggerClose();
        }}
      >
        Approve
      </Button>
    </DialogActionsBar>
  </Dialog>
);

const RevenueChart = () => (
  <>
    <h2>Revenue</h2>
    <Chart>
      <ChartTooltip />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem
          categories={sales.map(({ day }) => day)}
          title={{ text: "Day" }}
        />
      </ChartCategoryAxis>
      <ChartSeries>
        <ChartSeriesItem
          type="area"
          data={sales.map(({ value }) => value)}
          color="#4FC3F7"
        />
      </ChartSeries>
    </Chart>
  </>
);

const CategorySparklines = () => (
  <>
    <h2>Category Trends</h2>

    <ul>
      {categories.map(({ category, recent }, index) => (
        <li key={category}>
          {category}{" "}
          <Sparkline
            data={recent}
            seriesColors={[colors[index]]}
            type="column"
          />
        </li>
      ))}
    </ul>
  </>
);

const CategoryPieChart = () => (
  <>
    <h2>Category Percentage</h2>

    <Chart seriesColors={colors}>
      <ChartLegend position="top" />
      <ChartTooltip />
      <ChartSeries>
        <ChartSeriesItem
          type="pie"
          data={categories}
          field="value"
          categoryField="category"
        />
      </ChartSeries>
    </Chart>
  </>
);
