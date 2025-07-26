import { useState } from 'react';
import List from './CardList.jsx';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import ConfirmOrder from './confirmOrder.jsx';

function App() {
  const [cart, setCart] = useState({ items: {}, total: 0, count: 0 });
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);

  const addToCart = (dessert) => {
    setCart((prevCart) => {
      const items = { ...prevCart.items };
      if (items[dessert.name]) {
        items[dessert.name].quantity += 1;
      } else {
        items[dessert.name] = { ...dessert, quantity: 1 };
      }
      return {
        items,
        total: Object.values(items).reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2),
        count: Object.values(items).reduce((sum, item) => sum + item.quantity, 0)
      };
    });
  };

  const removeFromCart = (itemName) => {
    setCart((prevCart) => {
      const items = { ...prevCart.items };
      if (items[itemName].quantity > 1) {
        items[itemName].quantity -= 1;
      } else {
        delete items[itemName];
      }
      return {
        items,
        total: Object.values(items).reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2),
        count: Object.values(items).reduce((sum, item) => sum + item.quantity, 0)
      };
    });
  };

  const handleConfirmOrder = () => {
    setShowOrderConfirmation(true);
  };

  const handleStartNewOrder = () => {
    setCart({ items: {}, total: 0, count: 0 });
    setShowOrderConfirmation(false);
  };

  return (
    <>
      <div className="background">
        <div className="main">
          <Header />
          <List addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />
        </div>
        <Sidebar cart={cart} removeFromCart={removeFromCart} onConfirmOrder={handleConfirmOrder} />
      </div>
      {showOrderConfirmation && (
        <ConfirmOrder
          cart={cart}
          onClose={() => setShowOrderConfirmation(false)}
          onStartNewOrder={handleStartNewOrder}
        />
      )}
    </>
  );
}

export default App;