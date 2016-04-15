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
