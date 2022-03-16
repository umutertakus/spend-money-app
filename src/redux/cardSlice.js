import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "card",
  initialState: {
    items: [
      {
        id: 1,
        name: "Big Mac",
        number: 0,
        price: (2).toLocaleString(),
        photo: "https://neal.fun/spend/images/big-mac.jpg",
      },
      {
        id: 2,
        name: "Terlik",
        number: 0,
        price: (3).toLocaleString(),
        photo: "https://neal.fun/spend/images/flip-flops.jpg",
      },
      {
        id: 3,
        name: "Coca-Cola Paketi",
        number: 0,
        price: (5).toLocaleString(),
        photo: "https://neal.fun/spend/images/coca-cola-pack.jpg",
      },
      {
        id: 4,
        name: "Film Bileti",
        number: 0,
        price: (12).toLocaleString(),
        photo: "https://neal.fun/spend/images/movie-ticket.jpg",
      },
      {
        id: 5,
        name: "Kitap",
        number: 0,
        price: (15).toLocaleString(),
        photo: "https://neal.fun/spend/images/book.jpg",
      },
      {
        id: 6,
        name: "Video Oyunu",
        number: 0,
        price: (60).toLocaleString(),
        photo: "https://neal.fun/spend/images/video-game.jpg",
      },
      {
        id: 7,
        name: "Yıllık Netflix",
        number: 0,
        price: (100).toLocaleString(),
        photo: "https://neal.fun/spend/images/year-of-netflix.jpg",
      },
      {
        id: 8,
        name: "Airpod",
        number: 0,
        price: (199).toLocaleString(),
        photo: "https://neal.fun/spend/images/airpods.jpg",
      },
      {
        id: 9,
        name: "Oyun Konsolu",
        number: 0,
        price: (299).toLocaleString(),
        photo: "https://neal.fun/spend/images/gaming-console.jpg",
      },
      {
        id: 10,
        name: "Akıllı Telefon",
        number: 0,
        price: (699).toLocaleString(),
        photo: "https://neal.fun/spend/images/smartphone.jpg",
      },
      {
        id: 11,
        name: "At",
        number: 0,
        price: (2500).toLocaleString(),
        photo: "https://neal.fun/spend/images/horse.jpg",
      },
      {
        id: 12,
        name: "Elmas Yüzük",
        number: 0,
        price: (10000).toLocaleString(),
        photo: "https://neal.fun/spend/images/diamond-ring.jpg",
      },
      {
        id: 13,
        name: "Rolex Saat",
        number: 0,
        price: (15000).toLocaleString(),
        photo: "https://neal.fun/spend/images/rolex.jpg",
      },
      {
        id: 14,
        name: "Ford F-150",
        number: 0,
        price: (30000).toLocaleString(),
        photo: "https://neal.fun/spend/images/ford-f-150.jpg",
      },
      {
        id: 15,
        name: "Ferrari",
        number: 0,
        price: (250000).toLocaleString(),
        photo: "https://neal.fun/spend/images/ferrari.jpg",
      },
      {
        id: 16,
        name: "Ev",
        number: 0,
        price: (300000).toLocaleString(),
        photo: "https://neal.fun/spend/images/single-family-home.jpg",
      },
      {
        id: 17,
        name: "Yat",
        number: 0,
        price: (7500000).toLocaleString(undefined, {
          maximumFractionDigits: 2,
        }),
        photo: "https://neal.fun/spend/images/yacht.jpg",
      },
      {
        id: 18,
        name: "Apache Helikopteri",
        number: 0,
        price: (30000000).toLocaleString(undefined, {
          maximumFractionDigits: 2,
        }),
        photo: "https://neal.fun/spend/images/apache-helicopter.jpg",
      },
      {
        id: 19,
        name: "Boeing 747",
        number: 0,
        price: (148000000).toLocaleString(undefined, {
          maximumFractionDigits: 2,
        }),
        photo: "https://neal.fun/spend/images/boeing-747.jpg",
      },
      {
        id: 20,
        name: "Gökdelen",
        number: 0,
        price: (850000000).toLocaleString(undefined, {
          maximumFractionDigits: 2,
        }),
        photo: "https://neal.fun/spend/images/skyscraper.jpg",
      },
      {
        id: 21,
        name: "Basketbol Takımı",
        number: 0,
        price: (2120000000).toLocaleString(undefined, {
          maximumFractionDigits: 2,
        }),
        photo: "https://neal.fun/spend/images/nba-team.jpg",
      },
    ],
    money: 100000000000,
    receiptMoney: 0,
    basket: [],
  },
  reducers: {
    addBasket: (state, action) => {
      const checkBasket = state.basket.find(
        (item) => item.id === action.payload.id
      );
      if (!checkBasket) state.basket.push(action.payload);
      else {
        checkBasket.amount += 1;
        checkBasket.price = action.payload.price * checkBasket.amount;
      }
      state.receiptMoney = state.basket.reduce(
        (total, basketItem) => (total = total + basketItem.price),
        0
      );
      const checkNumber = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (checkNumber) checkNumber.number += 1;
      state.money -= action.payload.price;
    },
    removeBasket: (state, action) => {
      const checkBasket = state.basket.find(
        (item) => item.id === action.payload.id
      );
      if (checkBasket) {
        if (checkBasket.amount > 0) checkBasket.amount -= 1;
        checkBasket.price = action.payload.price * checkBasket.amount;
        const checkNumber = state.items.find(
          (item) => item.id === action.payload.id
        );
        if (checkNumber) {
          if (checkNumber.number > 0) checkNumber.number -= 1;
        }
      }
      state.receiptMoney = state.basket.reduce(
        (total, basketItem) => (total = total + basketItem.price),
        0
      );
      state.money += action.payload.price;
    },
  },
});

export const { addBasket, removeBasket } = cardSlice.actions;
export default cardSlice.reducer;