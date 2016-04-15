import React from 'react';

const AddProject = (props) => {
  return (
    <div>
      <p>Add Project</p>
      <input placeholder="title" onChange={props.onInput} name="projectTitle"></input>
      <input placeholder="image" onChange={props.onInput} name="projectThumbnail"></input>
      <input placeholder="skills" onChange={props.onInput} name="projectSkills"></input><br/>
      <button type="button" onClick={props.onAddProject}>Add Project</button>
    </div>
  );
};

export default AddProject;
