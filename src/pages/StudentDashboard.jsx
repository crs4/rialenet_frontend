import React, { useState, useEffect } from 'react'
import { Nav, NavbarBrand, Navbar } from 'reactstrap';
import { Header } from '../components/Header'
import { SideBar } from '../components/SideBar'
import { Content } from '../components/Content';
import { StudentTask } from '../components/StudentComponents';
import { IconContext } from "react-icons";
import IconButton from '@material-ui/core/IconButton';
import { HiOutlineRefresh } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from 'react-i18next';
import { selectors as UserTasksSelectors, actions as UserTasksActions } from '../store/slices/userTasks'
import { fakeTask } from '../components/common';
import ReactTooltip from "react-tooltip";
import { SearchBar } from '../components/SearchBar';
import { AiOutlineCaretLeft, AiOutlineCaretRight} from "react-icons/ai";

//@audit LocalFrontend
//const tasks = [fakeTask];

export const StudentDashboard = (props) => {
    const userProfile = useSelector(UserTasksSelectors.getUserProfile);
    const tasks = useSelector(UserTasksSelectors.getTasks);
    const offset = useSelector(UserTasksSelectors.getTasksOffset);
    const limit = useSelector(UserTasksSelectors.getTasksLimit);
    const total = useSelector(UserTasksSelectors.getTasksTotal);
    const [filteredTasks, setFilteredTasks] = useState(tasks);
    const filteredIds = useSelector(UserTasksSelectors.getFilteredIds);
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation('frontend', { useSuspense: false });

    
    useEffect(() => {

        dispatch(UserTasksActions.willLoadTasks(null));

        const seconds = 10;
        const interval = setInterval(() => {
            console.log(`WillLoad task for student every ${seconds} seconds`);
            dispatch(UserTasksActions.willLoadTasks(null));
        }, seconds * 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (filteredIds == null) setFilteredTasks(tasks)
        else {
            setFilteredTasks(tasks.filter((task) => filteredIds.includes(task["id"])));
        }

    }, [tasks, filteredIds])


    const renderTasks = () => {
        return tasks && filteredTasks && filteredTasks.map((task, index) => <StudentTask task={task} key={index} />)
    }

    const loadNextTasks = () => 
    { 
        if (tasks==null) return;
        // 1-10 di 15 -> newOffset = 0 -> 10
        const newOffset = offset+limit;
        if (newOffset>=total) return;
        dispatch(UserTasksActions.willLoadTasks(newOffset));
    }

    const loadPrevTasks = () => 
    { 
        if (tasks==null) return;
        const newOffset = offset-limit;
        if (newOffset<0) return;
        dispatch(UserTasksActions.willLoadTasks(newOffset));
    }

    const renderOffsetAndTotalTasksBar = () =>{
        if (total<0) return `(${t("loading")})`
        else
       return <span style={{display:"flex", "justifyContent" : "flex-start"}}>
       <AiOutlineCaretLeft size={"1.6em"} cursor="pointer" color='white' 
       onClick={() => {loadPrevTasks()}}>
           </AiOutlineCaretLeft> 
      
       {`${offset+1}-${offset+tasks.length} ${t("of")} ${total}`}
       <AiOutlineCaretRight size={"1.6em"} cursor="pointer" color='white' 
       onClick={() => {loadNextTasks()}}></AiOutlineCaretRight> 
      
       </span>
    }

    const renderContentHeader = () => {
        return <Navbar style={{ marginTop: "10px", marginBottom: "10px" }} className="mb-0 text-white" color="primary" light expand="md">
            <NavbarBrand className="text-white font-weight-bold">{t("answers_and_questions")}{` `}{renderOffsetAndTotalTasksBar()}</NavbarBrand>
            <Nav className="mr-auto" navbar>
            </Nav>
            <Nav navbar>
                <IconButton
                    onClick={() => { dispatch(UserTasksActions.willLoadTasks(0)); }}
                    style={{ height: 34, marginRight: 12, marginTop: 6, marginBottom: 6, borderWidth: 1, borderColor: 'white', borderStyle: 'solid', borderRadius: 4 }}
                >
                    <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                        <HiOutlineRefresh color="white" data-place="top"
                            data-for="studentdashboard"
                            data-tip={t("refresh")}
                        />
                    </IconContext.Provider>
                </IconButton>
            </Nav>
            <ReactTooltip id="studentdashboard" />
        </Navbar>
    }

    return (
        <>
            <Header className="mb-0 text-white" section="student_area" showMenu={true} />
            <SideBar active="student_dashboard" role={userProfile != null ? userProfile.role_id : null} />
            <Content>
                {renderContentHeader()}
                <div style={{ margin: "10px" }} >
                    <SearchBar tasks={tasks} />
                </div>
                {renderTasks()}
            </Content>
        </>
    )
}