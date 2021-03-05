import { useParams } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import EmailEditor from "react-email-editor";
import axios from "axios";

const EditTemplate = ({ templates }) => {
  const [found, setFound] = useState("");
  const [name, setName] = useState("");
  const emailEditorRef = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    for (let i = 0; i < templates.length; i++) {
      if (templates[i]._id === id) {
        setFound(templates[i]);
        break;
      }
    }
    setName(found.Name);
  }, [found, templates, id]);

  const editTemplate = async (e) => {
    e.preventDefault();
    emailEditorRef.current.editor.exportHtml(async (data) => {
      const { design, html } = data;
      console.log(html);
      const newTemplate = {
        Name: name,
        Design: design,
      };
      const res = await axios.post(`/api/template/edit/${id}`, newTemplate);
      alert(`${res.data} , Check Html in the console`);
      window.location = "/";
    });
  };
  const loaded = () => {
    const data = JSON.parse(found.Design);
    emailEditorRef.current.editor.loadDesign(data);
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  return (
    <form
      className="d-flex flex-column justify-content-center align-items-center"
      onSubmit={editTemplate}
    >
      <h3 className="mb-5">Edit Your Template here . . .</h3>
      <div className="d-flex w-75 flex-row justify-content-between align-items-center mb-5">
        <div className="d-flex w-75">
          <label htmlFor="Name" className="form-label me-3 fs-5">
            Name
          </label>
          <input
            type="text"
            value={name}
            className="form-control"
            id="Name"
            placeholder="Name of the Template . . ."
            onChange={updateName}
          ></input>
        </div>
        <a href="/" type="button" className="btn c-btn">
          Back
        </a>
        <button type="submit" className="btn c-btn">
          Save Changes
        </button>
      </div>
      <EmailEditor ref={emailEditorRef} onLoad={loaded} />
    </form>
  );
};

export default EditTemplate;
