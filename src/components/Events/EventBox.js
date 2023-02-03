import React from 'react';
import './EventBox.css';
import { FaRegCalendar, FaRegClock } from "react-icons/fa";

function EventBox({ props, index }) {
    const coor_len = (props?.coor).length;
    return (
        <>

            <div className='eventBox' key={index}>

                <div className='LeftOfEventBox'>
                    <div className='evntDesc' style={{ float: "left" }}>

                        <h1 style={{ textAlign: "left" }}>{props?.nameOfEvent}</h1>
                        <p style={{ textAlign: "left" }}>{props?.desc}</p>
                        <div style={{ float: "left" }}>
                            <button className='registerNowEvent'> {props?.register} </button>
                            <button className='problemStat'> {props?.schedule} </button>
                        </div>
                        <div style={{ float: "left" }}>
                            <h2 style={{ marginTop: "6px", textAlign: "left" }}>Prizes Worth <br></br> {props?.prizeMoney} </h2>
                            <p style={{ fontSize: "14px", textAlign: "left" }}>
                                <FaRegCalendar /> Register Before {props?.dateBefore}<br></br>
                                <FaRegClock /> 11:59 P.M.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='RightOfEventBox'>
                    <div className='objOfEventBox'>
                        
                        {
                            (coor_len === 1) ? (props?.coor)?.map((cor) => {
                                return <div className='workshop__image'><img src={cor.img} className='boxImgSingle' alt='.' />
                                    <div style={{ marginRight: "10px", textAlign: "center" }}> <span> {cor.nameOfEventCoordinator} </span><br></br> <span> {cor.phoneNo} </span><br></br> <span> {cor.mail} </span></div>
                                </div>
                            }
                            ) :
                                (props?.coor)?.map((cor) => {
                                    return <div className='workshop__image'><img src={cor.img} className='boxImgDouble' alt='.' />
                                        <div style={{ marginRight: "10px", textAlign: "center" }}> <span> {cor.nameOfEventCoordinator} </span><br></br> <span> {cor.phoneNo} </span><br></br> <span> {cor.mail} </span></div>
                                    </div>
                                })
                        }

                    </div>
                </div>

            </div>
        </>

    )
}

export default EventBox;