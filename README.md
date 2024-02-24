# Reminders Service

> replication of stripped version of Apple Reminders app 

> Rest api that let's you run the web server while giving you option to choose different storage options at the launch time of the server, in short allows you to choose which storage options for this service

Endpoints: \
`GET api/v1/reminders` \
`POST api/v1/reminders` \
`PUT api/v1/reminders/{id}` \
`DELETE api/v1/reminders/{id}` \

Todo:
- Build OpenAPI doc 
  - Remove Endpoints above once this doc is created
- implement to this logger on top of zap
  DB Options
  
  - Sqlite (wip)
  - mysql 
  - postgres
  - mongodb
  
  