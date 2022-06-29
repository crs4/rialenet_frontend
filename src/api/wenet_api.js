export const createNewTask = async (content) => {
    const url = "/newtask"
    try {
      const response = await fetch(url,
        {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify({ "content": content })  // JSON.stringify("PROVA 2 CONTENUTO")
        }
      )
      console.log("SAGA2 API WENET newtask response:", response)
      const result = await response.text();
      console.log("SAGA2 API WENET newtask result:", result);
      return result;
    } catch (e) { console.log("WENET API newtask response error:", e); return null;}
  }


  export const createNewTransaction = async (content) => {
    const url = `/newtransaction`;
    try {
      const response = await fetch(url,
        {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify({ "content": content }) 
        }
      )
      console.log("SAGA2 (API) WENET newtransaction response:", response)
      const result = await response.text();
      console.log("SAGA2 (API) WENET newtransaction result:", result)
      // ricarico tutti i task dopo che ne ho aggiunto
      //await loadAllTasks();
      return result;
    } catch (e) { console.log("WENET newtransaction response error:", e) 
      return null;
  }
  }

  export const logout = async () => {
    const url = `/logout`;
    try {
      const response = await fetch(url,
        {
          headers: { "Content-Type": "application/json" },
          method: "GET",
        }
      )
      console.log("SAGA2 (API) logout response:", response)
      const result = await response.text();
      console.log("SAGA2 (API) logout result:", result)
      return result;
    } catch (e) { console.log("WENET logout response error:", e) 
      return null;
  }
  }