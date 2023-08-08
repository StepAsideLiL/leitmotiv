import { useForm } from "react-hook-form";
import Main from "../../components/ui/Main";
import api from "../../utils/apiInstance";
import useFireAuth from "../../hooks/useFireAuth";

const AddCoursePage = () => {
  const { userDB } = useFireAuth();
  const { register, handleSubmit } = useForm();
  console.log(userDB);

  const handleAddCourseFormSubmission = (data) => {
    const courseData = {
      ...data,
      instructorName: userDB.name,
      instructorEmail: userDB.email,
      instructorImage: userDB.image,
    };
    console.log(courseData);

    api
      .post("/courses", courseData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Main className="container max-w-5xl mx-auto">
      <form
        onSubmit={handleSubmit(handleAddCourseFormSubmission)}
        className="card-body"
      >
        <h2 className="my-5 text-2xl text-center">Add Course</h2>

        <div className="form-control">
          <label className="label" htmlFor="title">
            <span className="label-text">Course Title</span>
          </label>

          <input
            type="text"
            id="title"
            {...register("title", { required: true })}
            placeholder="Course Title"
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label" htmlFor="description">
            <span className="label-text">Course Description</span>
          </label>

          <input
            type="text"
            id="description"
            {...register("description", { required: true })}
            placeholder="Course Description"
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label" htmlFor="image">
            <span className="label-text">Course Image</span>
          </label>

          <input
            type="url"
            id="image"
            {...register("image", { required: true })}
            placeholder="Course Description"
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label" htmlFor="price">
            <span className="label-text">Course Price</span>
          </label>

          <input
            type="Number"
            id="price"
            {...register("price", { required: true })}
            placeholder="Course Price"
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label" htmlFor="category">
            <span className="label-text">Course Category</span>
          </label>

          <input
            type="text"
            id="category"
            {...register("category", { required: true })}
            placeholder="Course Category"
            className="input input-bordered"
          />
        </div>

        <div className="mt-6 form-control">
          <button className="btn btn-primary" type="submit">
            Add Course
          </button>
        </div>
      </form>
    </Main>
  );
};

export default AddCoursePage;
