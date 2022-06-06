import React, { PureComponent, useState, useEffect } from 'react'
import { CommentSection } from 'react-comments-section'
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams, Link } from 'react-router-dom'
import moment from 'moment'
import { selectors as userTasksSelectors, actions as UserTasksActions } from '../store/slices/userTasks'

import { Header } from '../components/Header'
import { SideBar } from '../components/SideBar'
import { Content } from '../components/Content';
import {
  Card, CardImg, CardText, CardBody, CardHeader,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const data = [
  {
    "userId": "01a",
    "comId": "012",
    "fullName": "Riya Negi",
    "avatarUrl": "https://ui-avatars.com/api/name=Riya&background=random",
    "text": "Hey, Loved your blog! ",
    "replies": [
      {
        "userId": "02a",
        "comId": "013",

        "fullName": "Adam Scott",
        "avatarUrl": "https://ui-avatars.com/api/name=Adam&background=random",
        "text": "Thanks! It took me 1 month to finish this project but I am glad it helped out someone!🥰"
      },
      {
        "userId": "01a",
        "comId": "014",

        "fullName": "Riya Negi",
        "avatarUrl": "https://ui-avatars.com/api/name=Riya&background=random",
        "text": "thanks!😊"
      }
    ]
  },
  {
    "userId": "02b",
    "comId": "017",
    "fullName": "Lily",
    "text": "I have a doubt about the 4th point🤔",
    "avatarUrl": "https://ui-avatars.com/api/name=Lily&background=random"
  },
  {
    "userId": "01c",
    "comId": "018",
    "fullName": "Derek",
    "text": "Great explanation!!!",
    "avatarUrl": "https://ui-avatars.com/api/name=Derek&background=random"
  }
]

const md5 = require('md5');


const RialeDiscussionBoard = (props) => {
  const [comment, setComment] = useState([])
  const dispatch = useDispatch();
  const tasks =  useSelector(userTasksSelectors.getTasks);  //(result == null) ? [] : result["tasks"]

  const userId = "01a"
  const avatarUrl = "https://ui-avatars.com/api/name=Riya&background=random"
  const name = "xyz"
  const signinUrl = "/signin"
  const signupUrl = "/signup"
  let count = 0

  const query = new URLSearchParams(window.location.search);
  const passcode = localStorage.getItem("passcode");
  const passcodeMD5 = query.get("passcode");
  console.log("params:", passcode);
  const isAuthenticated = passcodeMD5!=null && md5(passcode)==passcodeMD5;

  

  comment.map(i => { count += 1; i.replies && i.replies.map(i => count += 1) })
 
  const loadAllTasks = async () => {
    console.log("WENET loading tasks")
    try {
      const url = `/tasks?passcode=${passcode}`
      const response = await fetch(url,
        {
          headers: { "Content-Type": "application/json" },
          method: "GET"
        }
      )
      console.log("WENET authentication response:", response)

      const result = await response.json();
      console.log("WENET authentication result:", result)

     
      setComment(tasks.map((task) => {
        return (
          {
            "userId": "01a",
            "comId": "012",
            "fullName": "Riya Negi",
            "avatarUrl": "https://ui-avatars.com/api/name=Riya&background=random",
            "text": task["goal"]["name"],
            "replies": []
          });
        /*
        setPosts(
          tasks.map((task)=> {return(
           {"profileImage" : 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg',
           "name" : task["goal"]["name"],
           "content" : task["goal"]["description"],
           "date" : moment(parseInt(task["_creationTs"])).toDate()
           } )
          }
        )) */
      }));

    } catch (e) { console.log("WENET response error:", e) }
  }
  
  useEffect(() => {
    dispatch(UserTasksActions.willLoadTasks());
    //loadAllTasks()
  }, [])


  return (
    <>
    <Header className="mb-0 text-white" section="Forum" showMenu={true} />
      <SideBar active="dashboard" />
      <Content>
        <Card className="mb-4" style={{ padding: "10px", borderColor: "#007bff" }}>
          <CardHeader style={{ backgroundColor: "#007bff", borderColor: "#007bff", paddingBottom: 0, color: 'white' }}>
            <CardTitle>RIALENET - Forum degli studenti (n.{count} Commenti) {isAuthenticated ? "OK" : "FORBIDDEN"}
              {passcode && <div className="pull-right">{passcode}

              </div>}
            </CardTitle>

          </CardHeader>
          <CardBody>
            <CommentSection currentUser={userId && { userId: userId, avatarUrl: avatarUrl, name: name }}
              commentsArray={comment || []}
              setComment={setComment} signinUrl={signinUrl} signupUrl={signupUrl} />
          </CardBody>

        </Card>
      </Content>
    </>
  )

}

export default RialeDiscussionBoard



