import React from "react";
import { useLoading } from "../../hooks/isLoading";
import classes from "./loading.module.css";

export default function Loading() {
  const { isLoading } = useLoading();
  if (!isLoading) return;

  return (
    <div className={classes.container}>
      <div className={classes.loader}>
        <img src="/loading.svg" alt="Loading" />
        <h1>Loading...</h1>
      </div>
    </div>
  );
}
