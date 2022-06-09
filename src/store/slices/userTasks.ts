import { createSlice, PayloadAction} from "@reduxjs/toolkit";

export const userTasksSlice = createSlice({
    name: 'userTasks',
    initialState: {
      user:null,
      tasks: []
    }
  ,
    reducers: {
     willLogin: (state, action:PayloadAction<any>) => state,
     willLogout: (state, action:PayloadAction<any>) => state,
     willGetUserProfile: (state, action:PayloadAction<any>) => state,
     willLoadTasks: (state, action:PayloadAction<any>) => state,

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
  }
}
