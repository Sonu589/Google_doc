import React from 'react';
import './Ruler.css'
import {TbTriangleInvertedFilled} from "react-icons/tb"
import {MdArrowDropDown} from "react-icons/md"
const Ruler = () => {
  return (

    <>
    <div className="ruler-nums">
      <span>1</span>
      <span><TbTriangleInvertedFilled style = {{color: 'blue'}}/></span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
      <span>6</span>
      <span style={{color:"blue",fontSize:"30px"}}><MdArrowDropDown /></span>
      <span>7</span>
    </div>

    <div className="ruler-container">
      <div className="ruler-lines">
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
      </div>
      <div className="ruler-lines">
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
      </div>
      <div className="ruler-lines">
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
      </div>
      <div className="ruler-lines">
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
      </div>
      <div className="ruler-lines">
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
        <div className="ruler-line"></div>
      </div>
    </div>


    </>
  );
};

export default Ruler;
