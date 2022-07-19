{
  //"DbConnectionString": {
  //  "DbServer": "10.12.18.107", //用localhost试试
  //  "DbUser": "sa",
  //  "DbPassword": "Hy1912",
  //  "DbName": "yiteng",
  //  "BPMDbServer": "10.12.18.107",
  //  "BPMDbName": "BPMDB",
  //  "DbSetup": ""
  //},
  //"DbConnectionString": {
  //  "DbServer": "10.10.122.50", //用localhost试试
  //  "DbUser": "sa",
  //  "DbPassword": "sasa",
  //  "DbName": "yiteng",
  //  "BPMDbServer": "10.10.122.51",
  //  "BPMDbName": "BPMDB",
  //  "DbSetup": ""
  //},

  //10.10.122.50
  //sa sasa
  "DbConnectionString": {
    "DbServer": "test.whlog.cn,9433",
    "DbUser": "sa",
    "DbPassword": "Hy220518",
    "DbName": "yiteng",
    "BPMDbName": "BPMDB",
    "DbSetup": ""
  },
  //"DbConnectionString": {
  //  "DbServer": "rm-m5ewk083uc69q00ll8o.sqlserver.rds.aliyuncs.com,3433",
  //  "DbUser": "pinke311",
  //  "DbPassword": "P@ssw0rd!tdj",
  //  "DbName": "yiteng1",
  //  "DbSetup": ""
  //},
  "QyThird": {
    "CorpID": "wx2f84009ddad39ca9",
    "Secret": "fxv2Ha_R5d-8fBCnUiajFmDsvE-IEb0tlQWaOTx0ngM",
    "AgentID": ""
  },
  "WebServer": {
    "HttpPort": "9999",
    "ServerCount": "2"
  },
  "Redis": {
    "RedisServerIp2": "r-m5ec1a87f2d09b04.redis.rds.aliyuncs.com:6379",
    "RedisServerIp": "115.28.151.114:6379",
    "RedisPassword": "Jlmzxcvbnm791210"
  },
  "Oss": {
    "HSImgUrl": "http://image.pinkyun.com/",
    "Small": "?x-oss-process=style/small",
    "Normal": "?x-oss-process=style/normal",
    "HSImgUrlWeb": "http://www.pinkyun.com/"
  },
  "PermissionWhiteList": [
    {
      "Compare": "Equals",
      "Url": "/api/login"
    },
    {
      "Compare": "Equals",
      "Url": "/api/login/sessionlogin"
    },
    {
      "Compare": "StartsWith",
      "Url": "/swagger"
    },
    {
      "Compare": "StartsWith",
      "Url": "/api/admin/"
    },
    {
      "Compare": "Equals",
      "Url": "/api/osstoken"
    },
    {
      "Compare": "Equals",
      "Url": "/api/notice"
    },
    {
      "Compare": "Equals",
      "Url": "/api/login/clientidup"
    },
    {
      "Compare": "Equals",
      "Url": "/api/login/imlogin"
    },
    {
      "Compare": "Equals",
      "Url": "/api/login/token"
    },
    {
      "Compare": "Equals",
      "Url": "/api/login/update"
    },
    {
      "Compare": "Equals",
      "Url": "/api/login/setonline"
    },
    {
      "Compare": "Equals",
      "Url": "/api/Reg/Add/mailcode"
    },
    {
      "Compare": "Equals",
      "Url": "/api/Reg/Add/Reg"
    }
  ]
}
