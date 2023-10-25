import OutputInfo from './output/OutputInfo.jsx';
import OutputExperience from './output/OutputExperience.jsx';
import OutputEducation from './output/OutputEducation.jsx';
import OutputAdditional from './output/OutputAdditional.jsx';

export default function Output(props) {
    const { 
        info,
        experience,
        education,
        additionals,
        generatePDF
    } = props;
    return (
        <div className='output'>
            <div id='output-instructional-text'>
                <p id='dimensions-text'>Max dimensions: 8.5 x 11 in</p>
                <button id='pdf-btn' onClick={generatePDF}><i className="fa fa-file-pdf-o"></i>  PDF</button>
                
            </div>
            <div className='output-page'>
                <OutputInfo info={info} />
                <div className='output-main-content'>
                    <OutputExperience experience={experience} />
                    <OutputEducation education={education}/>
                    <OutputAdditional additionals={additionals}/>
                </div>
            </div>
        </div>
    )
}