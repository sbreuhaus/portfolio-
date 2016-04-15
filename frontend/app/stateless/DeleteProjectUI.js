import React from 'react';

const EditProject = (props) => {
  console.log("ediproject logged!");
  return (
    <div>
      <br/>
      <select onChange={props.onAutoFill}>
        <option disable>-- select a Project --</option>
        {props.allProjects.map(function(obj, key){
          return (
            <option key={key} value={obj['_id']}>{obj.title}</option>
          )
        })}
      </select>
      <br/>
      <button type="button" onClick={props.onDeleteProject}>Delete Project</button>
    </div>
  );
};

export default EditProject;
