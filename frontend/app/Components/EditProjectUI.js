import React from 'react';

const EditProject = (props) => {
  console.log("ediproject logged!");
  return (
    <div>
      <select>
        <option disable>-- select an option</option>
        {props.allProjects.map(function(obj, key){
            return (
              <option key={key}>{obj.title}</option>
            )
          })}
      </select>
    </div>
  );
};

export default EditProject;

// <div>
//   <p>Edit Project</p>
//   <input placeholder="title"></input>
//   <input placeholder="image"></input>
//   <input placeholder="skills"></input>
//   <button type="button">Edit Project</button>
// </div>
