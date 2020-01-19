import React, {Component} from 'react';
import Academics from '../academics/Academics';
import SkillDuration from '../skillduration/SkillDuration';
import {connect} from 'react-redux';


class ResumeBody extends Component {
    constructor(props) {
        super(props);

        console.log(this.props);

        
    }


    componentDidMount() {
        console.log(this.props);
    }



    render() {
        let profileSummaryList = this.props.profileSummary.map((item, index) => {
            let innerHtml = {
                __html : '<span>' + item + '</span>'
            }
            return (
                <li key={index} dangerouslySetInnerHTML={innerHtml}></li>
            )
        });

        return (

            <article className='resume-body'>
                <div className='section'>
                    <h2><i className='mdi mdi-briefcase'></i> Profile Summary</h2>
                    <ul>
                        {profileSummaryList}						
					</ul>
                </div>



                <div className='section'>
                    <h2><i className='mdi mdi-school'></i> Academics</h2>
                    <div className='academics-grid'>
                        <Academics year="2011-2015" name="Bachelor of Engineering" subject="(Computer Engineering)" score="60%" _class="(First Class)" institute="K K Wagh (University of Pune)" city="Nashik" />
                        <Academics year="2011" name="Class XII" subject="(HSC)" score="86.8%" _class="(93% PCM)" institute="ATT (Maharashtra Board)" city="Malegaon"/>
                        <Academics year="2009" name="Class X" subject="(SSC)" score="88.5%" _class="(CBSE)" institute="Shantiniketan Indian School" city="Doha"/>
                    </div>

                </div>


                <div className='section'>
                    <h2><i className='mdi mdi-code-tags'></i> Skillset</h2>

                    <h3><i className='mdi mdi-chevron-right'></i> Primary skills &amp; relevant experience</h3>

                    <table cellPadding='0' cellSpacing='0' border='0' className='skills-table'>
                        <tbody>
                            <tr>
                                <td>Web App Development <SkillDuration from='June 2015' /></td>
                                <td>Backend Development <SkillDuration from='June 2015' /></td>
                                <td>JavaScript <SkillDuration from='June 2012' /></td>
                                <td>React <SkillDuration from='January 2019' /></td>
                                <td>Angular <SkillDuration from='January 2018' /></td>
                            </tr>
                            <tr>                                
                                <td>jQuery <SkillDuration from='June 2011' /></td>
                                <td>HTML5 <SkillDuration from='June 2011' /></td>
                                <td>CSS3 <SkillDuration from='June 2011' /></td>
                                <td>Node JS <SkillDuration from='April 2018' /></td>
                                <td>SASS <SkillDuration from='April 2017' /></td>

                            </tr>
                            <tr>                            
                                <td>ES6 <SkillDuration from='April 2018' /></td>
                                <td colSpan='4'>Java/JEE <SkillDuration from='June 2015' to="June 2018" /></td>
                            </tr>
                        </tbody>
                        
                    </table>

                    <h3><i className='mdi mdi-chevron-right'></i> Tech/frameworks I have also worked with</h3>

                    <table cellPadding='0' cellSpacing='0' border='0' className='skills-table'>
                        <tbody>
                            <tr>
                                <td>Gulp/grunt</td>
                                <td>WordPress</td>
                                <td>php</td>
                                <td>Bootstrap</td>
                                <td>Python</td>
                                <td>Google Maps</td>
                                <td>Apache Tapestry</td>
                            </tr>
                            <tr>                                
                                <td>Spring MVC</td>
                                <td>Liferay</td>
                                <td>Ionic</td>
                                <td>Phonegap/Cordova</td>
                                <td>MySQL</td>
                                <td>MongoDB</td>
                                <td>Sqlite</td>
                            </tr>
                        </tbody>
                        
                    </table>


                </div>


            </article>
        );
    }
}

const mapState = (state) => {
    return state.resumeBody;
}

const ConnectedResumeBody = connect(mapState)(ResumeBody);
export default ConnectedResumeBody;