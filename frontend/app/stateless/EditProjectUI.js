import React from 'react';

const EditProjectUI = (props) => {
  return (
    <div>
      <br/>
      <select onChange={props.onAutoFill}>
        <option disable>-- select a project --</option>
        {props.allProjects.map(function(obj, key){
            return (
              <option key={key} value={obj['_id']}>{obj.title}</option>
            )
          })}
      </select>
      <br/>
      <div>
        <input
          placeholder="title"
          onChange={props.onInput}
          name="newTitle"
          value={props.newTitle}>
        </input>
        <br/>
        <input
          placeholder="image"
          onChange={props.onInput}
          name="newThumbnail"
          value={props.newThumbnail}>
        </input>
        <br/>
        <input
          placeholder="skills"
          onChange={props.onInput}
          name="newSkills"
          value={props.newSkills}>
        </input>
        <br/>
        <button type="button" onClick={props.onEditProject}>Edit Project</button>
      </div>
    </div>
  );
};

export default EditProjectUI;
