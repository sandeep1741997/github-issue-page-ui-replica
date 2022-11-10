import React from 'react';
import { Link } from 'react-router-dom';
import { CommentIcon, GitPullRequestIcon, IssueOpenedIcon } from '../UI/Icon';
import './IssuePage.css';
import Status from './Status';

const IssueList = ({ data }) => {
    const MINUTE = 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;
    const WEEK = DAY * 7;
    const MONTH = DAY * 30;
    const YEAR = DAY * 365;

    function getTimeAgo(date) {
        const now = new Date();
        let openDate = new Date(date)
        const secondsAgo = Math.round((now - openDate) / 1000);

        if (secondsAgo < MINUTE) {
            return secondsAgo + ` second${secondsAgo !== 1 ? "s" : ""} ago`;
        }

        let divisor;
        let unit = "";

        if (secondsAgo < HOUR) {
            [divisor, unit] = [MINUTE, "minute"];
        } else if (secondsAgo < DAY) {
            [divisor, unit] = [HOUR, "hour"];
        } else if (secondsAgo < WEEK) {
            [divisor, unit] = [DAY, "day"];
        } else if (secondsAgo < MONTH) {
            [divisor, unit] = [WEEK, "week"];
        } else if (secondsAgo < YEAR) {
            [divisor, unit] = [MONTH, "month"];
        } else {
            [divisor, unit] = [YEAR, "year"];
        }

        const count = Math.floor(secondsAgo / divisor);
        return `${count} ${unit}${count > 1 ? "s" : ""} ago`;
    }

    return (
        <React.Fragment>
            {data && data.map((item, idx) =>
                <div className='list-item' key={idx}>
                    <div className='main-cntbar'>
                        <div>
                            <Link to={''}>
                                <IssueOpenedIcon className={'item-icon'} />
                                <span className='title' onClick={e => window.open(item.url)}>{item.title}</span>
                            </Link>
                            <Status labels={item.labels} />
                        </div>
                        <div className='inner-cntbar'>
                            {item.reactions.total_count ?
                                <div className='right-icon cursor' onClick={e => window.open(item.comments_url)}>
                                    <GitPullRequestIcon />
                                    <span className="counter-txt">{item.reactions.total_count}</span>
                                </div> : ''}
                            {item.comments ?
                                <div className='right-icon cursor' onClick={e => window.open(item.comments_url)}>
                                    <CommentIcon />
                                    <span className="counter-txt">{item.comments}</span>
                                </div> : ''}
                        </div>
                    </div>
                    <div>
                        <span>#{item.number} opened <time>{getTimeAgo(item.updated_at)}
                        </time> by <Link to={'/issue-opened'}>{item.user.login}</Link></span>
                    </div>
                </div>
            )}

        </React.Fragment>
    );
};

export default IssueList;