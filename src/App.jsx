import "./App.css";
import { Button } from "neetoui";
// eslint-disable-next-line import/extensions
import logo from "./logo.svg";
import Product from "./Components/Product"
const list=[
  {
    "id": 1,
    "name": "Skin Beauty Serum.",
    "slug": "skin-beauty-serum",
    "url": "https://ik.imagekit.io/d9mvewbju/SmileCart/thumbnail_XJRXpMpTd4.jpg",
    "oldp": 580,
    "price": 479,
    "quantity": 3
  },
  {
    "id": 2,
    "name": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "slug": "fjallraven-foldsack-no-1-backpack-fits-15-laptops",
    "url": "https://ik.imagekit.io/d9mvewbju/SmileCart/81fPKd-2AYL._AC_SL1500__F0WCB-1TA.jpg",
    "oldp": 558,
    "price": 500,
    "quantity": 1
  },
  {
    "id": 3,
    "name": "Mens Casual Premium Slim Fit T-Shirts",
    "slug": "mens-casual-premium-slim-fit-t-shirts",
    "url": "https://ik.imagekit.io/d9mvewbju/SmileCart/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY__7hrS4lMIn.jpg",
    "oldp": 700,
    "price": 670,
    "quantity": 3
  },
  {
    "id": 4,
    "name": "Mens Cotton Jacket",
    "slug": "mens-cotton-jacket",
    "url": "https://ik.imagekit.io/d9mvewbju/SmileCart/71li-ujtlUL._AC_UX679__qvw0xUWuG.jpg",
    "oldp": 1200,
    "price": 1000,
    "quantity": 5
  },
  {
    "id": 5,
    "name": "Mens Casual Slim Fit",
    "slug": "mens-casual-slim-fit",
    "url": "https://ik.imagekit.io/d9mvewbju/SmileCart/71YXzeOuslL._AC_UY879__bIUBezm6j.jpg",
    "oldp": 500,
    "price": 352,
    "quantity": 7
  },
  {
    "id": 6,
    "name": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "slug": "john-hardy-women-s-legends-naga-gold-silver-dragon-station-chain-bracelet",
    "url": "https://ik.imagekit.io/d9mvewbju/SmileCart/71pWzhdJNwL._AC_UL640_QL65_ML3__q1_gK4QhS.jpg",
    "oldp": 6000,
    "price": 5700,
    "quantity": 9
  },
  {
    "id": 7,
    "name": "Solid Gold Petite Micropave",
    "slug": "solid-gold-petite-micropave",
    "url": "https://ik.imagekit.io/d9mvewbju/SmileCart/61sbMiUnoGL._AC_UL640_QL65_ML3__MdhGepKe5.jpg",
    "oldp": 5789,
    "price": 5600,
    "quantity": 1
  },
  {
    "id": 8,
    "name": "White Gold Plated Princess",
    "slug": "white-gold-plated-princess",
    "url": "https://ik.imagekit.io/d9mvewbju/SmileCart/71YAIFU48IL._AC_UL640_QL65_ML3__ja3hr3Yx1.jpg",
    "oldp": 8623,
    "price": 8174,
    "quantity": 2
  },
  {
    "id": 9,
    "name": "Pierced Owl Rose Gold Plated Stainless Steel Double",
    "slug": "pierced-owl-rose-gold-plated-stainless-steel-double",
    "url": "https://ik.imagekit.io/d9mvewbju/SmileCart/51UDEzMJVpL._AC_UL640_QL65_ML3__Q2vArL0GW.jpg",
    "oldp": 6379,
    "price": 5738,
    "quantity": 7
  },
  {
    "id": 10,
    "name": "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    "slug": "wd-2tb-elements-portable-external-hard-drive-usb-3-0",
    "url": "https://ik.imagekit.io/d9mvewbju/SmileCart/61IBBVJvSDL._AC_SY879__Kh71e-Hmc.jpg",
    "oldp": 5000,
    "price": 4700,
    "quantity": 3
  }
];



const App = () => (  
 <div className="App">
  <Product/>
  </div>
);

export default App;
