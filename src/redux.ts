import { createSlice, configureStore, SliceCaseReducers } from "@reduxjs/toolkit";
import { ItemType } from "./App";

const productSlice = createSlice({
    name: "products",
    initialState: [
        {
            id: 1,
            title: "Boose",
            price: 14.99,
            image: "src/assets/casque.jpg",
          },
      
          {
            id: 2,
            title: "Boat",
            price: 145.99,
            image: "src/assets/boat.jpg",
          },
      
          {
            id: 3,
            title: "Bovit",
            price: 45.99,
            image: "src/assets/bovlt.jpg",
          },
      
          {
            id: 4,
            title: "M40X Black",
            price: 50.99,
            image: "src/assets/M40xBlack.jpg",
          },
      
          {
            id: 5,
            title: "Sony White",
            price: 120.99,
            image: "src/assets/sony.jpg",
          },
      
          {
            id: 6,
            title: "Sony MDR-XB9",
            price: 140.99,
            image: "src/assets/SonyMDR-XB9.jpg",
          },
    ],

    reducers: {

    }
    
})

const cartSlice = createSlice<ItemType[], SliceCaseReducers<ItemType[]>, string>({
    name: "cart",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
           const indexItem = state.findIndex(item => item.id === action.payload.id);
           if(indexItem === -1){
               state.push(action.payload);
           }

        },

        deleteItem: (state, action) => {
            state = state.filter(item => item.id !== action.payload);
            return state;
        },

        updateItem: (state, action) => {
            const indexItem = state.findIndex(item => item.id === action.payload.id);
            const itemUpdated = state[indexItem];
            itemUpdated.quantity = action.payload.quantity;
            state[indexItem] = itemUpdated;
        }

    }
})

export const { addItem, deleteItem, updateItem } = cartSlice.actions;

export const store = configureStore({
    reducer: {
        products : productSlice.reducer,
        cart : cartSlice.reducer,
    }
})