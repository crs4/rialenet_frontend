import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { profile } from "console";

export const userTasksSlice = createSlice({
    name: 'userTasks',
    initialState: {
      user:null,
      tasks: [],
      studentsProfile: []
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
      
     didGetUserProfile: (state, action:PayloadAction<any>) => { 
        state.user = action.payload;
      },

      didLogout:(state) => { 
        state.user = null;
        state.tasks = [];
        localStorage.removeItem("passcode");
      },

      didLoadTasks: (state, action:PayloadAction<any>) =>{
        state.tasks = action.payload;
      },

      didLoadStudentsProfile: (state, action:PayloadAction<any>) =>{
        state.studentsProfile = action.payload;
      },
 
 
    
    }
});

export const { actions, reducer } = userTasksSlice;

export const selectors = {
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
