import React from 'react';
import {
  Label, Button, Badge, Input, Alert, Card, CardText, CardBody, CardLink,
  CardHeader, CardFooter, CardTitle, CardSubtitle, Container
} from 'reactstrap';
import {Border, VictoryChart, VictoryBar, VictoryLegend, VictoryGroup, VictoryTooltip, VictoryVoronoiContainer, VictoryAxis, VictoryLabel, VictoryStack, VictoryContainer } from 'victory'

/*
    "cannotAnswer": "reason",
    "needClarification": "note",
    "notSure": "note",
    "myAnswer": "answer",

    "goToAttachment": "attachment",
    "goToTimelinePosition": "timelineLink",
    "goToTag": "tag",
    "freeAnnotation" : "message",
    "rightAnswer": "message"
    */



const studentInteractions = ["cannotAnswer","notSure","needClarification","myAnswer",""]
const studentsScale = "red"
const teacherFeedbacks = ["freeAnnotation","goToAttachment","goToTimelinePosition","goToTag","rightAnswer"]
const teachersScale = "green"
const buildDataset = (myData) =>
  {
    const students = Object.keys(myData)
    const totInteractions = studentInteractions.length; // reso uguale ai possibili feedback del docente
    const totStudents = students.length;
    let data = []
    for (let i=0;i<totInteractions;i++)
    {
      let interation = []
      //students interaction
      let studentsInteraction = []
      let teacherFeedback = []
      for (let j=0;j<totStudents;j++)
      {
        const yStudents = myData[students[j]]["interactionsDetails"][studentInteractions[i]] || 0
        const yTeacher = myData[students[j]]["feedbacksDetails"][teacherFeedbacks[i]] || 0
        studentsInteraction.push({ x: `${students[j]}`, y: yStudents, label: ` ${studentInteractions[i]} (${yStudents}) `, type:`${studentInteractions[i]}`})
        teacherFeedback.push({ x: `${students[j]}`, y: yTeacher, label: ` ${teacherFeedbacks[i]} (${yTeacher}) `,  type:`${teacherFeedbacks[i]}`})
      }

      interation.push(studentsInteraction)
      interation.push(teacherFeedback)

      data.push(interation)
    }
    console.log("Data:" ,data)
    return data
  }

const myDataset = [

  // First interaction/feedback
  [
    // Students first interaction
    [
      { x: "Pantera\nAssonnata", y: 0, type: "notSure" },
      { x: "scoiattolo", y: 1, type: "notSure" },
      { x: "gatto", y: 10, type: "notSure" }
    ],
    
      // Teachers first feedback
    [
      { x: "Pantera\nAssonnata", y: 2, type: "goToTimeline" },
      { x: "scoiattolo", y: 1, type: "goToTimeline" },
      { x: "gatto", y: 5, type: "goToTimeline" }
    ]
  ],

  // Second interaction/feedback
  [
     // Students second interaction
    [
    { x: "Pantera\nAssonnata", y: 3, type: "myAnswer" },
    { x: "scoiattolo", y: 2, type: "myAnswer" },
    { x: "gatto", y: 2, type: "myAnswer" }
  ],

       // Teachers second feedback
    [
      { x: "Pantera\nAssonnata", y: 2, type: "rightAnswer" },
      { x: "scoiattolo", y: 1, type: "rightAnswer" },
      { x: "gatto", y: 1, type: "rightAnswer" }
    ]

  ]
];

const colorsMap = {
  "rightAnswer" : "green",
  "goToTimeline" : "yellow",
  "goToTimelinePosition" : "pink",
  "cannotAnswer" : "red",
  "notSure" : "orange",
  "needClarification" : "blue"
}

const TransactionsAnalyzer = (props) => {

  const dataset = buildDataset(props.data) //this.transformData(myDataset);
  return(
      <Container>
        <Card className="mb-4" style={{ borderColor: "#007bff" }}>
          <CardHeader style={{borderColor: "#007bff", paddingBottom: 0, color: 'white' }}>
            <CardTitle tag="h6" className="text-center">Istogramma</CardTitle>
          </CardHeader>
          <CardBody>

            <VictoryChart
              domainPadding={{ x: 50 }}
              containerComponent={
                <VictoryVoronoiContainer
                />
              }
            >

            
              <VictoryGroup offset={20} style={{ data: { width: 15 } }}>
                <VictoryStack colorScale = {studentsScale}
                  
                >
                  {dataset.map((data, i) => {
                    return <VictoryBar labelComponent={<VictoryTooltip/>} data={data[0]} key={i} />;
                  })}
                </VictoryStack>
                <VictoryStack
                  colorScale={teachersScale}
                >
                  {dataset.map((data, i) => {
                    return <VictoryBar labelComponent={<VictoryTooltip/>}  data={data[1]} key={i}/>;
                  })}
                </VictoryStack>
              </VictoryGroup>
              <VictoryAxis dependentAxis
                tickFormat={(tick) => `${tick}`}
              />
              <VictoryAxis tickFormat={(studentId) => `${props.data[studentId]["name"]}\n${props.data[studentId]["surname"]}`}  />
              {/*
                Object.keys(fakeData).map((d, i) => {
                  return (
                    <VictoryAxis dependentAxis
                      key={i}
                      style={{ tickLabels: { fill: "none" } }}
                      axisValue={d}
                    />
                  );
                })
              */}
            </VictoryChart>

          </CardBody>
          <CardFooter>
          <div style={{margin:"10px",display:"flex" , justifyContent:"space-between"}}>
              <VictoryLegend
                title="  Feedback dei docenti"
                centerTitle
                gutter={5}
                rowGutter={5}
                itemsPerRow={10}
                orientation="vertical"
                
                style={{labels:{fontSize: 18},   title: { fontSize: 20 } }}
                colorScale={teachersScale}
                data={
                  teacherFeedbacks.filter((data) => {return data!=null && data.length>0}).map((data) => {return { name: data } })
              }
              />
                <VictoryLegend
                title="  Risposte degli studenti"
                centerTitle
                gutter={5}
                rowGutter={5}
                orientation="vertical"
               
                style={{ labels:{fontSize: 18},   title: { fontSize: 20 } }}
                colorScale={studentsScale}
                data={
                  studentInteractions.filter((data) => {return data!=null && data.length>0}).map((data) => {return { name: data } })
              }
              />
              </div>
          </CardFooter>
        </Card>
      </Container>)
      
    }

   
export default TransactionsAnalyzer;
