import Template from './Template'

const Templates = ({ templates }) => {

    let templateList = templates.map( template => <Template template={template} key={template._id}/>) 
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <a type="button" href="/createtemplate" className="btn btn-lg c-btn">Create Template</a>
        <div className="d-flex justify-content-center flex-row flex-wrap mt-4">
        {templateList}
        </div>
      </div>
    </>
  );
};

export default Templates;
