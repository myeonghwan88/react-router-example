// export default function Profile(props) {
//   // console.log("Profile", props);
//   const id = props.match.params.id;
//   console.log("id, 타입", id, typeof id);
//   return (
//     <div>
//       <h2>Profile 페이지 입니다.</h2>
//       {/* 조건부 랜더링으로 id가 있으면 노출 */}
//       {id && <p>id는 {id} 입니다.</p>}
//     </div>
//   );
// }

import { useParams } from "react-router-dom";

export default function Profile() {
  const params = useParams();
  const id = params.id;
  console.log("id, 타입", id, typeof id);
  return (
    <div>
      <h2>Profile 페이지 입니다.</h2>
      {/* 조건부 랜더링으로 id가 있으면 노출 */}
      {id && <p>id는 {id} 입니다.</p>}
    </div>
  );
}
