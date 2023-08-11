import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";
// import "./CourseInput.css";

const FormInput = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.inValid ? "#ff002b" : "black")};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.inValid ? "red" : "#ccc")};
    background: ${(props) => (props.inValid ? "#ff4000" : "transparent")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  &.invalid label {
    color: #ff002b;
  }

  &.invalid input {
    background: #ff7300;
    border-color: #fabf72;
  }
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValidInput, setIsValidInput] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsValidInput(true);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValidInput(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue(" ");
  };

  {
    /*-------------------------------Dynamic and inline styling demo------------------------------------- */
  }

  // return (
  //   <form onSubmit={formSubmitHandler}>

  //     {/* Dynamic Class Styling -- much preffered */}
  //     <div className={`form-control ${!isValidInput ? "invalid" : ""}`}>
  //       {/* Dynamic inline Styling */}
  //       {/* <label style={{ color: !isValidInput ? "red" : "black" }}>
  //         Course Goal
  //       </label> */}
  //       <label>Course Goal</label>
  //       <input
  //         style={{
  //           borderColor: !isValidInput ? "red" : "black",
  //           background: !isValidInput ? "salmon" : "transparent",
  //         }}
  //         type="text"
  //         value={enteredValue}
  //         onChange={goalInputChangeHandler}
  //       />
  //     </div>

  //     <Button type="submit">Add Goal</Button>
  //   </form>
  // );

  {
    /*-----------------------------------------styled component rendering demo------------------------------------- */
  }

  return (
    <form onSubmit={formSubmitHandler}>
      {/* 
      -------styling aAs per Javascript conditional class update and usage of syled component
      <FormInput className={!isValidInput && "invalid"}> */}

      {/*
      -------styling As per props concept and usage of styled component */}
      <FormInput inValid={!isValidInput}>
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </FormInput>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
