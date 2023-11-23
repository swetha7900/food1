import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Yum Yum !</h1>
        <nav>
          <ul>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#order-online">Online-Orders</a></li>
          </ul>
        </nav>
      </header>

      <section id="menu">
        <h2>Menu</h2>
        <ul>
          <li>
            <h3>Plenty</h3>
            <p>Fried Calamari - $10.99</p>
            <img src="/images/1.jpeg" alt="Appetizers" />
            <p>Spinach Artichoke Dip - $9.99</p>
            <img src="/images/2.jpeg" alt="Appetizers" />
          </li>
          <li>
            <h3>Main Courses</h3>
            <p>Grilled Salmon - $17.99</p>
            <img src="/images/3.jpeg" alt="main courses" />
            <p>Chicken Parmesan - $18.99</p>
            <img src="/images/4.jpeg" alt="main courses" />
            <p>Vegetarian Pasta - $12.99</p>
            <img src="/images/5.jpeg" alt="main courses" />
          </li>
          <li>
            <h3>Desserts</h3>
            <p>Chocolate Lava Cake - $14.99</p>
            <img src="/images/6.jpeg" alt="Desserts" />
            <p>Classic Tiramisu - $17.99</p>
            <img src="/images/9.jpeg" alt="Desserts" />
          </li>
      
    
        </ul>
      </section>

      <section id="reservations">
        <h2>Reservations</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" required />

          <label htmlFor="time">Time:</label>
          <input type="time" id="time" name="time" required />

          <label htmlFor="guests">Number of Guests:</label>
          <input type="number" id="guests" name="guests" min="1" required />

          <button type="submit">Submit Reservation</button>
        </form>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>
          For inquiries or reservations, please contact us at:
        </p>
        <address>
          <p>yum yum Restaurant Street</p>
          <p>Madhapur, State 12345</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@deliciousbites.com</p>
        </address>
      </section>

      <section id="order-online">
        <h2>Order Online</h2>
        <p>Select your favorite dishes and proceed to checkout:</p>
        <img src="/images/8.jpeg" alt="Shopping Cart Icon" className="cart-icon" />
        <form>
          <label>
            <input type="checkbox" name="dish1" /> Spaghetti Bolognese - $17.99
          </label>
          <br />
          <label>
            <input type="checkbox" name="dish2" /> Grilled Chicken Caesar Salad - $11.99
          </label>
          <br />
          <label>
            <input type="checkbox" name="dish3" /> Margherita Pizza - $18.99
          </label>
          <br />
    
          <br />
          <label>
            Name:<input type="text" name="name" required />
          </label>
          <br />
          <label>
            Email:<input type="email" name="email" required />
          </label>
          <br />
          <button type="submit">Proceed to Checkout</button>
        </form>
      </section>
    </div>
  );
}

export default App;