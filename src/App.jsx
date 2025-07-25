import { useState } from 'react';
import List from './CardList.jsx';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';

function App() {
  const [cart, setCart] = useState({ items: {}, total: 0, count: 0 });

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

  return (
    <>
      <div className="background">
        <div className="main">
          <Header />
          <List addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />
        </div>
        <Sidebar cart={cart} removeFromCart={removeFromCart} />
      </div>
    </>
  );
}

export default App;