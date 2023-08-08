import { useQuery } from "react-query";
import api from "../../utils/apiInstance";

const useGetAllInstructors = () => {
  const { isLoading: isInstructorsLoading, data: instructors = [] } = useQuery({
    queryKey: ["allInstructors"],
    queryFn: async () => {
      const res = await api.get("/users/instructors");
      return res.data;
    },
  });

  return { isInstructorsLoading, instructors };
};

export default useGetAllInstructors;
