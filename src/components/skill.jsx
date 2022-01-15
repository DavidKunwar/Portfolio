import React from 'react';
import skills from '../data/skill_list.json'
import SkillCol from './skillCol';

function Skill(){

    const {Languages, Frontend, Backend} = skills;


    return (
        <div class="skills" id="skills">
        <h1>Skills</h1>

        <div class="skills-section">
            <SkillCol list={Languages} title="Languages" />
            <SkillCol list={Frontend} title="Frontend" />
            <SkillCol list={Backend} title="Backend" />
        </div>
      </div>
    );
}

export default Skill;