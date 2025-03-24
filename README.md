# TypeScript 공부하기

## TypeScript 초기 설정
```bash
# package.json 설정하기
npm init

# TypeScript 에서 Node.Js 관련 타입 사용할 수 있게 하기
npm i @types/node
```

</br>

### package.json 파일 수정하기
```json
{
  "name": "section05",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",  // 추가하기
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "@types/node": "^22.13.11"
  }
}
```

</br>

### tsconfig.json 파일 수정하기
```json
{
    "compilerOptions": {
        "target": "ESNext",
        "module": "ESNext",
        "outDir": "dist",
        "strict": true,
        "moduleDetection": "force",
        "skipLibCheck": true,
    },
    "include": ["src"],
    "ts-node": {
        "esm": true
    }
}
```

</br>

## 강의
[한 입 크기로 잘라먹는 타입스크립트 - 강의링크](https://inf.run/EvrS5)

</br>

## 핸드북
[한 입 크기로 잘라먹는 타입스크립트 - 핸드북](https://ts.winterlood.com/)

</br>

## Github 코드 링크
[Github 코드 링크](https://github.com/winterlood/onebite-typescript)

</br>