import React from 'react';
import SkillName from './skillName';

function SkillCol(props){
    
    return(
        <div class="skill-col1">
            <h2>{props.title}</h2>
            {
                props.list.map( (listItem) => {
                    
                    return (
                    <SkillName
                    url={listItem.skill_iconUrl}
                    text={listItem.skill_name}
                    />
                    )
                })
            }
            
          </div>
    );
}

export default SkillCol;