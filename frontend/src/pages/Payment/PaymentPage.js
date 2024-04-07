import React, { useEffect, useState } from "react";
import { getNewOrderForCurrentUser } from "../../services/OrderService";
import classes from "./paymentPage.module.css";
import Title from "../../components/Title/Title";

export default function PaymentPage() {
  const [order, setOrder] = useState();

  useEffect(() => {
    getNewOrderForCurrentUser().then((data) => setOrder(data));
  }, []);

  if (!order) return;
  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>
          <Title title="Order Form" fontSize="1rem" />
          <div className={classes.summary}>
            <div>
              <h3>Name:</h3>
              <span>{order.name}</span>
            </div>
            <div>
              <h3>Address:</h3>
              <span>{order.address}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
