import useDynamicTitle from "../../hooks/useDynamicTitle";

const NotFoundPage = () => {
  useDynamicTitle("Not Found");

  return (
    <div>
      <h1>Not Found</h1>
    </div>
  );
};

export default NotFoundPage;
