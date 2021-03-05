import React, { useRef } from "react";
import EmailEditor from "react-email-editor";
import axios from "axios";

const CreateTemplate = () => {
  const emailEditorRef = useRef(null);

  const saveTemplate = async (e) => {
    e.preventDefault();
    emailEditorRef.current.editor.exportHtml(async (data) => {
      const { design, html } = data;
      console.log(html);
      const newTemplate = {
        Name: e.target[0].value,
        Design: design,
      };
      const res = await axios.post("/api/template", newTemplate);
      e.target[0].value = "";
      alert(`${res.data} , Check Html in the console`);
      window.location = "/";
    });
  };

  return (
    <form
      className="d-flex flex-column justify-content-center align-items-center"
      onSubmit={saveTemplate}
    >
      <h3 className="mb-5">Create Your Template here . . .</h3>
      <div className="d-flex w-75 flex-row justify-content-between align-items-center mb-5">
        <div className="d-flex w-75">
          <label htmlFor="Name" className="form-label me-3 fs-5">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="Name"
            placeholder="Name of the Template . . ."
          ></input>
        </div>
        <a href="/" type="button" className="btn c-btn">
          Back
        </a>
        <button className="btn c-btn">Save Template</button>
      </div>
      <EmailEditor ref={emailEditorRef} />
    </form>
  );
};

export default CreateTemplate;
