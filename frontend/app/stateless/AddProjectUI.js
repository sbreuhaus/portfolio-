import React from 'react';

const AddProject = (props) => {
  return (
    <div>
      <p>Add Project</p>
      <input className='projectInput' placeholder="Title" onChange={props.onInput} name="projectTitle"></input><br/>
      <input className='projectInput' placeholder="Thumbnail (300x300)" onChange={props.onInput} name="projectThumbnail"></input><br/>
      <input className='projectInput' placeholder="Skills" onChange={props.onInput} name="projectSkills"></input><br/>
      <input className='projectInput' placeholder="Description" onChange={props.onInput} name="projectDescription"></input><br/>
      <input className='projectInput' placeholder="Image (900x506)" onChange={props.onInput} name="projectDescription"></input><br/>
      <input className='projectInput' placeholder="Link" onChange={props.onInput} name="projectLink"></input><br/>
      <button type="button" onClick={props.onAddProject}>Add Project</button>
    </div>
  );
};

export default AddProject;
