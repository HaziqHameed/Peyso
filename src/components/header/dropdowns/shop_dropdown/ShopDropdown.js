import React from "react";

let megaMenuItem = require("../../../../assets/mega-menu-item.jpg");
function ShopDropdown(props) {
  return (
    <div
      className="absolute w-full left-0 top-24 px-16 py-9 pr-40 bg-white drop-shadow-lg flex justify-center"
      onMouseEnter={props.enterHome}
      onMouseLeave={props.leaveHome}
    >
      <div className="container">
        <div className="grid grid-cols-4 text-sm">
          {/* first col */}
          <div className="grid grid-cols-1 grid-rows-10 gap-y-4">
            <div className="cursor-pointer relative hover:text-black uppercase font-medium shop_titles w-fit">
              shop list
            </div>
            <div className="cursor-pointer relative dropdown_elements w-fit mt-2">
              Shop List V1
            </div>
            <div className="cursor-pointer relative dropdown_elements w-fit">
              Shop List V2
            </div>
            <div className="cursor-pointer relative dropdown_elements w-fit">
              Shop List V3
            </div>
            <div className="cursor-pointer relative dropdown_elements w-fit">
              Shop List V4
            </div>
            <div className="cursor-pointer relative dropdown_elements w-fit">
              Shop List V5
            </div>
            <div className="cursor-pointer relative dropdown_elements w-fit">
              Shop List V6
            </div>
            <div className="cursor-pointer relative dropdown_elements w-fit">
              Shop List V7
            </div>
            <div className="cursor-pointer relative dropdown_elements w-fit">
              Shop List V8
            </div>
            <div className="cursor-pointer relative dropdown_elements w-fit">
              Shop List V9
            </div>
            <div className="cursor-pointer relative dropdown_elements w-fit">
              Shop Item Style
            </div>
            <div className="cursor-pointer relative dropdown_elements w-fit">
              Horizontal Scroll
            </div>
          </div>
          {/* second col */}
          <div className="grid grid-cols-1 grid-rows-10 gap-y-4 -ml-5">
            <div className="cursor-pointer relative hover:text-black w-fit uppercase font-medium shop_titles">
              shop detail
            </div>
            <div className="cursor-pointer relative dropdown_elements w-fit mt-2">
              Shop List V1
            </div>
            <div className="cursor-pointer relative dropdown_elements w-fit">
              Shop List V2
            </div>
            <div className="cursor-pointer relative dropdown_elements w-fit">
              Shop List V3
            </div>
            <div className="cursor-pointer relative dropdown_elements w-fit">
              Shop List V4
            </div>
            <div className="cursor-pointer relative dropdown_elements w-fit">
              Shop List V5
            </div>
            <div className="cursor-pointer relative dropdown_elements w-fit">
              Shop List V6
            </div>
            <div className="cursor-pointer relative dropdown_elements w-fit">
              Shop List V7
            </div>
            <div className="cursor-pointer relative dropdown_elements w-fit">
              Shop List V8
            </div>
            <div className="cursor-pointer relative dropdown_elements w-fit">
              Shop List V9
            </div>
            <div className="cursor-pointer relative dropdown_elements w-fit">
              Shop List V10
            </div>
            <div className="cursor-pointer relative dropdown_elements w-fit">
              Shop List V11
            </div>
          </div>
          {/* third col */}
          <div className="grid grid-cols-1 grid-rows-10 gap-y-4 -ml-9">
            <div className="cursor-pointer relative hover:text-black w-fit uppercase font-medium shop_titles">
              other pages
            </div>
            <div className="cursor-pointer relative dropdown_elements w-fit mt-2">
              Collection Grid
            </div>
            <div className="cursor-pointer relative dropdown_elements w-fit">
              Simple Product
            </div>
            <div className="cursor-pointer relative dropdown_elements w-fit">
              Variable Product
            </div>
            <div className="cursor-pointer relative dropdown_elements w-fit">
              External Product
            </div>
            <div className="cursor-pointer relative dropdown_elements w-fit">
              Grouped Product
            </div>
            <div className="cursor-pointer relative dropdown_elements w-fit">
              On Sale
            </div>
            <div className="cursor-pointer relative dropdown_elements w-fit">
              Out of Stock
            </div>
            <div className="cursor-pointer relative dropdown_elements w-fit">
              Shopping Cart
            </div>
            <div className="cursor-pointer relative dropdown_elements w-fit">
              Checkout
            </div>
            <div className="cursor-pointer relative dropdown_elements w-fit">
              Order Complete
            </div>
            <div className="cursor-pointer relative dropdown_elements w-fit">
              Order Tracking
            </div>
          </div>

          {/* fourth col */}
          <div className="grid grid-cols-1 grid-rows-1 relative -ml-16 w-[25.625rem]">
            <img src={megaMenuItem} alt="No Img"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShopDropdown;
