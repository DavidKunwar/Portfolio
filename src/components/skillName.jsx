import React from 'react';


function SkillName(props){
    console.log(props);
    return (
        <p><img height="40" src={props.url} alt={props.text} class="skill-img" />{props.text}</p>
    );
}



export default SkillName;