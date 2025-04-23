import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const usePostQuery = () => {
  return useQuery({
    queryKey: ["posts"], //이름을 가진 외부 API데이터 가져오기
    queryFn: () => {
      return axios.get(`http://localhost:3000/posts`);
    },
    retry: 1, //호출시도
    select: (data) => {
      return data.data;
    },
    gcTime: 20000,
    staleTime: 10000,
    enabled: false, //컴포넌트 페이지에 들어가도 처음에는 데이터를 찾아오지 않는다. 새로고침했을때 api호출됨(ex. 검색기능)
    // refetchInterval: 3000, // 3초에 한번씩 api호출, 실시간으로 값을 받아와야할 때 사용(ex.주식, 실시간 검색어 등)
    // refetchOnMount: false, //컴포넌트가 리패치되는 시점에 마운트를 할거냐 안할거냐//호출 안함 //정적인 페이지를 운영할때는 호출할 필요가 없음. 최초의 한번만 호출하고 그 뒤로는 호출할 필요가 없을 때 사용
    // refetchOnWindowFocus: true, // 최초의 호출 후 다른 창을 열었다가 다시 페이지에 들어왔을 때 최신 데이터를 호출해서 가져옴
  });
};
