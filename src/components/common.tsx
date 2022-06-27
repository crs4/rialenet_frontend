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
export const teachersTransactionOptions = ["goToAttachment", "goToTimelinePosition", "goToTag"];


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
    "id": "62a9ff27925841535833b6a1",
    "_creationTs": 1655308072,
    "_lastUpdateTs": 1656328149,
    "taskTypeId": "62a87b53925841535833b69d",
    "requesterId": "671",
    "appId": "xUi1mwCJ0X",
    "goal": {
        "name": "Primo Task rivolto allo studente Pantera assonnata",
        "description": "Descrizione del primo Task rivolto allo studente Pantera assonnata",
        "keywords": [
            "social interaction",
            "lab"
        ]
    },
    "norms": [],
    "attributes": {},
    "closeTs": null,
    "communityId": "624703620e5af47df0eed5eb",
    "transactions": [
        {
            "taskId": "62a9ff27925841535833b6a1",
            "label": "needClarification",
            "attributes": {
                "note": "Avrei bisogno di aiuto perchè non ho capito la domanda"
            },
            "actioneerId": "928",
            "messages": [],
            "id": "0",
            "_creationTs": 1655835879,
            "_lastUpdateTs": 1655835879
        },
        {
            "taskId": "62a9ff27925841535833b6a1",
            "label": "notSure",
            "attributes": {
                "note": "Non saprei rispondere"
            },
            "actioneerId": "928",
            "messages": [],
            "id": "1",
            "_creationTs": 1655884187,
            "_lastUpdateTs": 1655884187
        },
        {
            "taskId": "62a9ff27925841535833b6a1",
            "label": "myAnswer",
            "attributes": {
                "answer": "Proprio non lo so"
            },
            "actioneerId": "928",
            "messages": [],
            "id": "2",
            "_creationTs": 1655993192,
            "_lastUpdateTs": 1655993192
        },
        {
            "taskId": "62a9ff27925841535833b6a1",
            "label": "goToTag",
            "attributes": {
                "tag": "TAG_HELP"
            },
            "actioneerId": "671",
            "messages": [],
            "id": "3",
            "_creationTs": 1656326636,
            "_lastUpdateTs": 1656326636
        },
        {
            "taskId": "62a9ff27925841535833b6a1",
            "label": "goToTag",
            "attributes": {
                "tag": "TAG_ESOMA",
                "transactionID": "0"
            },
            "actioneerId": "671",
            "messages": [],
            "id": "4",
            "_creationTs": 1656328149,
            "_lastUpdateTs": 1656328149
        }
    ]
}