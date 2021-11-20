import React from 'react';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import Message from './components/Message';
import Products from './components/Products';


function App() {
  return (
    <div>
     {/* Header */}
    <Header/>
    <main id="mainContainer">
        <div className="container">
            {/* Products */}
            <Products />
            {/* Message */}
            <Message />
            {/* Cart */}
            <Cart />
        </div>
    </main>
    {/* Footer */}
    <Footer />
</div>
  );
}

export default App;
