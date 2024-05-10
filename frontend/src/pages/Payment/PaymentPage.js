import React, { useEffect, useState } from "react";
import { getNewOrderForCurrentUser } from "../../services/OrderService";
import classes from "./paymentPage.module.css";
import Title from "../../components/Title/Title";
import OrderItemsList from "../../components/OrderItemsList/OrderItemsList";
import Map from "../../components/Map/Map";

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
          <OrderItemsList order={order} />
        </div>
        <div className={classes.map}>
          <Title title="Your Location" fontSize="2rem" />
          <Map readonly={true} />
        </div>
      </div>
    </>
  );
}
