import { header, hero, featuredProducts, leatestProducts } from "./data.js";

const elHeader = document.querySelector(".header");
const elHero = document.querySelector(".hero");
const elfeaturedProducts = document.querySelector(".featuredProducts");
const elleatestProducts = document.querySelector(".leatestProducts");

let div = document.createElement("div");
let ul = document.createElement("ul");
div.classList = "flex gap-4 w-[80%] mx-auto justify-between items-center";
ul.classList = "flex gap-4  items-center  justify-center  font-semibold";

header.links.forEach((item) => {
  ul.innerHTML += `
<li class="text-blue-800">${item}</li>
`;
});
div.innerHTML = `
<h1 class="text-4xl font-bold   ">${header.logo}</h1>
`;

let headerForm = document.createElement("div");
headerForm.innerHTML = `
<input type="text" placeholder="Enter Your Text" class="bg-transparent " >
<button class="bg-[rgba(251,46,134,1)] px-2 text-white">${header.btn}</button>
`;
headerForm.classList =
  "flex  gap-4 justify-between  pl-3 border-2 border-gray-200";
div.appendChild(ul);
div.appendChild(headerForm);
elHeader.append(div);

// hero

elHero.innerHTML = `
<div class="w-[80%]  mx-auto flex justify-between px-5">
    <div class="flex flex-1   flex-col gap-3 justify-center items-center relative">
    <img class="absolute top-0 -left-[150px] object-cover h-[250px] max-w-[150px]" src="${hero.heroLeft}" alt="">
    <div class="gap-4 flex mx-auto flex-col justify-center items-start">
    <h1 class="text-fuchsia-600 font-semibold">${hero.titleHead}</h1>
    <h1  class=" text-5xl font-bold">${hero.titleMain}</h1>
    <h1 class=" text-gray-500">${hero.titleFooter}</h1>
    <button class="bg-[rgba(251,46,134,1)] py-1 px-3 text-white  text-xs">${hero.heroBtnText}</button>
    </div>
    </div>
    <div class="flex-1">
    <img src="${hero.heroRight}" alt="">
    </div>
</div>
`;

// featuredProducts

let titleFeat = document.createElement("div");
titleFeat.innerHTML = `
<h1 class="font-bold text-4xl text-center">${featuredProducts.title}</h1>
`;
let cards = document.createElement("div");
cards.classList = "flex w-full justify-center gap-4";
featuredProducts.cards.forEach((item) => {
  cards.innerHTML += `
   <div class="flex mt-10 hover:text-white  hover:bg-[rgba(47,26,196,1)] flex-col  justify-center items-center">
   <img src="${item.cardImg}" class="bg-[rgba(246,247,251,1)] min-w-full min-h-full" alt="">
    <div class="bg-inherit w-full  px-4 flex justify-center flex-col  items-center">
    <h1 class="font-bold  text-[rgba(251,46,134,1)] text-xl">${item.cardTitle}</h1>
    <h1 class="font-bold bg-transparent text-xs">${item.cardDesc}</h1>
    <h1 class="text-xs">${item.cardPrice}</h1>
    </div>
   </div>
   `;
});
elfeaturedProducts.append(titleFeat, cards);

// leatestProducts

elleatestProducts.innerHTML = `
<h1 class="pt-5 text-4xl font-bold text-center">${leatestProducts.title}</h1>
`;

let leatBtns = document.createElement("div");

leatBtns.innerHTML = `
<div class="flex justify-center">    
<button class="newArrivalBtn py-1 px-3 text-xl text-[rgba(21,24,117,1)] hover:text-[rgba(251,46,134,1)] hover:underline">New Arrival</button>
<button class="bestSellerBtn py-1 px-3 text-xl text-[rgba(21,24,117,1)] hover:text-[rgba(251,46,134,1)] hover:underline">Best Seller</button>
<button class="featuredBtn py-1 px-3 text-xl text-[rgba(21,24,117,1)] hover:text-[rgba(251,46,134,1)] hover:underline">Featured</button>
<button class="specialOfferBtn py-1 px-3 text-xl text-[rgba(21,24,117,1)] hover:text-[rgba(251,46,134,1)] hover:underline">Special Offer</button>
</div>
`;

elleatestProducts.appendChild(leatBtns);

let arrivalCards = document.createElement("div");
arrivalCards.classList = "w-[60%] mx-auto grid grid-cols-3 gap-6";
elleatestProducts.appendChild(arrivalCards);

document.querySelector(".newArrivalBtn").addEventListener("click", () => {
  arrivalCards.innerHTML = ""; // clear existing content
  leatestProducts.newArrival.forEach((item) => {
    arrivalCards.innerHTML += `
        <div class="shadow-black shadow-md rounded-lg h-[290px] bg-slate-200 flex justify-between flex-col items-center bg-[rgba(238, 239, 251, 1)]">
        <img src="${item.img}" class="min-w-full min-h-[80%]" alt="">    
        <div class="text-xs text-[rgba(21,24,117,1)] bg-white w-full flex justify-between px-3 py-1 rounded-b-md">
        <h1>${item.name}</h1>
        <div class="flex gap-3">
        <h1>${item.price}</h1>
        <h1 class="text-[rgba(251,36,72,1)]">${item.sale}</h1>
        </div>
       </div>
        </div>
        `;
  });
});

document.querySelector(".bestSellerBtn").addEventListener("click", () => {
    arrivalCards.innerHTML = "";
  leatestProducts.bestSeller.forEach((item) => {
    arrivalCards.innerHTML += `
        <div class="shadow-black shadow-md rounded-lg h-[290px] bg-slate-200 flex justify-between flex-col items-center bg-[rgba(238, 239, 251, 1)]">
        <img src="${item.img}" class="min-w-full min-h-[80%]" alt="">    
        <div class="text-xs text-[rgba(21,24,117,1)] bg-white w-full flex justify-between px-3 py-1 rounded-b-md">
        <h1>${item.name}</h1>
        <div class="flex gap-3">
        <h1>${item.price}</h1>
        <h1 class="text-[rgba(251,36,72,1)]">${item.sale}</h1>
        </div>
       </div>
        </div>
        `;
  });
});

document.querySelector(".featuredBtn").addEventListener("click", () => {
  arrivalCards.innerHTML = "";
  leatestProducts.featured.forEach((item) => {
    arrivalCards.innerHTML += `
        <div class="shadow-black shadow-md rounded-lg h-[290px] bg-slate-200 flex justify-between flex-col items-center bg-[rgba(238, 239, 251, 1)]">
        <img src="${item.img}" class="min-w-full min-h-[80%]" alt="">    
        <div class="text-xs text-[rgba(21,24,117,1)] bg-white w-full flex justify-between px-3 py-1 rounded-b-md">
        <h1>${item.name}</h1>
        <div class="flex gap-3">
        <h1>${item.price}</h1>
        <h1 class="text-[rgba(251,36,72,1)]">${item.sale}</h1>
        </div>
       </div>
        </div>
        `;
  });
});

document.querySelector(".specialOfferBtn").addEventListener("click", () => {
  arrivalCards.innerHTML = "";
  leatestProducts.specialOffer.forEach((item) => {
    arrivalCards.innerHTML += `
        <div class="shadow-black shadow-md rounded-lg h-[290px] bg-slate-200 flex justify-between flex-col items-center bg-[rgba(238, 239, 251, 1)]">
        <img src="${item.img}" class="min-w-full min-h-[80%]" alt="">    
        <div class="text-xs text-[rgba(21,24,117,1)] bg-white w-full flex justify-between px-3 py-1 rounded-b-md">
        <h1>${item.name}</h1>
        <div class="flex gap-3">
        <h1>${item.price}</h1>
        <h1 class="text-[rgba(251,36,72,1)]">${item.sale}</h1>
        </div>
       </div>
        </div>
        `;
  });
});