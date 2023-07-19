import { useRouter } from "next/router";
import { useEffect } from "react";
import { restoreAccessTokenLoadable } from "../../../../commons/stores";
import { useRecoilValueLoadable } from "recoil";
import { getAccessToken } from "../../../../commons/libraries/getAccessToken";

export const useAuth = (): void => {
  // const [visitedPage, setVisitedPage] = useRecoilState(visitedPagetate);
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);
  const router = useRouter();
  // 로그인 체크 리프레시토큰 이전방법
  // useEffect(() => {
  //   if (localStorage.getItem("accessToken") === null) {
  //     alert("로그인 후 이용가능합니다");
  //     void router.push(`/login`);
  //   }
  // });

  // 리프레시토큰 적용 이후 app.tsx에 이어서 api 2번요청으로 안좋음
  useEffect(() => {
    void getAccessToken().then((newAccessToken) => {
      if (newAccessToken === undefined) {
        alert("로그인 후 이용가능합니다");
        void router.push(`/login`);
      }
    });
  });
};
// 최종 : 리코일에서 함수를 공유하므로 api 1번요청으로가능
//   useEffect(() => {
//     void aaa.toPromise().then((newAccessToken) => {
//       if (newAccessToken === undefined) {
//         alert("로그인 후 이용가능합니다");
//         void router.push(`/login`);
//       }
//     });
//   }, []);
// };
