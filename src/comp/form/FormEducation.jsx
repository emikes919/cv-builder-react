export default function FormEducation(props) {
    const { 
        education,
        onAddEducation,
        onAddEducationSubSection,
        onDeleteEducationSubSection,
        onDeleteEducation,
        handleChangeEducation,
        handleChangeEducationSubSection,
        toggleCollapseEducation
    } = props;

    return (
        <div className='form-section' id='form-education'>
            <h2>Education</h2>
            {education.length === 0
                                    ?
                                        'No education added'
                                    :
                                        <ul>
                                            {education.map(school => (
                                                <li key={school.id}>
                                                    <EducationItem 
                                                        education={education}
                                                        id={school.id}
                                                        onAddEducationSubSection={onAddEducationSubSection}
                                                        onDeleteEducationSubSection={onDeleteEducationSubSection}
                                                        onDeleteEducation={onDeleteEducation}
                                                        handleChangeEducation={handleChangeEducation}
                                                        handleChangeEducationSubSection={handleChangeEducationSubSection}
                                                        toggleCollapseEducation={toggleCollapseEducation}
                                                    />
                                                </li>
                                            ))} 
                                        </ul>
            }
            <button className='add-btn' onClick={onAddEducation}>Add Education</button>
        </div>
    )
}

const EducationItem = (props) => {
    const { 
        id,
        education,
        onAddEducationSubSection,
        onDeleteEducationSubSection,
        onDeleteEducation,
        handleChangeEducation,
        handleChangeEducationSubSection,
        toggleCollapseEducation
    } = props;

    const thisEducation = education.filter(school => school.id === id)[0];

    return (
        <form>
            {thisEducation.isCollapsed
                                        ?
                                            <div className='collapsed-div'>
                                                <div className='placeholder-title'>
                                                    {thisEducation.name === ''
                                                                                ?
                                                                                    'Unnamed school'
                                                                                :
                                                                                    thisEducation.name
                                                    }
                                                </div>
                                                <div className='control-btns'>
                                                    <button className='collapse-btn' id={id} onClick={toggleCollapseEducation}>EXPAND</button>
                                                    <button className='delete-btn' id={id} onClick={onDeleteEducation}>Delete</button>
                                                </div>
                                            </div>
                                        :
                                            <div>
                                                <div className='control-btns'>
                                                    <button className='collapse-btn' id={id} onClick={toggleCollapseEducation}>COLLAPSE</button>
                                                    <button className='delete-btn' id={id} onClick={onDeleteEducation}>Delete</button>
                                                </div>
                                                <div className='education-fields'>
                                                    <div className='education-field' id={id}>
                                                        <label htmlFor='school-name'>School</label>
                                                        <input type='text' id='school-name' value={thisEducation.name} onChange={handleChangeEducation} />
                                                    </div>
                                                    <div className='education-field' id={id}>
                                                        <label htmlFor='school-location'>Location</label>
                                                        <input type='text' id='school-location' value={thisEducation.location} onChange={handleChangeEducation}/>
                                                    </div>
                                                    <div className='education-field' id={id}>
                                                        <label htmlFor='degree-major'>Degree / Major</label>
                                                        <input type='text' id='degree-major' value={thisEducation.degree} onChange={handleChangeEducation}/>
                                                    </div>
                                                    <div className='education-field' id={id}>
                                                        <label htmlFor='graduation-year'>Graduation Year</label>
                                                        <input type='text' id='graduation-year' value={thisEducation.gradYear} onChange={handleChangeEducation}/>
                                                    </div>
                                                    <div className='education-field' id={id}>
                                                        <label >Sub-sections</label>
                                                        {thisEducation.subSections.length === 0
                                                                                                ?
                                                                                                    <div id='no-subsection-added'>No sub-sections added</div>
                                                                                                :
                                                                                                    <ul>
                                                                                                        {thisEducation.subSections.map(subSection => (
                                                                                                            <li key={subSection.id}>
                                                                                                                <EducationSubSection 
                                                                                                                    id={subSection.id}
                                                                                                                    title={subSection.title}
                                                                                                                    content={subSection.content}
                                                                                                                    handleChangeEducationSubSection={handleChangeEducationSubSection}
                                                                                                                    onDeleteEducationSubSection={onDeleteEducationSubSection}
                                                                                                                />
                                                                                                            </li>
                                                                                                        ))}
                                                                                                    </ul>
                                                        }
                                                        <button className='add-sub-btn' onClick={onAddEducationSubSection}>Add sub-section</button>
                                                    </div>
                                                </div>                                
                                            </div>
            }
        </form>
    )
}

const EducationSubSection = (props) => {
    const {
        id,
        title,
        content,
        handleChangeEducationSubSection,
        onDeleteEducationSubSection
    } = props
    return (
        <div className='education-sub-section' id={id}>
            <div className='education-sub-section-field'>
                <label htmlFor='edu-sub-section-title'>Title</label>
                <input type='text' id='edu-sub-section-title' value={title} onChange={handleChangeEducationSubSection}/>
            </div>
            <div className='education-sub-section-field' id='education-sub-section-field-content'>
                <label htmlFor='edu-sub-section-content'>Content</label>
                <input type='text' id='edu-sub-section-content' value={content} onChange={handleChangeEducationSubSection}/>
            </div>
            <button className='delete-btn edu-sub-section' id={id} onClick={onDeleteEducationSubSection}>Delete</button>
        </div>
    )
}