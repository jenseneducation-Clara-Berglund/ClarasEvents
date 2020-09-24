#Lint project 
npm run lint

#Bygger image lokalt // 
docker build -t registry.heroku.com/murmuring-tor-43978/web .

#Pushar image till Heroku // 
docker push registry.heroku.com/murmuring-tor-43978/web 

#Deployar image// 
heroku container:release --app murmuring-tor-43978 web
