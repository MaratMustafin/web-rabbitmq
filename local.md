#  Установка RabbitMQ
```
sudo docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.12-management
```

# Запуск 

node v16.15.1

```
npm init --force
npm install amqp
npm install express
node api.js
```

# Тестирование
```
http://localhost?name=You
```

# Note
Потраченное время - 1час.
Буду дополнять, пока не проверять.
