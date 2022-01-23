# node typescript boiler plate
version : garam v0.0.1

## node modules
node, express, typescript 사용

default PORT=4000

### logger
logger winston, winston-daily-rotate-file 사용
access log morgon 사용

/logs/alert
/logs/error
/logs

디렉토리에 저장

### swagger
.env 파일에 하단의 코드 작성 필요

    NODE_ENV=dev
    HOST=스웨거가 접근할 API서버 주소(PORT 부분까지 작성 필요)
    # ex) 192.168.0.1:3000
    SWAGGER_TITLE=프로젝트 타이틀
    SWAGGER_DESCRIPTION=스웨거 설명
    SWAGGER_VERSION=스웨거버전(작성된 문서 버전)

### sequelize

스키마가 있을경우 접근, 없으면 생성한 뒤 접근

.env 파일에 하단의 코드 작성 필요

        DB_HOST= DB HOST
        DB_PORT= DB PORT
        DB_USER=접근 유저
        DB_PASSWORD=접근 패스워드
        DB_DATABASE=데이터베이스 명
        MYSQL_CONNECTION_POOL_MAX
        MYSQL_CONNECTION_POOL_MIN

