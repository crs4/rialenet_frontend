import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BootstrapTable from 'react-bootstrap-table-next';
import { selectors as StudentsProfileSelector, actions as StudentsProfileAction} from '../store/slices/userTasks'
import { useTranslation } from 'react-i18next';


const fakeProfiles = [
  {"passcode":"VPFYBRSX","name":"Pantera",
"surname":"Assonnata","wenet_id":928,"id":"B+",
"description":"Profilo B+","teacher_wenet_id":671},
{"passcode":"APFYBRSX","name":"Leone",
"surname":"Indaffarato","wenet_id":928,"id":"C+",
"description":"Profilo C+","teacher_wenet_id":671}

] as any;


export const StudentsProfileViewer = (props:any) =>
{   
    const { t, i18n } = useTranslation('frontend', { useSuspense: false });
    const dispatch = useDispatch();
    const studentsProfile = useSelector(StudentsProfileSelector.getStudentsProfile);
    //const studentsProfile = fakeProfiles;

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
          hidden:false
        },
          {
            dataField: 'id',
            text: t('profile'),
            sort: true
          },
          {
            dataField: 'description',
            text: t('description'),
            sort: false
          }
      ]

    React.useEffect(() => {
        dispatch(StudentsProfileAction.willLoadStudentsProfile(null))        
        return () => { }
      }, []);

    return <>
     <BootstrapTable bootstrap4 keyField='passcode' data={ 
                      studentsProfile
                    } 
                    columns={ columns } />
    </>
}
