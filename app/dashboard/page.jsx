import React from "react";
import Card from "../ui/dashboard/card/card";
import Transactions from "../ui/dashboard/transaction/transaction";
import Chart from "../ui/dashboard/chart/chart";
import RightBar from "../ui/dashboard/rightBar/rightBar";
import styles from "../ui/dashboard/dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.wraper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="flex-1">
        <RightBar />
      </div>
    </div>
  );
};

export default Dashboard;
Dashboard;
