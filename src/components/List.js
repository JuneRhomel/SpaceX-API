import React, { useEffect, useState } from 'react'
import img from "../testAssets/01-preview.png"
export default function (props) {
    console.log(props)

    const [timeSinceLaunch, setTimeSinceLaunch] = useState("");

    useEffect(() => {
        const launchDate = new Date(props.launch_date_utc);
        const now = new Date();
        const timeSinceLaunch = now.getTime() - launchDate.getTime();

        const seconds = Math.floor(timeSinceLaunch / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const years = Math.floor(days / 365);

        let timeSinceLaunchString = "";

        if (years > 0) {
            timeSinceLaunchString = `${years} year${years > 1 ? "s" : ""}`;
        } else if (days > 0) {
            timeSinceLaunchString = `${days} day${days > 1 ? "s" : ""}`;
        } else if (hours > 0) {
            timeSinceLaunchString = `${hours} hour${hours > 1 ? "s" : ""}`;
        } else {
            timeSinceLaunchString = `${minutes} minute${minutes > 1 ? "s" : ""}`;
        }

        setTimeSinceLaunch(timeSinceLaunchString);
    }, [props.launchDateUtc]);

    const [display, setDisplay] = useState(false)
    const handelDisplay = () => {
        setDisplay(!display)
    }

    return (
        <div className='list-box'>

            <div className='head'>
                <h2>{props.mission_name}</h2>
                {
                props.upcoming == null ? 
                <b className='success'>success</b>
                : props.upcoming == true? 
                <b className='failed'>failed</b> 
                : 
                <b className='upcoming'>upcoming</b>
                }

            </div>
            {display ?
                <>
                    <div className='links'>
                        {props.links.video_link == true ?
                            <small>in a year</small>
                            :
                            <>
                                <small>{timeSinceLaunch}</small>
                                <a className='article' href={props.links.article_link}>Article</a>
                                <a href={props.links.video_link}>Video</a>
                            </>
                        }

                    </div>
                    <div className='description'>
                        {props.links.mission_patch_small ?
                            <img src={props.links.mission_patch_small} alt="SpaceX" />
                            :
                            ""
                        }

                        <p>{props.details ? props.details : "No Details Yet"}</p>
                    </div>
                </>
                : ""
            }
            <button onClick={handelDisplay}>Hide</button>
        </div>
    )
}