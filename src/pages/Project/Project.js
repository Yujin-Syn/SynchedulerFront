import React, { useState } from "react";

// components
import PageTitle from "../../Components/PageTitle";
import Tabbar from "../../Components/Tabbar";
import TaskSheet from "./views/sheet/TaskSheet";

// styles
import { Link, Button } from "@material-ui/core";

const examples = [
    {
        "key" : "0",
        "name": "Hyundai AR Development",
        "description": "현대 AR platform 개발",
    },
    {
        "key" : "1",
        "name": "Posco Consulting",
        "description": "포스코 컨설팅",
    },
    {
        "key" : "2",
        "name": "Lippo",
        "description": "Lippo",
    },
    {
        "key" : "3",
        "name": "Syntegrate Task Management",
        "description": "현대 AR platform 개발",
    },
    {
        "key" : "4",
        "name": "K-BIM Library",
        "description": "3D Experience 라이브러리 구축",
    },
];

const name = "PROJECT_DETAIL";
const labels = ['DASHBOARD', 'KANBAN', 'SHEET', 'CALNDER'];
const views = ['1', '2', <TaskSheet />, '4'];

function Project({match}) {
    // DB 에서 정보 가져오기
    const info = examples.find(e => e.key === match.params.id);

    if(info === undefined) {
        return (<div>Wrong URL!</div>);
    }

    return (
        <>
            <PageTitle title={info.name}/>
            <Tabbar name={name} labels={labels} views={views}/>
        </>
    );
}

export default Project;