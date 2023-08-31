### 이슈 트래커

github API를 이용한 간단한 이슈트래킹 페이지입니다

### 프로젝트의 실행 방법

`git clone` 후, `npm install & npm start`

### 데모 영상

### 기능 설명

#### 이슈리스트

#### 이슈디테일

### 폴더 구조

```
📦src
 ┣ 📂apis
 ┃ ┗ 📜api.js
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┣ 📜Loading.jsx
 ┃ ┃ ┗ 📜NotFound.jsx
 ┃ ┣ 📂issuedetail
 ┃ ┃ ┣ 📜IssueBody.jsx
 ┃ ┃ ┣ 📜IssueHeader.jsx
 ┃ ┃ ┗ 📜Profile.jsx
 ┃ ┗ 📂issuelist
 ┃ ┃ ┣ 📜Advertise.jsx
 ┃ ┃ ┣ 📜InfiniteScroll.jsx
 ┃ ┃ ┗ 📜IssueItem.jsx
 ┣ 📂hook
 ┃ ┣ 📜useFetch.js
 ┃ ┗ 📜useObserver.js
 ┣ 📂pages
 ┃ ┣ 📜IssueDetail.jsx
 ┃ ┗ 📜IssueList.jsx
 ┣ 📂routes
 ┃ ┗ 📜route.jsx
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyle.js
 ┃ ┗ 📜style.js
 ┣ 📜App.jsx
 ┗ 📜index.js
```

### 개발 포인트
