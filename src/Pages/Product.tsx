interface ProductProps {
  image: string;
  alt: string;
  id: number;
  productName: string;
  price: number;
  telegram: string;
}

function Product({
  image,
  alt,
  id,
  productName,
  price,
  telegram,
}: ProductProps) {
  return (
    <>
      <div className="card">
        <div className="card-wrapper">
          <img src={image} alt={alt} />
        </div>
        <div className="card-body">
          <div className="product-id">ID: {id}</div>
          <div className="product-name">{productName}</div>
          <div className="price">{price}$</div>

          <div className="social-icons">
            <a href={telegram} target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-messenger"></i>
            </a>
            <a href={telegram} target="_blank" rel="noreferrer">
              <i className="fab fa-telegram-plane"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Product;
