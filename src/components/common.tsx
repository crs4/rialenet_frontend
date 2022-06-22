export const transactionFieldMapper = {
    "cannotAnswer": "note",
    "needClarification": "note",
    "notSure": "note",
    "myAnswer": "answer",
    "goToAttachment": "attachment",
    "goToTimelinePosition": "timelineLink",
    "goToTag": "tag"
}

export const studentsTransactionOptions = ["cannotAnswer", "needClarification", "notSure", "myAnswer"];


const fakeStudentTransactions = [
    {
       "taskId":"62a9ff27925841535833b6a1",
       "label":"needClarification",
       "attributes":{
          "note":"Avrei bisogno di aiuto perchè non ho capito la domanda"
       },
       "actioneerId":"928",
       "messages":[
          
       ],
       "id":"0",
       "_creationTs":1655835879,
       "_lastUpdateTs":1655835879
    },
    {
       "taskId":"62a9ff27925841535833b6a1",
       "label":"notSure",
       "attributes":{
          "note":"Non saprei rispondere"
       },
       "actioneerId":"928",
       "messages":[
          
       ]
    }
]

export const fakeTask = {
    "id": 2131, "_creationTs":1655308072,"_lastUpdateTs":1655308072, 
    "goal": {
        "name": "Quesito iniziale sulla timeline",
        "description": "Descrizione del questito iniziale della timeline",
        "keywords": ["social interaction", "lab"],
    }, "transactions": fakeStudentTransactions
}