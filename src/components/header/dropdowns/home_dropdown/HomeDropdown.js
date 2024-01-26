import React from "react";

function HomeDropdown(props) {
  return (

    <div
      className=" absolute top-20 px-16 py-12 pr-40 left-20 peer-hover:flex hover:flex
         flex-col bg-white drop-shadow-lg"
         onMouseEnter={props.enterHome}
         onMouseLeave={props.leaveHome}
    >
      <div className="container">
        <div className="grid grid-cols-3 col_x_gap text-sm">
          {/* first col */}
          <div className="grid grid-cols-1 grid-rows-6 gap-y-3">
          <div className="cursor-pointer relative dropdown_elements">Home 1</div>
          <div className="cursor-pointer relative dropdown_elements">Home 2</div>
          <div className="cursor-pointer relative dropdown_elements">Home 3</div>
          <div className="cursor-pointer relative dropdown_elements">Home 4</div>
          <div className="cursor-pointer relative dropdown_elements">Home 5</div>
          <div className="cursor-pointer relative dropdown_elements">Home 6</div>
          </div>
          {/* second col */}
          <div className="grid grid-cols-1 grid-rows-6 gap-y-3">
          <div className="cursor-pointer relative dropdown_elements">Home 7</div>
          <div className="cursor-pointer relative dropdown_elements">Home 8</div>
          <div className="cursor-pointer relative dropdown_elements">Home 9</div>
          <div className="cursor-pointer relative dropdown_elements">Home 10</div>
          <div className="cursor-pointer relative dropdown_elements">Home 11</div>
          <div className="cursor-pointer relative dropdown_elements">Home 12</div>
          </div>
          {/* third col */}
          <div className="grid grid-cols-1 grid-rows-6 gap-y-3">
          <div className="cursor-pointer relative dropdown_elements">Home 13</div>
          <div className="cursor-pointer relative dropdown_elements">Home 14</div>
          <div className="cursor-pointer relative dropdown_elements">Home 15</div>
          <div className="cursor-pointer relative dropdown_elements">Home 16</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeDropdown;
