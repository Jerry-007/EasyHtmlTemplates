const Template = ({ template }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{template.Name}</h5>
        <p className="card-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit .
        </p>
        <a type="button" href={`id${template._id}`} className="c-btn btn">
          Edit
        </a>
      </div>
    </div>
  );
};

export default Template;
