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
      console.log("WENET newtask response:", response)
      const result = await response.text();
      console.log("WENET newtask result:", result)
      // ricarico tutti i task dopo che ne ho aggiunto
      //await loadAllTasks();

    } catch (e) { console.log("WENET newtask response error:", e) }
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