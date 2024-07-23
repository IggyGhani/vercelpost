import productdesktop from "./assets/images/image-product-desktop.jpg";
import cart from "./assets/images/icon-cart.svg";
function App() {
  return (
    <main className="bg-cream h-screen w-screen">
      <div>
        <div>
          <img
            src={productdesktop}
            alt="Perfume bottle on top of a table surronding with leaves"
          />
        </div>
        <div>
          <p>Perfume</p>
          <h1>Gabirielle Essence Eau De Parfum</h1>
          <p>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div>
            <span> $ 149.99</span>
            <span> $169.99</span>
            <button>
              <img src={cart} alt="Cart Icon" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
