import ProductList from "./components/ProductList"
import React, { useReducer } from 'react';
function App() {
  
  // // Stato iniziale
  // const initialState = {
  //   items: [],
  //   total: 0,
  // };

  // let existingItem = [];
  // let itemToRemove = [];
  // // Reducer
  // const cartReducer = (state, action) => {
  //   switch (action.type) {
  //     case 'ADD_ITEM':
  //       existingItem = state.items.find(item => item.id === action.payload.id);
  //       if (existingItem) {
  //         return {
  //           ...state,
  //           items: state.items.map(item =>
  //             item.id === action.payload.id
  //               ? { ...item, quantity: item.quantity + 1 }
  //               : item
  //           ),
  //           total: state.total + action.payload.price,
  //         };
  //       } else {
  //         return {
  //           ...state,
  //           items: [...state.items, { ...action.payload, quantity: 1 }],
  //           total: state.total + action.payload.price,
  //         };
  //       }
  //     case 'REMOVE_ITEM':
  //       itemToRemove = state.items.find(item => item.id === action.payload.id);
  //       if (itemToRemove) {
  //         const newItems = state.items.filter(item => item.id !== action.payload.id);
  //         return {
  //           ...state,
  //           items: newItems,
  //           total: state.total - itemToRemove.price * itemToRemove.quantity,
  //         };
  //       }
  //       return state;
  //     case 'UPDATE_QUANTITY':
  //       return {
  //         ...state,
  //         items: state.items.map(item =>
  //           item.id === action.payload.id
  //             ? { ...item, quantity: action.payload.quantity }
  //             : item
  //         ),
  //         total: state.items.reduce((acc, item) => {
  //           if (item.id === action.payload.id) {
  //             return acc + action.payload.quantity * item.price;
  //           }
  //           return acc + item.quantity * item.price;
  //         }, 0)
  //       }
  //     default:
  //       return state;
  //   }
  // };

  //   const [state, dispatch] = useReducer(cartReducer, initialState);

  //   const addItem = (item) => {
  //     dispatch({ type: 'ADD_ITEM', payload: item });
  //   };

  //   const removeItem = (item) => {
  //     dispatch({ type: 'REMOVE_ITEM', payload: item });
  //   };

  //   const updateQuantity = (id, quantity) => {
  //     dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  //   };


  //   return (
  //     <>
  //     <div>
  //       <h2>Carrello</h2>
  //       <ul>
  //         {state.items.map(item => (
  //           <li key={item.id}>
  //             {item.name} - Quantità:
  //             <input
  //               type="number"
  //               value={item.quantity}
  //               onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
  //             />
  //             - Prezzo: {item.price}
  //             <button onClick={() => removeItem(item)}>Rimuovi</button>
  //           </li>
  //         ))}
  //       </ul>
  //       <p>Totale: {state.total}</p>
  //       <button onClick={() => addItem({ id: 1, name: 'Prodotto 1', price: 10 })}>
  //         Aggiungi Prodotto 1
  //       </button>
  //       <button onClick={() => addItem({ id: 2, name: 'Prodotto 2', price: 20 })}>
  //         Aggiungi Prodotto 2
  //       </button>
  //     </div>

  //     </>
  //   );


  // function reducer(state, action) {
  //   switch (action.type) {
  //     case 'increment':
  //       return { count: state.count + 1 };
  //     case 'decrement':
  //       return { count: state.count - 1 };
  //     default:
  //       throw new Error();
  //   }
  // }


  //   const [state, dispatch] = useReducer(reducer, { count: 0 });

  //   return (
  //     <>
  //       Count: {state.count}
  //       <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
  //       <button onClick={() => dispatch({ type: 'increment' })}>+</button>
  //     </>
  //   );


  return (
    <>
  <ProductList />
    </>
  )
}

export default App
