import { useQuery } from "react-query";
import api from "../../utils/apiInstance";

const useGetAllCourses = () => {
  const { isLoading: isAllCoursesLoadin, data: courses = [] } = useQuery({
    queryKey: ["allCourses"],
    queryFn: async () => {
      const res = await api.get("/courses");
      return res.data;
    },
  });

  return { isAllCoursesLoadin, courses };
};

export default useGetAllCourses;
