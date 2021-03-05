import Template from './Template'

const Templates = ({ templates }) => {

    let templateList = templates.map( template => <Template template={template} key={template._id}/>) 
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <a type="button" href="/createtemplate" className="btn c-btn">Create Template</a>
        <div className="d-flex flex-row flex-wrap mt-5">
        {templateList}
        </div>
      </div>
    </>
  );
};

export default Templates;
