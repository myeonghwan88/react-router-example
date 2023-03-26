import queryString from "query-string";

export default function About(props) {
  // console.log("about", props);
  const searchParams = props.location.search;
  console.log("searchParams", searchParams);
  // // URLSearchParams 브라우저 내장 객체
  // // 사용 방법 URLSearchParams(props.location.search).get("name")
  // const obj = new URLSearchParams(searchParams);
  // console.log("obj", obj.get("name"));
  const query = queryString.parse(searchParams);
  console.log("query", query);
  return (
    <div>
      <h2>About 페이지 입니다.</h2>
      {query.name && <p>name 은 {query.name} 입니다.</p>}
    </div>
  );
}
