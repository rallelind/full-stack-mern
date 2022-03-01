import React, { useState, useEffect } from 'react';
import "../../upload-product.css";
import "../utils/FileUpload"
import FileUpload from '../utils/FileUpload';
import Axios from 'axios';
import Surf3 from "../../imgs/surf3.png"
import Header from '../header/Header';
import { useNavigate } from "react-router-dom";
import {
    DateRangePicker,
    isInclusivelyBeforeDay
  } from "react-dates";

  import moment from "moment";
    
  import "react-dates/initialize";
  import "react-dates/lib/css/_datepicker.css";




const UploadProduct = (props) => {

    const [TitleValue, setTitleValue] = useState("") 
    const [DescriptionValue, setDescriptionValue] = useState("")
    const [PriceValue, setPriceValue] = useState(0)
    const [Images, setImages] = useState([])
    const [data, setData] = useState(null)
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [focusedInput, setFocusedInput] = useState(null);
    const [fridge, setFridge] = useState(false)
    const [stove, setStove] = useState(false)
    const [kitchen, setKitchen] = useState(false)
    const [shower, setShower] = useState(false)
    const [waterTanks, setWaterTanks] = useState(false)
    const [waterSystem, setWaterSystem] = useState(false)




    useEffect(() => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:4000/user",
        })
        .then((res) => {
            setData(res.data)
            console.log(res.data)
        })
    }, [])

    const onTitleChange = (e) => {
        setTitleValue(e.currentTarget.value)
    }

    const onDescreptionChange = (e) => {
        setDescriptionValue(e.currentTarget.value)
    }

    const onPriceChange = (e) => {
        setPriceValue(e.currentTarget.value)
    }

    const updateImages = (newImages) => {
        console.log(newImages)
        setImages(newImages)
    }
    
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault();

        if (!TitleValue || !DescriptionValue || !PriceValue || !Images || !startDate || !endDate) {
            alert("Please Fill Out All Info")
        }

        if (Images.length < 5) {
            alert("you most post 5 images")
        }

        else Axios({
            method: "POST",
            data: {
                user: data._id,
                title: TitleValue,
                description: DescriptionValue,
                price: PriceValue,
                images: Images,
                startdate: startDate,
                enddate: endDate,
                fridge: fridge,
                stove: stove,
                kitchen: kitchen,
                shower: shower,
                waterTanks: waterTanks,
                waterSystem: waterSystem,
            },
            withCredentials: true,
            url: "http://localhost:4000/api/product/uploadProduct",
        }).then((res) => { 
            console.log(res)
            navigate("/dashboard")
        })
    }


    return (
        <div>
            <Header />
            <img src={Surf3} alt="beach" className="IMG3" />
            <form onSubmit={onSubmit} className="form-group" id="form-group"> 
            <h1>Upload Van</h1>

                <FileUpload 
                    refreshFunction={updateImages}
                />

                <br />
                <br />
                <div className="calender">
                <DateRangePicker
                        startDate={startDate}
                        startDateId="startDate"
                        endDate={endDate}
                        endDateId="endDate"
                        onDatesChange={({ startDate, endDate }) => {
                        setStartDate(startDate);
                        setEndDate(endDate);
                        }}
                        focusedInput={focusedInput}
                        onFocusChange={setFocusedInput}
                        isOutsideRange={day => isInclusivelyBeforeDay(day, moment())}
                        initialVisibleMonth={() => moment().subtract(1, "month")}
                        orientation={"vertical"}
                    />
                </div>
                <br />
                <br />
                <label>Title</label>
                <input
                    className="form-control formControl"
                    onChange={onTitleChange}
                    value={TitleValue}
                />
                
                <br />
                <br />
                <label>Description</label>
                <textarea 
                    className="form-control formControl"
                    onChange={onDescreptionChange}
                    value={DescriptionValue}
                />

                <br />
                <br />
                <label>Price</label>
                <input
                    className="form-control formControl"
                    onChange={onPriceChange}
                    value={PriceValue}
                    type="number"
                />

                <br />
                <br />
                
                <h2>Included Features</h2>
                <h5>Fridge</h5>
                <input type="checkbox" onChange={(e) => setFridge(e.target.checked)} />
                <h5>Stove</h5>
                <input type="checkbox" onChange={(e) => setStove(e.target.checked)} />
                <h5>Kitchen</h5>
                <input type="checkbox" onChange={(e) => setKitchen(e.target.checked)} />
                <h5>Shower</h5>
                <input type="checkbox" onChange={(e) => setShower(e.target.checked)} />
                <h5>Water Tanks</h5>
                <input type="checkbox" onChange={(e) => setWaterTanks(e.target.checked)} />
                <h5>Water System</h5>
                <input type="checkbox" onChange={(e) => setWaterSystem(e.target.checked)} />

                <br />
                <br />
                <div className="submitbtn">
                    <button
                        onClick={onSubmit}
                        className="btn btn-primary btn-submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UploadProduct
