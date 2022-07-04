import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { map, includes } from 'lodash'
import { fakeTasks } from '../../components/common';
export const userTasksSlice = createSlice({
    name: 'userTasks',
    initialState: {
      user:null,

      //@audit INFO in production replace with []
      tasks: [],
      offset: 0,
      limit: 10,
      total : -1, // -1 -> caricamento in corso
      filteredIds: null,
      studentsProfile: [],
      isSendingMessage: false
    }
  ,
    reducers: {
     willLogin: (state, action:PayloadAction<any>) => state,
     willLogout: (state, action:PayloadAction<any>) => state,
     willGetUserProfile: (state, action:PayloadAction<any>) => state,
     willLoadTasks: (state, action:PayloadAction<any>) => state,
     willCreateTask: (state, action:PayloadAction<any>) => state,
     willCreateTransaction: (state, action:PayloadAction<any>) => state,
     willLoadStudentsProfile: (state, action:PayloadAction<any>) => state,

     setFilteredIds: (state, action) => {
      state.filteredIds = map(action.payload, 'id') as any;
    },

    clearFilter: (state, action: PayloadAction<any>) => {
      console.log('in clear filter')
      state.filteredIds = null;
    },
      
     didGetUserProfile: (state, action:PayloadAction<any>) => { 
        state.user = action.payload;
      },

      setIsSendingMessage:(state, action) =>
      {
        state.isSendingMessage = action.payload;
      },

      setTotal:(state, action) =>
      {
        state.total = action.payload;
      },

      setOffset:(state, action) =>
      {
        state.offset = action.payload;
      },


      didLogout:(state) => { 
        state.user = null;
        state.tasks = [];
        state.isSendingMessage = false;
        localStorage.removeItem("passcode");
      },

      didLoadTasks: (state, action:PayloadAction<any>) =>{
        state.tasks = action.payload["tasks"];
        state.offset =  action.payload["offset"];
        state.total =  action.payload["total"];
      },
      didLoadStudentsProfile: (state, action:PayloadAction<any>) =>{
        state.studentsProfile = action.payload;
      }
    }
});

export const { actions, reducer } = userTasksSlice;

export const selectors = {

  getFilteredIds: (state: any) => state.userTasks.filteredIds,

  isLogged: (state:any) => {
    return state.userTasks.user!=null && localStorage.getItem("passcode")==state.userTasks.user["passcode"];
  },
  getTasks: (state:any) => {
    return state.userTasks.tasks;
  },
  getUserProfile: (state:any) => {
    //return {"role_id" : 1, "name" : {"first" : "test", "last" : "test"}}
    return state.userTasks.user;
  },
  getStudentsProfile: (state:any) => {
    return state.userTasks.studentsProfile;
  },

  isSendingMessage: (state:any) => {
    return state.userTasks.isSendingMessage;
  },

  getTasksLimit: (state:any) => {
    return state.userTasks.limit;
  },

  getTasksTotal: (state:any) => {
    return state.userTasks.total;
  },

  getTasksOffset: (state:any) => {
    return state.userTasks.offset;
  },


  getStudentDetailsByWenetID: (wenet_id:any) => (state:any) => {
     const profiles = state.userTasks.studentsProfile;
     for (let i=0;i<profiles.length;i++)
     {
       if (profiles[i]["wenet_id"]==wenet_id)
       return profiles[i];
     }
     return null;
  }
}
