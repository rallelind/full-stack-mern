import React, { useState, useEffect } from 'react';
import "../../upload-product.css";
import "../utils/FileUpload"
import FileUpload from '../utils/FileUpload';
import Axios from 'axios';
import Header from '../header/Header';
import { useNavigate } from "react-router-dom";
import { DateRangePicker, isInclusivelyBeforeDay } from "react-dates";
import moment from "moment";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { Checkbox, Textarea, Input, Button, Text } from '@mantine/core';
import TimelineProduct from './TimelineProduct';


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
    const [show, setShow] = useState("start")
    const [active, setActive] = useState(0)


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

    const navigateUploadProduct = (e) => {
        e.preventDefault()
        if (show === "start") {
            if (Images.length >= 5) { 
                setShow("pick a date")
                setActive(1)
            }
        }
        if (show === "pick a date") {
            if(startDate && endDate) {
                setShow("pick a title")
                setActive(2)
            }
        }
        if (show === "pick a title") {
            if(TitleValue.length > 1) {
                setShow("pick a description")
                setActive(3)
            }
        }
        if (show === "pick a description") {
            if(DescriptionValue.length > 1) {
                setShow("pick a price")
                setActive(4)  
            }
        }
        if (show === "pick a price") {
            if(PriceValue > 1) {
                setShow("pick features")
                setActive(5)
            }
        }
        if (show === "pick features") {
            Axios({
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
                navigate("/profilepage")
            })
        }
    }

    const goBackButton = (e) => {
        if (show === "pick a date") {
            setShow("start")
            setActive(0)
        }
        if (show === "pick a title") {
            setShow("pick a date")
            setActive(1)
        }
        if (show === "pick a description") {
            setShow("pick a title")
            setActive(2)
        }
        if (show === "pick a price") {
            setShow("pick a description")
            setActive(3)  
        }
        if (show === "pick features") {
            setShow("pick a price")
            setActive(4)
        }
    }

    return (
        <div>
            <Header />
            <TimelineProduct 
                active={active}
            />
            <form className="form-group" id="form-group"> 
        
            <h1 className="uploadTitle">Upload Van</h1>
            {show === "start" &&
                <FileUpload 
                    refreshFunction={updateImages}
                    
                />
            }
            {show === "pick a date" &&
                <div className="calender">
                <Text color="dimmed">Pick the dates you wish to rent out your van</Text>
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
            }
            {show === "pick a title" &&
                <>
                <label>Title</label>
                <Text color="dimmed">Pick a awesome title for your amazing van</Text>
                <Input
                    className="formControl"
                    onChange={onTitleChange}
                    value={TitleValue}
                />
                </>
            }
            {show === "pick a description" &&
                <>
                <label>Description</label>
                <Text color="dimmed">Write a description for the van. Be concise and interesting.</Text>
                <Textarea 
                    onChange={onDescreptionChange}
                    value={DescriptionValue}
                />
                </>
            }
            {show === "pick a price" &&
            <>
                <label>Price</label>
                <Input
                    className="formControl"
                    onChange={onPriceChange}
                    value={PriceValue}
                    type="number"
                />
            </>
            }
            {show === "pick features" &&
            <>
            <h3>Pick Features</h3>
            <div className="grid-container">
                <Checkbox 
                    type="checkbox" 
                    onChange={(e) => setFridge(e.target.checked)} 
                    color="grape"
                    radius="md"
                    size="xl"
                    label="Fridge"
                    className="grid-item"
                />
                <Checkbox 
                    type="checkbox" 
                    onChange={(e) => setStove(e.target.checked)} 
                    color="grape"
                    radius="md"
                    size="xl"
                    label="Stove"
                    className="grid-item"
                />
                <Checkbox 
                    type="checkbox" 
                    onChange={(e) => setKitchen(e.target.checked)} 
                    color="grape"
                    radius="md"
                    size="xl"
                    label="Kitchen"
                    className="grid-item"
                />
                <Checkbox 
                    type="checkbox" 
                    onChange={(e) => setShower(e.target.checked)} 
                    color="grape"
                    radius="md"
                    size="xl"
                    label="Shower"
                    className="grid-item"
                />
                <Checkbox 
                    type="checkbox" 
                    onChange={(e) => setWaterTanks(e.target.checked)} 
                    color="grape"
                    radius="md"
                    size="xl"
                    label="Water Tanks"
                    className="grid-item"
                />
                <Checkbox 
                    type="checkbox" 
                    onChange={(e) => setWaterSystem(e.target.checked)} 
                    color="grape"
                    radius="md"
                    size="xl"
                    label="Water System"
                    className="grid-item"
                />
                </div>
                </>
            }
                <div className="navigateUploadProduct">
                    {show === "start" ? <div></div> : 
                    <Button 
                        variant="white" 
                        color="grape"
                        onClick={goBackButton}
                    >
                        Go Back
                    </Button>
                    }
                    <Button variant="gradient" gradient={{ from: 'grape', to: 'pink', deg: 35 }}
                        onClick={navigateUploadProduct}
                        radius="lg" 
                        size="md"
                    >
                        {show !== "pick features" ? <>Next</> : <>Submit Van</>}
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default UploadProduct
