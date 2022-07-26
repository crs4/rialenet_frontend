import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BootstrapTable from 'react-bootstrap-table-next';
import { selectors as StudentsProfileSelector } from '../store/slices/userTasks'
import { useTranslation } from 'react-i18next';
import { Badge } from 'reactstrap'
import TransactionsAnalyzer from './TransactionsAnalyxer';


const fakeProfiles = [
  {
    "passcode": "VPFYBRSX", "name": "Pantera",
    "surname": "Assonnata", "wenet_id": 928, "id": "B+",
    "description": "Profilo B+", "teacher_wenet_id": 671
  },
  {
    "passcode": "APFYBRSX", "name": "Scoiattolo",
    "surname": "Ardito", "wenet_id": 1020, "id": "C+",
    "description": "Profilo C+", "teacher_wenet_id": 671
  }

] as any;


export const TaskTransactionsSummary = (props: any) => {
  const { t, i18n } = useTranslation('frontend', { useSuspense: false });
  const dispatch = useDispatch();
  const studentsProfile = useSelector(StudentsProfileSelector.getStudentsProfile);
  //const studentsProfile = fakeProfiles;

  const [summaryData, setSummaryData] = useState([] as any)

  const convertData = (data:any) =>
 {
   let tdata = {} as any;
   for (let i=0;i<data.length;i++)
   {tdata[data[i]["wenet_id"]] = data[i]}
 
   console.log("Fake data:", tdata);
   return tdata
 }

  useEffect(() => {
    let data = []
    const { summary } = props;

    for (let i = 0; i < studentsProfile.length; i++) {
      let record = { ...studentsProfile[i] }
      console.log("summary (TT)", props.summary);
      const studentSummary = summary[record["wenet_id"]]
      if (studentSummary == null) {
        record["interactions"] = 0;
        record["feedbacks"] = 0;
        record["completed"] = false
        record["interactionsDetails"] = {"cannotAnswer" :0,"notSure":0,"needClarification":0,"myAnswer":0} 
        record["feedbacksDetails"] = {"freeAnnotation":0,"goToAttachment":0,"goToTimelinePosition":0,"goToTag":0,"rightAnswer":0}
      }
      else {
        record["interactions"] = studentSummary["interactions"];
        record["feedbacks"] = studentSummary["feedbacks"];
        record["completed"] = studentSummary["completed"];
        record["interactionsDetails"] = studentSummary["interationsDetails"]
        record["feedbacksDetails"] = studentSummary["feedbacksDetails"]
      }

      data.push(record);
    }

    setSummaryData(data);
    console.log("SUMMARY DATA:", JSON.stringify(data));

  }, [props.summary])


  const completedFormatter = (cell: any, value: any) => {
    console.log("Passo value:", value);
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {value["completed"]  ?
          <Badge color="success" style={{ margin: '5px', padding: '10px'}}>
            {` ${t("yes")} `}
          </Badge>
          :
          <Badge color="warning" style={{ margin: '5px', padding: '10px' }}>
            {` ${t("no")} `}
          </Badge>}
      </div>)
  }

    const columns = [

      {
        dataField: 'name',
        text: t('name'),
        sort: true
      },

      {
        dataField: 'surname',
        text: t('surname'),
        sort: true
      },


      {
        dataField: 'passcode',
        text: t('passcode'),
        sort: true,
        hidden: false
      },
      {
        dataField: 'id',
        text: t('profile'),
        sort: true
      },
      {
        dataField: 'interactions',
        text: t('interactions'),
        sort: true
      },
      {
        dataField: 'feedbacks',
        text: t('feedbacks'),
        sort: true
      },
      {
        dataField: 'completed',
        text: t('completed'),
        formatter: completedFormatter,
        sort: true
      }
    ]

    React.useEffect(() => {
      //dispatch(StudentsProfileAction.willLoadStudentsProfile(null))        
      return () => { }
    }, []);

    return <>
      <BootstrapTable bootstrap4 keyField='passcode' data={
        summaryData
      }
        columns={columns} />

     {summaryData && summaryData.length>0 && <TransactionsAnalyzer data={convertData(summaryData)}/>}


    </>
  }
