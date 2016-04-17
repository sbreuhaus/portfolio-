import React from 'react';

const AddProject = (props) => {
  return (
    <div>
      <p>Add Project</p>
      <input placeholder="Title" onChange={props.onInput} name="projectTitle"></input><br/>
      <input placeholder="Thumbnail (300x300)" onChange={props.onInput} name="projectThumbnail"></input><br/>
      <input placeholder="Skills" onChange={props.onInput} name="projectSkills"></input><br/>
      <input placeholder="Description" onChange={props.onInput} name="projectDescription"></input><br/>
      <input placeholder="Image (900x506)" onChange={props.onInput} name="projectDescription"></input><br/>
      <input placeholder="Link" onChange={props.onInput} name="projectLink"></input><br/>
      <button type="button" onClick={props.onAddProject}>Add Project</button>
    </div>
  );
};

export default AddProject;
