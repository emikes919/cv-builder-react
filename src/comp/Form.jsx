import FormInfo from './form/FormInfo.jsx';
import FormExperience from './form/FormExperience.jsx';
import FormEducation from './form/FormEducation.jsx';
import FormAdditional from './form/FormAdditional.jsx';

export default function Form(props) {
    const { 
        experience,
        education,
        additionals,
        onAddExperience,
        onAddJobDescription,
        onDeleteJobDescription,
        onDeleteExperience,
        onAddEducation,
        onAddEducationSubSection,
        onDeleteEducationSubSection,
        onDeleteEducation,
        onAddAdditionalBullet,
        onDeleteAdditionalBullet,
        handleChangeInfo,
        handleChangeExperience,
        handleChangeJobDescription,
        handleChangeEducation,
        handleChangeEducationSubSection,
        handleChangeAdditional,
        toggleCollapseExperience,
        toggleCollapseEducation
    } = props;

    return (
        <div className='form'>
            <div className='form-content'>
                <div className='form-header'>Construct Your CV Below</div>
                <div className='form-body'>
                    <FormInfo handleChangeInfo={handleChangeInfo} />
                    <FormExperience 
                        experience={experience}
                        onAddExperience={onAddExperience}
                        onAddJobDescription={onAddJobDescription}
                        onDeleteJobDescription={onDeleteJobDescription}
                        onDeleteExperience={onDeleteExperience}
                        handleChangeExperience={handleChangeExperience}
                        handleChangeJobDescription={handleChangeJobDescription}
                        toggleCollapseExperience={toggleCollapseExperience}
                    />
                    <FormEducation 
                        education={education}
                        onAddEducation={onAddEducation}
                        onAddEducationSubSection={onAddEducationSubSection}
                        onDeleteEducationSubSection={onDeleteEducationSubSection}
                        onDeleteEducation={onDeleteEducation}
                        handleChangeEducation={handleChangeEducation}
                        handleChangeEducationSubSection={handleChangeEducationSubSection}
                        toggleCollapseEducation={toggleCollapseEducation}
                    />
                    <FormAdditional
                        additionals={additionals}
                        handleChangeAdditional={handleChangeAdditional}
                        onAddAdditionalBullet={onAddAdditionalBullet}
                        onDeleteAdditionalBullet={onDeleteAdditionalBullet}
                    />
                </div>
            </div>
        </div>
    )
}