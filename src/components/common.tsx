export const transactionFieldMapper = {
    "cannotAnswer": "reason",
    "needClarification": "note",
    "notSure": "note",
    "myAnswer": "answer",
    "goToAttachment": "attachment",
    "goToTimelinePosition": "timelineLink",
    "goToTag": "tag",
    "rightAnswer": "message",
    "freeAnnotation" : "message"
}

//export const studentsTransactionOptions = ["cannotAnswer", "needClarification", "notSure", "myAnswer"];
export const studentsTransactionOptions = ["myAnswer", "needClarification", "cannotAnswer" ];

export const teachersTransactionOptions = ["freeAnnotation", "goToAttachment", "goToTimelinePosition", 
                                            "goToTag", "rightAnswer"];


const fakeStudentTransactions = [
    {
        "taskId": "62a9ff27925841535833b6a1",
        "label": "needClarification",
        "attributes": {
            "note": "Avrei bisogno di aiuto perchè non ho capito la domanda"
        },
        "actioneerId": "928",
        "messages": [

        ],
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
        "messages": [

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


export const fakeTasks = [{
    "id": "62a9ff27925841535833b6a1", "_creationTs": 1655308072,
    "_lastUpdateTs": 1656426153, "taskTypeId": "62a87b53925841535833b69d", "requesterId": "671",
    "appId": "xUi1mwCJ0X", "goal": {
        "name": "Primo Task rivolto allo studente Pantera assonnata",
        "description": "Descrizione del primo Task rivolto allo studente Pantera assonnata",
        "keywords": ["social interaction", "lab"]
    }, "norms": [], "attributes": {}, "closeTs": null,
    "communityId": "624703620e5af47df0eed5eb", "transactions": [{
        "taskId": "62a9ff27925841535833b6a1",
        "label": "needClarification", "attributes": { "note": "Avrei bisogno di aiuto perchè non ho capito la domanda" }, "actioneerId": "928", "messages": [], "id": "0", "_creationTs": 1655835879, "_lastUpdateTs": 1655835879
    }, { "taskId": "62a9ff27925841535833b6a1", "label": "notSure", "attributes": { "note": "Non saprei rispondere" }, "actioneerId": "928", "messages": [], "id": "1", "_creationTs": 1655884187, "_lastUpdateTs": 1655884187 }, { "taskId": "62a9ff27925841535833b6a1", "label": "myAnswer", "attributes": { "answer": "Proprio non lo so" }, "actioneerId": "928", "messages": [], "id": "2", "_creationTs": 1655993192, "_lastUpdateTs": 1655993192 }, { "taskId": "62a9ff27925841535833b6a1", "label": "goToTag", "attributes": { "tag": "TAG_HELP" }, "actioneerId": "671", "messages": [], "id": "3", "_creationTs": 1656326636, "_lastUpdateTs": 1656326636 }, { "taskId": "62a9ff27925841535833b6a1", "label": "goToTag", "attributes": { "tag": "TAG_ESOMA", "transactionID": "0" }, "actioneerId": "671", "messages": [], "id": "4", "_creationTs": 1656328149, "_lastUpdateTs": 1656328149 }, { "taskId": "62a9ff27925841535833b6a1", "label": "notSure", "attributes": { "note": "Non so cosa rispondere" }, "actioneerId": "1020", "messages": [], "id": "5", "_creationTs": 1656407889, "_lastUpdateTs": 1656407889 }, { "taskId": "62a9ff27925841535833b6a1", "label": "notSure", "attributes": { "note": "Non so cosa rispondere" }, "actioneerId": "1020", "messages": [], "id": "6", "_creationTs": 1656407905, "_lastUpdateTs": 1656407905 }, { "taskId": "62a9ff27925841535833b6a1", "label": "goToAttachment", "attributes": { "attachment": "il_dna.pdf", "transactionID": "5" }, "actioneerId": "671", "messages": [], "id": "7", "_creationTs": 1656408841, "_lastUpdateTs": 1656408841 }, { "taskId": "62a9ff27925841535833b6a1", "label": "needClarification", "attributes": { "note": "Ho bisogno di ulteriori chiarimenti!" }, "actioneerId": "1020", "messages": [], "id": "8", "_creationTs": 1656413631, "_lastUpdateTs": 1656413631 }, { "taskId": "62a9ff27925841535833b6a1", "label": "notSure", "attributes": { "note": "Non ho ancora ricevuto alcun feedback!" }, "actioneerId": "1020", "messages": [], "id": "9", "_creationTs": 1656414157, "_lastUpdateTs": 1656414157 }, { "taskId": "62a9ff27925841535833b6a1", "label": "needClarification", "attributes": { "note": "Ribasisco che ho bisogno di chiarimenti!" }, "actioneerId": "1020", "messages": [], "id": "10", "_creationTs": 1656414274, "_lastUpdateTs": 1656414274 }, { "taskId": "62a9ff27925841535833b6a1", "label": "notSure", "attributes": { "note": "Non mi sento sicuro della risposta" }, "actioneerId": "1020", "messages": [], "id": "11", "_creationTs": 1656414477, "_lastUpdateTs": 1656414477 }, { "taskId": "62a9ff27925841535833b6a1", "label": "cannotAnswer", "attributes": { "reason": "NON SONO in grado di rispondere!" }, "actioneerId": "1020", "messages": [], "id": "12", "_creationTs": 1656415030, "_lastUpdateTs": 1656415030 }, { "taskId": "62a9ff27925841535833b6a1", "label": "goToTimelinePosition", "attributes": { "timelineLink": "https://beta.riale.ideab3.it/public/accbe99d-97a8-4f3b-8cf9-8b1f35ef5b87?start_time=1636327040000&active_tab=0", "transactionID": "8" }, "actioneerId": "671", "messages": [], "id": "13", "_creationTs": 1656426153, "_lastUpdateTs": 1656426153 }]
}, { "id": "62aa04a3925841535833b6a2", "_creationTs": 1655309475, "_lastUpdateTs": 1656409400, "taskTypeId": "62a87b53925841535833b69d", "requesterId": "671", "appId": "xUi1mwCJ0X", "goal": { "name": "Secondo Task da Lupo Solitario a Pantera assonnata", "description": "Descrizione del Secondo Task da Lupo Solitario a Pantera assonnata", "keywords": ["social interaction", "lab"] }, "norms": [], "attributes": {}, "closeTs": null, "communityId": "624703620e5af47df0eed5eb", "transactions": [{ "taskId": "62aa04a3925841535833b6a2", "label": "CREATE_TASK", "attributes": {}, "actioneerId": "928", "messages": [], "id": "0", "_creationTs": 1655835291, "_lastUpdateTs": 1655835291 }, { "taskId": "62aa04a3925841535833b6a2", "label": "notSure", "attributes": { "note": "Non sono sicuro..." }, "actioneerId": "1020", "messages": [], "id": "1", "_creationTs": 1656409400, "_lastUpdateTs": 1656409400 }] }, {
    "id": "62b9cc67925841535833b6b8", "_creationTs": 1656343656, "_lastUpdateTs": 1656407942, "taskTypeId": "62a87b53925841535833b69d", "requesterId": "671", "appId": "xUi1mwCJ0X", "goal": { "name": "Terzo Task per Pantera assonnata", "description": "Che cosa è la tagmantazione?", "keywords": ["social interaction", "lab"] }, "norms": [], "attributes": {}, "closeTs": null,
    "communityId": "624703620e5af47df0eed5eb", "transactions": [{ "taskId": "62b9cc67925841535833b6b8", "label": "needClarification", "attributes": { "note": "Non capisco il termine \"tagmantazione\"" }, "actioneerId": "928", "messages": [], "id": "0", "_creationTs": 1656344477, "_lastUpdateTs": 1656344477 }, { "taskId": "62b9cc67925841535833b6b8", "label": "goToAttachment", "attributes": { "attachment": "Scusa per il refuso, intendevo dire \"Tagmentazione\"", "transactionID": "0" }, "actioneerId": "671", "messages": [], "id": "1", "_creationTs": 1656344583, "_lastUpdateTs": 1656344583 }, { "taskId": "62b9cc67925841535833b6b8", "label": "myAnswer", "attributes": { "answer": "E' una tecnica impiegata nel processo di sequenziamento del DNA" }, "actioneerId": "928", "messages": [], "id": "2", "_creationTs": 1656344745, "_lastUpdateTs": 1656344745 }, { "taskId": "62b9cc67925841535833b6b8", "label": "needClarification", "attributes": { "note": "Ciao, sono scoiattolo ardito e non penso di avere la risposta...posso avere dell'aiuto?" }, "actioneerId": "1020", "messages": [], "id": "3", "_creationTs": 1656401711, "_lastUpdateTs": 1656401711 }, { "taskId": "62b9cc67925841535833b6b8", "label": "goToTag", "attributes": { "tag": "TAGMENTAZIONE", "transactionID": "3" }, "actioneerId": "671", "messages": [], "id": "4", "_creationTs": 1656402034, "_lastUpdateTs": 1656402034 }, { "taskId": "62b9cc67925841535833b6b8", "label": "rightAnswer", "attributes": { "message": "Bravo, la risposta è corretta!", "transactionID": "2" }, "actioneerId": "671", "messages": [], "id": "5", "_creationTs": 1656403752, "_lastUpdateTs": 1656403752 }, { "taskId": "62b9cc67925841535833b6b8", "label": "myAnswer", "attributes": { "answer": "adesso penso di saperlo" }, "actioneerId": "1020", "messages": [], "id": "6", "_creationTs": 1656407942, "_lastUpdateTs": 1656407942 }]
}, { "id": "62b9cee4925841535833b6b9", "_creationTs": 1656344293, "_lastUpdateTs": 1656344293, "taskTypeId": "62a87b53925841535833b69d", "requesterId": "671", "appId": "xUi1mwCJ0X", "goal": { "name": "Quarto task per i miei studenti", "description": "Che cosa si intende per sequenziamento del DNA?", "keywords": ["social interaction", "lab"] }, "norms": [], "attributes": {}, "closeTs": null, "communityId": "624703620e5af47df0eed5eb", "transactions": [] }, { "id": "62b9cf34925841535833b6ba", "_creationTs": 1656344373, "_lastUpdateTs": 1656344373, "taskTypeId": "62a87b53925841535833b69d", "requesterId": "671", "appId": "xUi1mwCJ0X", "goal": { "name": "Quinto task", "description": "Che cosa è la drosophila?", "keywords": ["social interaction", "lab"] }, "norms": [], "attributes": {}, "closeTs": null, "communityId": "624703620e5af47df0eed5eb", "transactions": [] }, { "id": "62bac539925841535833b6bb", "_creationTs": 1656407353, "_lastUpdateTs": 1656407353, "taskTypeId": "62a87b53925841535833b69d", "requesterId": "671", "appId": "xUi1mwCJ0X", "goal": { "name": "Nuovo task rivolto ai miei 2 studenti", "description": "Che cosa è il DNA?", "keywords": ["social interaction", "lab"] }, "norms": [], "attributes": {}, "closeTs": null, "communityId": "624703620e5af47df0eed5eb", "transactions": [] }, { "id": "62bae5bc925841535833b6bc", "_creationTs": 1656415677, "_lastUpdateTs": 1656415677, "taskTypeId": "62a87b53925841535833b69d", "requesterId": "671", "appId": "xUi1mwCJ0X", "goal": { "name": "Domanda per Scoliattolo Ardito e Pantera Assonnata", "description": "Come si risolvono le equazioni di secondo grado?", "keywords": ["social interaction", "lab"] }, "norms": [], "attributes": {}, "closeTs": null, "communityId": "624703620e5af47df0eed5eb", "transactions": [] }, { "id": "62bae7a9925841535833b6bd", "_creationTs": 1656416169, "_lastUpdateTs": 1656416303, "taskTypeId": "62a87b53925841535833b69d", "requesterId": "671", "appId": "xUi1mwCJ0X", "goal": { "name": "Nuova domanda per SA e PA", "description": "Che cosa sono le molecole?", "keywords": ["social interaction", "lab"] }, "norms": [], "attributes": {}, "closeTs": null, "communityId": "624703620e5af47df0eed5eb", "transactions": [{ "taskId": "62bae7a9925841535833b6bd", "label": "notSure", "attributes": { "note": "Non saprei" }, "actioneerId": "1020", "messages": [], "id": "0", "_creationTs": 1656416303, "_lastUpdateTs": 1656416303 }] }, {
    "id": "62bb106e925841535833b6be", "_creationTs": 1656426606, "_lastUpdateTs": 1656426606, "taskTypeId": "62a87b53925841535833b69d", "requesterId": "671", "appId": "xUi1mwCJ0X", "goal": { "name": "Nuovo task di test", "description": "Il numero 1 è primo?", "keywords": ["social interaction", "lab"] }, "norms": [], "attributes": {}, "closeTs": null, "communityId": "624703620e5af47df0eed5eb",
    "transactions": []
}]