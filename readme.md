

Run redis docker container with the manager

docker run -d --name redis-um17 -p 6379:6379 -p 8001:8001 redis

Connect to redis manager at http://localhost:8001