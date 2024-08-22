import React, { useEffect, useState } from "react";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";

import '.././//HomePage/home.css';

function HomePage(){
    let[data,setData] = useState([{}]);
    const getData = async () => {
        try{
            let url="https://hoblist.com/api/movieList";
            let postData= {
                headers:{'Content-Type':'application/json'},
                method:"post",
                body:JSON.stringify({category: "movies",language: "kannada", genre: "all",sort: "voting"})
            }
            await fetch(url, postData)
            .then( res => res.json())
            .then( resArray => {
                setData(resArray.result)
                console.log((resArray.result))
            })
        }
        catch(error){
            console.log("Error : ",error)
        }
    }
    useEffect(() => {
        getData();
    },[])
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12 ">
                    {
                        Object.values(data).map((value,index) => {
                            return(
                                <div key={value._id} className="d-flex justify-content-center p-2">
                                    <div style={{width:"370px"}} className="d-flex flex-column">
                                        <div className="d-flex gap-2">
                                            <div style={{width:"10%"}} className="d-flex flex-column align-items-center justify-content-center">
                                                <BiSolidUpArrow className="fs-3" />
                                                <p className="fs-2">{value.voting}</p>
                                                <BiSolidDownArrow className="fs-3" />
                                                <p style={{textAlign:"end"}} className="">Votes</p>
                                            </div>
                                            <div id="imageContainer" style={{width:"30% "}} className="">
                                                <img style={{width:"100%", height:"100%"}} className="img-thumbnail" src={value.poster} alt="img"/>
                                            </div>
                                            <div style={{width:"60%"}} className="d-flex flex-column justify-content-center">
                                                <p style={{fontWeight:"bold"}}>{value.title}</p>
                                                <p><span style={{fontWeight:"500",color:"grey"}}>Genre:</span> {value.genre}</p>
                                                <p><span style={{fontWeight:"500",color:"grey"}}>Director:</span> {value.director}</p>
                                                <p><span style={{fontWeight:"500",color:"grey"}}>Starring:</span> {value.stars}</p>
                                                <p><span>Mins |</span><span>{value.language} |</span><span>{value.releasedDate}</span></p>
                                                <p className="text-primary"><span>{value.pageViews} views | </span><span>voted by {value.voting}</span></p>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary mt-3">Watch Trailer</button>
                                        <hr/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default HomePage;