import Product from "./Pages/Product";

function App() {
  return (
    <>
      <Product
        image="/book.png"
        alt="image"
        id={1}
        productName="Book1"
        price={12}
        telegram="akaramov"
        status="InStock" // if i put another status it will error
      />
    </>
  );
}

export default App;
