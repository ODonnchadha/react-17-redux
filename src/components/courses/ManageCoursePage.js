// The useState() hook allows us to add React state to functional components.
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
// Using named imports with our actions to simplify mapDispatchToProps.
import { loadCourses, saveCourse } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import CourseForm from "./CourseForm";
// Empty class is defined here
import { newCourse } from "../../../tools/mockData";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

// The bound action passed in on props "Wins."
// Function scope takes precedence over module scope.
// Made this a functional component. Replaced componentDidMount with useEffect().
// Hooks allow us to handle state and side effects (think lifecycle methods) in function components.
// Prefer function components over class components. FUnctions with hooks are easier to declare and maintain.
export function ManageCoursePage({
  courses,
  authors,
  loadAuthors,
  loadCourses,
  saveCourse,
  history,
  // Use the rest opreator to leverage any properties not destructured to props.
  ...props
}) {
  // useState returns a pair of values. First: Value. Second: Setter function.
  // props.course is different to the destructured course.
  // React state? Why not Redux? Unnecessary and avoids complexitity.
  // To choose Redux versus local state:
  // Who cares about this data? If only a few closely-related components 
  //   use the data, prefer plain React state. 
  //   With a form, only local components care about the data.
  const [course, setCourse] = useState({ ...props.course });
  // Any errors that occur when validation is run.
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  // Will this hook run every time the component renders? Perhaps.
  // Declare a second argument as an array of items for it to watch.
  // The empty array as a second argument to effect means the effect will run once when the component mounts.
  // [] as a second argument is the very same as componentWillMount().
  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch(error => {
        alert("Loading courses failed" + error);
      });
    } else {
      setCourse({ ...props.course });
    }

    if (authors.length === 0) {
      loadAuthors().catch(error => {
        alert("Loading authors failed" + error);
      });
    }
  }, [props.course]);

  // Managed components.
  function handleChange(event) {
    // Destructuring of the event.
    // This destructure avoids the event getting garbage collected 
    //   so that it's available within the nested setCourse callback.
    const { name, value } = event.target;
    setCourse(prevCourse => ({
      ...prevCourse,
      // JavaScript's computed property syntax. It allows us to reference a property via a variable.
      // "title" becomes course.title.
      [name]: name === "authorId" ? parseInt(value, 10) : value
      // Events return numbers as strings, so we need to convert the id to an int here.
    }));
  }

  function formIsValid() {
    const { title, authorId, category } = course;
    const errors = {};

    if (!title) errors.title = "Title is required.";
    if (!authorId) errors.author = "Author is required";
    if (!category) errors.category = "Category is required";

    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  // 
  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    saveCourse(course)
      .then(() => {
        toast.success("Course saved.");
        history.push("/courses");
      })
      .catch(error => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  // No need for a render() statement within a functional compnent.
  return authors.length === 0 || courses.length === 0 ? (
    <Spinner />
  ) : (
    <CourseForm
      course={course}
      errors={errors}
      authors={authors}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  );
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export function getCourseBySlug(courses, slug) {
  return courses.find(course => course.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const course =
    slug && state.courses.length > 0
      ? getCourseBySlug(state.courses, slug)
      : newCourse;
  return {
    course,
    courses: state.courses,
    authors: state.authors
  };
}

// Object form of mapDispatchToProps in order to simplify the code.
// If we declare mapDispatchToProps as an object instead, each property will automatically be bound to dispatch.
// NOTE: These names are the same as the unbound thunks we imported at the top.
// This passes the *bound* action creator in on props under the same name.
const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
  saveCourse
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoursePage);
