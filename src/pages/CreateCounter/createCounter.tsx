import { addCounter } from "entities/counters";
import { Field, Form, Formik } from "formik";
import { CSSProperties, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateCounter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [color, setColor] = useState(0);

  useEffect(() => {
    setColor(Math.floor(Math.random() * 360));
  }, []);

  const bg: CSSProperties = {
    backgroundColor: `hsl(${color}, 20%, 90%)`,
  };

  const text: CSSProperties = {
    color: `hsl(${color}, 90%, 20%)`,
  };

  return (
    <div style={bg}>
      <div style={text} className="container">
        <h1>Create Counter</h1>
        <Formik
          initialValues={{
            title: "",
            description: "",
          }}
          onSubmit={(values, helpers) => {
            dispatch(
              addCounter({
                count: 0,
                title: values.title,
                description: values.description,
              })
            );
            helpers.resetForm();
            navigate("/");
          }}
        >
          {() => {
            return (
              <Form>
                <label>
                  Title
                  <Field name="title" />
                </label>
                <label>
                  Description
                  <Field name="description" as="textarea" />
                </label>
                <button type="submit">create</button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default CreateCounter;
