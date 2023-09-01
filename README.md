### 이슈 트래커

github API를 이용한 간단한 이슈트래킹 페이지입니다

### 프로젝트의 실행 방법

`git clone` 후, `npm install & npm start`

### 기능 설명

- 무한스크롤 <br/>
1. IntersactionObserver API
  useObserver을 만들어 intersactionObserver API을 재사용할 수 있게 구현하였으며 
  관찰 대상과 해당 대상이 화면에 관찰되었을 때 실행할 콜백 함수를 인자로 받고있습니다
 ```
 export const useObserver = (targetRef, callback) => {
   useEffect(() => {
     const observer = new IntersectionObserver(([entry]) => {
       if (entry.isIntersecting) callback();
     });
     if (targetRef.current) observer.observe(targetRef.current);
 
     return () => observer.disconnect();
   }, [targetRef, callback]);
 };
 
 ```
2. 관찰 대상과 콜백 함수
    InfinityIssues 컴포넌트에 useRef를 사용하여 참조하고 해당 컴포넌트가 
    관찰되면 로딩 인디케이터를 노출시키며 콜백 함수가 실행되어 패치해온 데이터를 추가해줍니다
 ```
 const InfinityIssues = ({ page, addIssues }) => {
   const targetRef = useRef(null);
 
   const loadMoreIssues = async () => {
     const nextPage = page.current + 1;
 
     try {
       const response = await getIssues(nextPage);
       page.current = nextPage;
       addIssues(response);
     } catch (error) {
       console.error(error);
     }
   };
 
   useObserver(targetRef, loadMoreIssues);
 
   return (
     <Observer ref={targetRef}>
       <Loading />
     </Observer>
   );
 };
 
 export default InfinityIssues;
 ```   


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

