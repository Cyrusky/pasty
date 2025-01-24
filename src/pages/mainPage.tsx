import React, { useState } from "react";

export const MainPage: React.FC = () => {
  const [orders, setOrders] = useState([0, 1, 2]);
  const swithCards = () => {
    const newOrders = orders.slice();
    const first = newOrders.shift()!;
    newOrders.push(first);
    setOrders(newOrders);
  };

  return (
    <div className="stack" onClick={swithCards}>
      {orders.map((order) => (
        <div
          key={order}
          className="card bg-primary text-primary-content shadow-md transition-all select-none"
        >
          <div className="card-body">
            <h2 className="card-title">Notification {order}</h2>
            <p>You have {order} unread messages. Tap here to see.</p>
          </div>
        </div>
      ))}
    </div>
  );
};
