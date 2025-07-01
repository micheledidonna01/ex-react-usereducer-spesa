import { useEffect, useState } from 'react';

const ProductList = () => {
    const [addedProducts, setAddedProducts] = useState([]);
    const [cost, setCost] = useState(0);
    const products = [
        { name: 'Mela', price: 0.5 },
        { name: 'Pane', price: 1.2 },
        { name: 'Latte', price: 1.0 },
        { name: 'Pasta', price: 0.7 },
    ];

    function addToCart(product) {
        const isProductInCart = addedProducts.some((addP) => addP.name === product.name);
        console.log(isProductInCart);
        // const addProductToCart = addedProducts.find((addP, i) => products[i].name === addP.name );
        // console.log(addProductToCart);
        if (isProductInCart) {
            alert("Prodotto già presente nel carrello!");
            return;
        }
        product = { ...product, quantity: 1 }; // Aggiungo una proprietà quantity al prodotto
        console.log("Prodotto aggiunto al carrelo: ", product);
        setAddedProducts([...addedProducts, product]);
    }


    useEffect(() => {
        setCost(addedProducts.reduce((total, product) => total = total + product.price, 0).toFixed(2));
    }, [addedProducts]);

    return <>
        <div className="list-product">
            <h2>Lista Prodotti</h2>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        <p>
                            {product.name} - €{product.price.toFixed(2)}
                        </p>
                        <button onClick={() => addToCart(product)}>Aggiungi al carrello</button>
                    </li>
                ))}
            </ul>
        </div>
        {addedProducts.length !== 0 &&

            <div className='cart'>
                <h2>Carrello</h2>
                <ul>
                    {addedProducts.map((product, index) => (
                        <li key={index}>
                            <p>
                                {product.name} - €{product.price.toFixed(2)} - Quantità: {product.quantity}
                            </p>
                        </li>
                    ))}
                </ul>

                <p>Totale: €{cost}</p>

            </div>

        }
    </>
}

export default ProductList;