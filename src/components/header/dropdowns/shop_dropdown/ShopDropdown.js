import React from "react";

function ShopDropdown(props) {
  return (

    <div
      className=" absolute top-20 px-16 py-12 pr-40 left-20 peer-hover:flex hover:flex
         flex-col bg-white drop-shadow-lg"
         onMouseEnter={props.enterHome}
        //  onMouseLeave={props.leaveHome}
         onMouseLeave={props.enterHome}
    >
      <div className="container">
        <div className="grid grid-cols-3 col_x_gap text-sm">
          {/* first col */}
          <div className="grid grid-cols-1 grid-rows-6 gap-y-3">
          <div className="cursor-pointer relative dropdown_elements">SHOP 1</div>
          <div className="cursor-pointer relative dropdown_elements">SHOP 2</div>
          <div className="cursor-pointer relative dropdown_elements">SHOP 3</div>
          <div className="cursor-pointer relative dropdown_elements">SHOP 4</div>
          <div className="cursor-pointer relative dropdown_elements">SHOP 5</div>
          <div className="cursor-pointer relative dropdown_elements">SHOP 6</div>
          </div>
          {/* second col */}
          <div className="grid grid-cols-1 grid-rows-6 gap-y-3">
          <div className="cursor-pointer relative dropdown_elements">SHOP 7</div>
          <div className="cursor-pointer relative dropdown_elements">SHOP 8</div>
          <div className="cursor-pointer relative dropdown_elements">SHOP 9</div>
          <div className="cursor-pointer relative dropdown_elements">SHOP 10</div>
          <div className="cursor-pointer relative dropdown_elements">SHOP 11</div>
          <div className="cursor-pointer relative dropdown_elements">SHOP 12</div>
          </div>
          {/* third col */}
          <div className="grid grid-cols-1 grid-rows-6 gap-y-3">
          <div className="cursor-pointer relative dropdown_elements">SHOP 13</div>
          <div className="cursor-pointer relative dropdown_elements">SHOP 14</div>
          <div className="cursor-pointer relative dropdown_elements">SHOP 15</div>
          <div className="cursor-pointer relative dropdown_elements">SHOP 16</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShopDropdown;
