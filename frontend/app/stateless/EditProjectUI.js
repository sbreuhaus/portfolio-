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
          className='projectInput'
          placeholder="Title"
          onChange={props.onInput}
          name="newTitle"
          value={props.newTitle}>
        </input>
        <br/>
        <input
          className='projectInput'
          placeholder="Thumbnail (300x300)"
          onChange={props.onInput}
          name="newThumbnail"
          value={props.newThumbnail}>
        </input>
        <br/>
        <input
          className='projectInput'
          placeholder="Skills"
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
