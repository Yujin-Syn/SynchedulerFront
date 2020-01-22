import React from "react";
import {
    Route,
    Switch,
    Redirect,
    withRouter,
} from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import AllProject from "../../pages/AllProjects";
import Project from "../../pages/Project";

import { useLayoutState } from "../../Context/LayoutContext";


function Layout(props) {
    const classes = useStyles();

    var layoutState = useLayoutState();

    return (
        <div className={classes.root}>
            <>
                <Header history={props.history} />
                <Sidebar />
                <div className={classnames(classes.content, {[classes.contentShift]: layoutState.isSidebarOpened,})}>
                    <div className={classes.fakeToolbar} />
                    <Switch>
                        <Route path="/app/projects" component={AllProject} />
                        <Route path="/app/project/:id" component={Project} />
                    </Switch>
                </div>
            </>
        </div>
    );
}
//                        <Route path="/app/project/:id" component={ProjectDetail} />

export default withRouter(Layout);
