# 타입스크립트 보일러 플레이트 

1) .env 파일 생성후 아래 내용 작성 

# deafult server option
NODE_ENV=dev
PORT=3000

# DB
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=123qwe
DB_DATABASE=mysql
MYSQL_CONNECTION_POOL_MAX=5
MYSQL_CONNECTION_POOL_MIN=0



# 구조 

router -> controller -> service -> models
