import React from 'react'
import { Timeline, Text } from '@mantine/core';
import { FcAddImage } from "react-icons/fc"
import { BsCalendar2Date } from "react-icons/bs"
import { GiSurferVan } from "react-icons/gi"
import { MdOutlineSubtitles } from "react-icons/md"
import { GiPriceTag } from "react-icons/gi"
import { MdSurfing } from "react-icons/md"

const TimelineProduct = (props) => {
    return (
        <div className="IMG3">
        <Timeline color="grape" lineWidth={2} active={props.active} bulletSize={30}>
            <Timeline.Item
                title="Upload Image"
                bullet={<FcAddImage size={22}/>}
            >
                <Text color="dimmed">Pick the most stunning images of your vehicle.<br/>You have to atleast pick 5 images.</Text>
            </Timeline.Item>

            <Timeline.Item 
                title="Pick a date"
                bullet={<BsCalendar2Date size={20}/>}
            >
                <Text color="dimmed">Pick the dates you want to rent out your van.<br/></Text>
            </Timeline.Item>

            <Timeline.Item
                title="Pick a title"
                bullet={<MdOutlineSubtitles size={22}/>}
            >
                <Text color="dimmed">Pick a awesome title that is way to catchy.<br/>Like "The Surfer" just kidding don't!</Text>
            </Timeline.Item>

            <Timeline.Item
                title="Describe your vehicle"
                bullet={<GiSurferVan size={22}/>}
            >
                <Text color="dimmed">Make an awesome description of what your van<br/>has to offer. This should be descriptive!</Text>
            </Timeline.Item>

            <Timeline.Item
                title="Pick a price"
                bullet={<GiPriceTag size={22}/>}
            >
                <Text color="dimmed">Pick a good price for your van. </Text>
            </Timeline.Item>
            <Timeline.Item
                title="Pick the features the van includes"
                bullet={<MdSurfing size={22}/>}
            >
                <Text color="dimmed">Show of the features your van has to offer!<br/>Do you have surf gear? Aweeeeesome!</Text>
            </Timeline.Item>
        </Timeline>
    </div>  
    )
}

export default TimelineProduct
