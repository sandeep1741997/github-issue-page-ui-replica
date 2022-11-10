import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./IssuePage.css";
import axios from "axios";
import IssueList from "./IssueList";
import { CheckIcon, IssueOpenedIcon, LightBulbIcon } from "../UI/Icon";
import InfiniteScroll from "react-infinite-scroll-component";

const PAGE_NUMBER = 1;
const IssuePage = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(PAGE_NUMBER);
    const getData = () => {
        setTimeout(() => {
            axios
                .get(`https://api.github.com/repos/facebook/react/issues?page=${page}`)
                .then((response) => {
                    console.log(page, "setData", response);
                    setData(prev => { return ([...prev, ...response.data]) });
                });
            setPage(page + 1)
        }, 1000)
    }
    useEffect(() => {
        getData();
    }, []);


    return (
        <React.Fragment>
            <div className="card">
                <div className="card-header">
                    <div className="content-left">
                        <Link to={"/open"} className="cursor">
                            <IssueOpenedIcon />
                            <strong>
                                <span className="content-left-item">625</span>
                                <span className="content-left-item">Open</span>
                            </strong>
                            <span className="content-left-item">
                                <CheckIcon />
                            </span>
                            <span className="content-left-item">10104</span>
                            <span className="content-left-item">Closed</span>
                        </Link>
                    </div>
                    <div className="content-right">
                        <ul>
                            <li className="cursor item">Author</li>
                            <li className="cursor item">Label</li>
                            <li className="cursor item">Projects</li>
                            <li className="cursor item">Milestones</li>
                            <li className="cursor item">Assignee</li>
                            <li className="cursor item">Sort</li>
                        </ul>
                    </div>
                </div>
                <div className="card-body">
                    <InfiniteScroll
                        dataLength={data.length}
                        next={getData}
                        hasMore={true}
                        loader={<div>Loading...</div>}
                        endMessage={
                            <p style={{ textAlign: "center" }}>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }
                    >
                        <IssueList data={data} />
                    </InfiniteScroll>
                </div>
            </div>
            <div className="protip">
                <LightBulbIcon />
                <span>
                    {" "}
                    <strong>ProTips!</strong> What's not been updated in a month
                </span>
            </div>
        </React.Fragment>
    );
};

export default IssuePage;
