import React from 'react';
import { pagestyle } from '../styles/styles';
import { ProjectCard } from '../components/ProjectCard';

const style = {
    "color": "#60C689",
}

const style2 = {
    "color": "#b2b2b2",
}

const codeCrackerDesc = "This was a school project where you needed to create code that would use SHA to encrypt a password. The code"
+ " then uses several password dictionaries to attempt and crack the code. The time to crack the password is recorded and displayed to the user.";

const livelySpiritDesc = "Experience a platformer that doesn't punish you for dying! A fun game where you transfer your spirit from body to body in order to keep it alive, in order to transfer your body you've got to cause some havoc, whether that's smashing into a car, giant spike, or even a plane! Enjoy the fun gameplay and pixel art that will surely make you feel better about your own artistic skill! Created in 48 hours for Ludum Dare 46 with the theme 'Keep it Alive'.";

const countriesAndStatesDesc = "This project was done while onboarding at Exelaration. Using React, Django, and Docker I created a website that interacts with a rest api to gather and modify a datebase containing country and state info.";

const journalDesc = "This was my first non-tutorial javascript project. I created a journal entry application that saves data locally to your web browser.";

const gatsbyDesc = "This was a simple game made using Unity. It's a copy of frogger except you're Myrtle trying not to get hit by Gatsby's car. " +
"This was made for an English project. It was a lot of fun to create the pixel assets.";

const crucibleDesc = "This was one of the first complete games I ever made. I made it for an English class assignment about" + 
" the Salem Witch Trials. You can fly around as a witch and attack common-folk. I wouldn't say this is a representation of my current " +
"skill. I've come a long way since making this, but it's quite fun to show some of my earlier projects.";

class Home extends React.Component{
    render(){
        return(
            <div style={pagestyle}>
                <h1 style={style}>Projects</h1>
                <h2 style={style2}>I've been up to a lot lately, please check it out!</h2>
                <table>
                    <tr>
                        <ProjectCard title="Code Cracker" photo="codeCracker.PNG" link="https://github.com/LiamMcBride/CodeCracker" desc={codeCrackerDesc}/>
                    </tr>
                    <tr>
                        <ProjectCard title="Lively Spirit" photo="livelySpirit.png" link="https://bluelettergames.itch.io/lively-spirit" desc={livelySpiritDesc}/>
                    </tr>
                    {/* <tr>
                        <ProjectCard title="Countries and States" photo="livelySpirit.png" link="https://github.com/LiamMcBride/Frontend_backend_proj" desc={countriesAndStatesDesc}/>
                    </tr> */}
                    <tr>
                        <ProjectCard title="Journal" photo="journal.png" link="https://github.com/LiamMcBride/Website" desc={journalDesc}/>
                    </tr>
                    <tr>
                        <ProjectCard title="Gatsby Game" photo="gatsby.png" link="https://bluelettergames.itch.io/gatsby-game" desc={gatsbyDesc}/>
                    </tr>
                    <tr>
                        <ProjectCard title="Crucible" photo="crucible.png" link="https://bluelettergames.itch.io/the-crucible" desc={crucibleDesc}/>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Home;
