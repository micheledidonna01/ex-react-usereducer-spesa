const ProductList = ()=> {
    const products = [
        { name: 'Mela', price: 0.5 },
        { name: 'Pane', price: 1.2 },
        { name: 'Latte', price: 1.0 },
        { name: 'Pasta', price: 0.7 },
    ];
    return (
        <div className="list-product">
            <h2>Lista Prodotti</h2>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        {product.name} - €{product.price.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList;