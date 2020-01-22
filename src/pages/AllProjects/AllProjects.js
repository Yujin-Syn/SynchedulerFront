import React, { useState } from "react";

// components
import PageTitle from "../../Components/PageTitle";
import Tabbar from "../../Components/Tabbar";

// styles
import ProjectGrid from "./views/grid/projectGrid";

const labels = ["All Projects", "Dashboard", "Setting"];
const name = "Project Tabs";

function AllProject() {
    const views = [<ProjectGrid />, "tab 2", "tab 3"];

    return (
        <>
            <PageTitle title="Projects" button="New Project +" />
            <Tabbar name={name} labels={labels} views={views}/>
        </>
    );
}

export default AllProject;