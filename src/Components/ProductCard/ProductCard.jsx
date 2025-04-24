const ProductCard = ({ product }) => {
    return (
        <>
      <div className="border rounded p-4 shadow">
        <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto" />
        <h3 className="text-lg font-bold">{product.title}</h3>
        <p>${product.price}</p>
      </div>
        </>
    );
  };
  
  export default ProductCard;