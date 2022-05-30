import { createSlice, PayloadAction} from "@reduxjs/toolkit";

export const passCodeUsersSlice = createSlice({
    name: 'passCodeUsers',
    initialState: {
      passCode:null,
      currentAnalyticsSessions:null
    }
  ,
    reducers: {
     // willLoginWithPassCode: (state, action:PayloadAction<any>) => state,
     willLogoutWithPassCode: (state, action:PayloadAction<any>) => state,
     willLoadAnalyticsSessions: (state, action:PayloadAction<any>) => state,

     setCurrentAnalyticsSessions: (state, action:PayloadAction<any>) =>{
       state.currentAnalyticsSessions = action.payload;
     },
      didLoginWithPassCode: (state, action:PayloadAction<any>) => { 
        state.passCode = action.payload;
      },
      didLogoutWithPassCode: (state) => { 
        state.passCode = null;
        localStorage.removeItem("RialeSessionTrace");
      },
      // esporta la sessione su db
      willSaveSession: (state, action:PayloadAction<any>) => state,
    }
});

export const { actions, reducer } = passCodeUsersSlice

export const selectors = {
  isLoggedWithPassCode: (state:any) => {
    return state.passCodeUsers.passCode!=null;
  },

  getCurrentAnalyticsSessions: (state:any) => {
    return state.passCodeUsers.currentAnalyticsSessions;
  },

  getCurrentPassCode: (state:any) => {
    return state.passCodeUsers.passCode;
  }
}
