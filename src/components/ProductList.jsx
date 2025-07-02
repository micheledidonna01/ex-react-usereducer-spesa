import { useState } from 'react';
import { useReducer } from 'react';
const ProductList = () => {
    // Stato iniziale
    const initialProducts = {
        items: [],
        total: 0,
    };
    let productsFor = [
        { name: 'Mela', price: 0.5 },
        { name: 'Pane', price: 1.2 },
        { name: 'Latte', price: 1.0 },
        { name: 'Pasta', price: 0.7 },
    ];

    // const initialProducts = productsFor.map((p) => ({
    //     ...p,
    //     quantity: 0
    // }));
    let isProductInCart = [];
    let productToRemove = [];
    console.log(initialProducts);
    // console.log(productsFor);

    // const [addedProducts, setAddedProducts] = useState([]);
    const productsReducer = (products, action) => {
        switch (action.type) {
            case 'ADD_PRODUCT':
                isProductInCart = products.items.some((addP) => addP.name === action.payload.name);
                console.log(isProductInCart);

                if (isProductInCart) {
                    action.payload.quantity ++; // Incrementa la quantità del prodotto
                    
                    return {
                        ...products,
                        items: products.items.map(prod =>
                            prod.name === action.payload.name
                                ? {...prod, quantity: prod.quantity + 1} : prod
                        ),
                        total: products.total + action.payload.price

                    };
                
                }else{
                    return{
                        ...products,
                        items: [...products.items, {...action.payload, quantity: 1}],
                        total: products.total + action.payload.price
                    }
                }
            case 'REMOVE_PRODUCT':
                productToRemove = products.items[action.payload];
                return {
                    ...products,
                    items: products.items.filter((_, i) => i !== action.payload),
                    total: products.total - (productToRemove.price * productToRemove.quantity)
                }
                default:
                    return products;
                // console.log("Prodotto aggiunto al carrelo: ", action.payload);
                // setAddedProducts([...products, { ...action.payload, quantity: 1 }]);
                // console.log(addedProducts);
                // console.log(action.payload);
                // if(action.payload.quantity >= 1){
                //     return {...action.payload,
                //             quantity: 1
                //         }
                // }
                // if(action.payload.quantity === 0){
                //     const addProdToCart = {
                //         ...action.payload,
                //         quantity: 1, // Imposta la quantità iniziale a 1
                //     }
                //     console.log(addProdToCart);
                //     setAddedProducts([...addedProducts, addProdToCart]);
                // }
                // return setAddedProducts([...addedProducts, action.payload]);
            

                // const addProdToCart = {
                //     ...action.payload,
                //     quantity: 1, // Imposta la quantità iniziale a 1
                // }
                // setAddedProducts([...addedProducts, addProdToCart]);
        }
    }
    const [products, dispatchProducts] = useReducer(productsReducer, initialProducts);
    
    // const addToCart = (product) => {
    //     const isProductInCart = addedProducts.some((addP) => addP.name === product.name);
    //     console.log(isProductInCart);

    //     if (isProductInCart) {
    //         product.quantity += 1; // Incrementa la quantità del prodotto
    //         console.log(product);
    //         return product;
    //     }
    //     console.log("Prodotto aggiunto al carrelo: ", product);
    //     setAddedProducts([...addedProducts, { ...product, quantity: 1 }]);
    //     console.log(addedProducts);
    // }






    

    return <>
        <div className="list-product">
            <h2>Lista Prodotti</h2>
            <ul>
                {productsFor.map((product, index) => (
                    <li key={index}>
                        <p>
                            {product.name} - €{product.price.toFixed(2)}
                        </p>
                        <button onClick={() => dispatchProducts({ type: 'ADD_PRODUCT', payload: product})}>Aggiungi al carrello</button>
                    </li>
                ))}
            </ul>
        </div>
        {products.items.length !== 0 && 
            <div className='cart'>
                <h2>Carrello</h2>
                <ul>
                    {products.items.map((product, index) => (
                        <li key={index}>
                            <p>
                                {product.name} - €{(product.price * product.quantity).toFixed(2)} - Quantità: {product.quantity}
                            </p>
                            <button onClick={() => dispatchProducts({type: 'REMOVE_PRODUCT', payload: index})}>Rimuovi</button>
                        </li>
                    ))}
                </ul>

                <p>Totale: {products.total.toFixed(2)}€</p>

            </div> 
        }
    </>
}

export default ProductList;