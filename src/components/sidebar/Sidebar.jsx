import React from 'react';

import "./sidebar.css";
import { RssFeed, Chat, PlayCircleFilled, Groups, Bookmark, HelpOutline, Work, Event, School } from '@mui/icons-material'
import { Users } from "../../dummyData";
import CloseFriend from '../closefriend/CloseFriend';
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon" />
                        <span className="sidebarListItemText">Chat</span>
                    </li> <li className="sidebarListItem">
                        <PlayCircleFilled className="sidebarIcon" />
                        <span className="sidebarListItemText">Video</span>
                    </li> <li className="sidebarListItem">
                        <Groups className="sidebarIcon" />
                        <span className="sidebarListItemText">Group</span>
                    </li> <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon" />
                        <span className="sidebarListItemText">Bookmark</span>
                    </li> <li className="sidebarListItem">
                        <HelpOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">Questions</span>
                    </li> <li className="sidebarListItem">
                        <Work className="sidebarIcon" />
                        <span className="sidebarListItemText">Jobs</span>
                    </li> <li className="sidebarListItem">
                        <Event className="sidebarIcon" />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarIcon" />
                        <span className="sidebarListItemText">Courses</span>
                    </li>

                </ul>
                <button className="sidebarButton">Show more</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    {Users.map(u =>
                        <CloseFriend key={u.id} user={u} />
                    )}

                </ul>
            </div>
        </div>
    )
}