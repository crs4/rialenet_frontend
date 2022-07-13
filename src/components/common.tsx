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


const fakeTasksAll = [{"id":"62cd7e373dd5251c7183553e","_creationTs":1657634360,"_lastUpdateTs":1657634705,"taskTypeId":"62a87b53925841535833b69d","requesterId":"671","appId":"xUi1mwCJ0X","goal":{"name":"Protocol","description":"What is the protocol followed by the researcher?","keywords":["social interaction","lab"]},"norms":[],"attributes":{},"closeTs":null,"communityId":"624703620e5af47df0eed5eb","transactions":[{"taskId":"62cd7e373dd5251c7183553e","label":"needClarification","attributes":{"note":"Which protocol are you speaking about?"},"actioneerId":"928","messages":[],"id":"0","_creationTs":1657634434,"_lastUpdateTs":1657634434},{"taskId":"62cd7e373dd5251c7183553e","label":"goToAttachment","attributes":{"attachment":"protocollo processazione cervelli TEM","transactionID":"0"},"actioneerId":"671","messages":[],"id":"1","_creationTs":1657634533,"_lastUpdateTs":1657634533},{"taskId":"62cd7e373dd5251c7183553e","label":"cannotAnswer","attributes":{"reason":"Sorry. I have no idea."},"actioneerId":"928","messages":[],"id":"2","_creationTs":1657634605,"_lastUpdateTs":1657634605},{"taskId":"62cd7e373dd5251c7183553e","label":"goToTimelinePosition","attributes":{"timelineLink":"https://beta.riale.ideab3.it/public/a6563273-863b-4e60-8b05-c6b41b332b42?start_time=1635927135000&active_tab=0","transactionID":"2"},"actioneerId":"671","messages":[],"id":"3","_creationTs":1657634705,"_lastUpdateTs":1657634705}]},{"id":"62c3115b925841535833b6cd","_creationTs":1656951131,"_lastUpdateTs":1656951131,"taskTypeId":"62a87b53925841535833b69d","requesterId":"671","appId":"xUi1mwCJ0X","goal":{"name":"Ultimo task","description":"non posso  modificarlo!","keywords":["social interaction","lab"]},"norms":[],"attributes":{},"closeTs":null,"communityId":"624703620e5af47df0eed5eb","transactions":[]},{"id":"62c3007a925841535833b6cc","_creationTs":1656946811,"_lastUpdateTs":1656946811,"taskTypeId":"62a87b53925841535833b69d","requesterId":"671","appId":"xUi1mwCJ0X","goal":{"name":"Diciasettesima domanda","description":"Altra domanda di test per verificare l'ordinamento dei task","keywords":["social interaction","lab"]},"norms":[],"attributes":{},"closeTs":null,"communityId":"624703620e5af47df0eed5eb","transactions":[]},{"id":"62c2feac925841535833b6cb","_creationTs":1656946348,"_lastUpdateTs":1656946348,"taskTypeId":"62a87b53925841535833b69d","requesterId":"671","appId":"xUi1mwCJ0X","goal":{"name":"Sedicesima Domanda","description":"domanda di prova","keywords":["social interaction","lab"]},"norms":[],"attributes":{},"closeTs":null,"communityId":"624703620e5af47df0eed5eb","transactions":[]},{"id":"62c17639925841535833b6c9","_creationTs":1656845881,"_lastUpdateTs":1656845881,"taskTypeId":"62a87b53925841535833b69d","requesterId":"671","appId":"xUi1mwCJ0X","goal":{"name":"L'architettura del PC","description":"Che cosa è la ram?","keywords":["social interaction","lab"]},"norms":[],"attributes":{},"closeTs":null,"communityId":"624703620e5af47df0eed5eb","transactions":[]},{"id":"62c06bf9925841535833b6c8","_creationTs":1656777722,"_lastUpdateTs":1656777722,"taskTypeId":"62a87b53925841535833b69d","requesterId":"671","appId":"xUi1mwCJ0X","goal":{"name":"Fiumi d'Italia","description":"Quanto è lungo il Po?","keywords":["social interaction","lab"]},"norms":[],"attributes":{},"closeTs":null,"communityId":"624703620e5af47df0eed5eb","transactions":[]},{"id":"62bf041f925841535833b6c7","_creationTs":1656685600,"_lastUpdateTs":1656950940,"taskTypeId":"62a87b53925841535833b69d","requesterId":"671","appId":"xUi1mwCJ0X","goal":{"name":"I nuraghi","description":"A quale periodo storico risalgono i nuraghi della Sardegna?","keywords":["social interaction","lab"]},"norms":[],"attributes":{},"closeTs":null,"communityId":"624703620e5af47df0eed5eb","transactions":[{"taskId":"62bf041f925841535833b6c7","label":"myAnswer","attributes":{"answer":"1800-1200 a.c"},"actioneerId":"928","messages":[],"id":"0","_creationTs":1656757905,"_lastUpdateTs":1656757905},{"taskId":"62bf041f925841535833b6c7","label":"freeAnnotation","attributes":{"message":"Studia di più","transactionID":"0"},"actioneerId":"671","messages":[],"id":"1","_creationTs":1656950940,"_lastUpdateTs":1656950940}]},{"id":"62bde874925841535833b6c3","_creationTs":1656612980,"_lastUpdateTs":1656684725,"taskTypeId":"62a87b53925841535833b69d","requesterId":"671","appId":"xUi1mwCJ0X","goal":{"name":"Capitali del mondo","description":"Quale è la capitale del Brasile?","keywords":["social interaction","lab"]},"norms":[],"attributes":{},"closeTs":null,"communityId":"624703620e5af47df0eed5eb","transactions":[{"taskId":"62bde874925841535833b6c3","label":"cannotAnswer","attributes":{"reason":"Non capisco"},"actioneerId":"928","messages":[],"id":"0","_creationTs":1656674978,"_lastUpdateTs":1656674978},{"taskId":"62bde874925841535833b6c3","label":"goToAttachment","attributes":{"attachment":"i promessiSposi.pdf","transactionID":"0"},"actioneerId":"671","messages":[],"id":"1","_creationTs":1656684725,"_lastUpdateTs":1656684725}]},{"id":"62bdc8fc925841535833b6c2","_creationTs":1656604925,"_lastUpdateTs":1656604925,"taskTypeId":"62a87b53925841535833b69d","requesterId":"671","appId":"xUi1mwCJ0X","goal":{"name":"Task creato in data 30 giugnp","description":"prova","keywords":["social interaction","lab"]},"norms":[],"attributes":{},"closeTs":null,"communityId":"624703620e5af47df0eed5eb","transactions":[]},{"id":"62bc1076925841535833b6bf","_creationTs":1656492150,"_lastUpdateTs":1656684902,"taskTypeId":"62a87b53925841535833b69d","requesterId":"671","appId":"xUi1mwCJ0X","goal":{"name":"I promessi Sposi","description":"Chi è Don Rodrigo?","keywords":["social interaction","lab"]},"norms":[],"attributes":{},"closeTs":null,"communityId":"624703620e5af47df0eed5eb","transactions":[{"taskId":"62bc1076925841535833b6bf","label":"needClarification","attributes":{"note":"cioè?"},"actioneerId":"928","messages":[],"id":"0","_creationTs":1656684487,"_lastUpdateTs":1656684487},{"taskId":"62bc1076925841535833b6bf","label":"goToAttachment","attributes":{"attachment":"i promessisposi.pdf","transactionID":"0"},"actioneerId":"671","messages":[],"id":"1","_creationTs":1656684902,"_lastUpdateTs":1656684902}]}]

export const fakeTasks = fakeTasksAll.slice(9,10)