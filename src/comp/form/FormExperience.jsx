export default function FormExperience(props) {
    const {
        experience,
        onAddExperience,
        onAddJobDescription,
        onDeleteJobDescription,
        onDeleteExperience,
        handleChangeExperience,
        handleChangeJobDescription,
        toggleCollapseExperience
    } = props;
    
    return (
        <div className='form-section' id='form-experience'>
            <h2>Experience</h2>
            {experience.length === 0
                                    ?
                                        'No experience added'
                                    :
                                        <ul>
                                            {experience.map(job => (
                                                <li key={job.id}>
                                                    <ExperienceItem
                                                        experience={experience}
                                                        handleChangeExperience={handleChangeExperience}
                                                        onAddJobDescription={onAddJobDescription}
                                                        onDeleteJobDescription={onDeleteJobDescription}
                                                        onDeleteExperience={onDeleteExperience}
                                                        handleChangeJobDescription={handleChangeJobDescription}
                                                        toggleCollapseExperience={toggleCollapseExperience}
                                                        id={job.id}
                                                    />
                                                </li>
                                            ))} 
                                        </ul>
            }
            <button className='add-btn' onClick={onAddExperience}>Add Experience</button>
        </div>
    )
}

const ExperienceItem = (props) => {
    const { 
        experience,
        id,
        handleChangeExperience,
        onAddJobDescription,
        onDeleteJobDescription,
        onDeleteExperience,
        handleChangeJobDescription,
        toggleCollapseExperience
    } = props;
    
    const thisExperience = experience.filter(job => job.id === id)[0];

    return (
        <form>
            {thisExperience.isCollapsed
                                        ?
                                            <div className='collapsed-div'>
                                                <div className='placeholder-title'>
                                                    {thisExperience.name === ''
                                                                                ?
                                                                                    'Unnamed experience'
                                                                                :
                                                                                    thisExperience.name
                                                    }
                                                </div>
                                                <div className='control-btns'>
                                                    <button className='collapse-btn' id={id} onClick={toggleCollapseExperience}>EXPAND</button>
                                                    <button className='delete-btn' id={id} onClick={onDeleteExperience}>Delete</button>
                                                </div>
                                            </div>
                                        :
                                            <div>
                                                <div className='control-btns'>
                                                    <button className='collapse-btn' id={id} onClick={toggleCollapseExperience}>COLLAPSE</button>
                                                    <button className='delete-btn' id={id} onClick={onDeleteExperience}>Delete</button>
                                                </div>
                                                <div className='experience-fields'>
                                                    <div className='experience-field' id={id}>
                                                        <label htmlFor='company-name'>Company Name</label>
                                                        <input type='text' id='company-name' value={thisExperience.name} onChange={handleChangeExperience}/>
                                                    </div>
                                                    <div className='experience-field' id={id}>
                                                        <label htmlFor='company-description'>Company Description</label>
                                                        <input type='text' id='company-description' value={thisExperience.companyDescription} onChange={handleChangeExperience}/>
                                                    </div>
                                                    <div className='experience-field' id={id}>
                                                        <label htmlFor='company-location'>Location</label>
                                                        <input type='text' id='company-location' value={thisExperience.location} onChange={handleChangeExperience}/>
                                                    </div>
                                                    <div className='experience-field' id={id}>
                                                        <label htmlFor='position-title'>Position</label>
                                                        <input type='text' id='position-title' value={thisExperience.position} onChange={handleChangeExperience}/>
                                                    </div>
                                                    <div className='experience-dates-field' id={id}>
                                                        <div className='experience-field' id={id}>
                                                            <label htmlFor='start-date'>Start Date</label>
                                                            <input type='text' id='start-date' onChange={handleChangeExperience}/>
                                                        </div>
                                                        <div className='experience-field' id={id}>
                                                            <label htmlFor='end-date'>End Date</label>
                                                            <input type='text' id='end-date' onChange={handleChangeExperience}/>
                                                        </div>
                                                    </div>
                                                    <div className='experience-field' id={id}>
                                                        <label htmlFor='job-description'>Job Description</label>
                                                            {thisExperience.jobDescription.length === 0
                                                                                                        ?
                                                                                                            <div id='no-job-description-added'>No job description added</div>
                                                                                                        :                                                
                                                                                                            <ul>
                                                                                                                {thisExperience.jobDescription.map(bullet => (
                                                                                                                    <li key={bullet.id}>
                                                                                                                        <JobDescriptionBullet
                                                                                                                            id={bullet.id}
                                                                                                                            content={bullet.content}
                                                                                                                            handleChangeJobDescription={handleChangeJobDescription}
                                                                                                                            onDeleteJobDescription={onDeleteJobDescription}
                                                                                                                        />
                                                                                                                    </li>
                                                                                                                ))}
                                                                                                            </ul>
                                                            }
                                                        <button className='add-sub-btn' onClick={onAddJobDescription}>Add Bullet</button>
                                                    </div>
                                                </div>
                                            </div>
                                            
            }
        </form>    
    )
}

const JobDescriptionBullet = (props) => {
    const {
        id,
        content,
        handleChangeJobDescription,
        onDeleteJobDescription
    } = props;

    return (
        <div className='job-description-component' id={id}>
            <input type='text' className='job-description-bullet' value={content} onChange={handleChangeJobDescription}/>
            <button className='delete-btn' id={id} onClick={onDeleteJobDescription}>Delete</button>
        </div>
    )
}