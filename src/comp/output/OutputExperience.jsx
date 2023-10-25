export default function OutputExperience(props) {
    const { experience } = props;
    return (
        <div className='output-experience'>
            <h2>Experience</h2>
            {experience.length === 0
                                    ?
                                        <span></span>
                                    :
                                    <ul>
                                        {experience.map(job => (
                                            <li key={job.id}>
                                                <div className='output-experience-content-item'>
                                                    <div className='output-experience-content-stats'>
                                                        <div className='output-experience-name-location-container'>
                                                            <div className='experience-name-description'>
                                                                <strong>{job.name}</strong>
                                                                {job.name && job.companyDescription ? ", " : <span></span>}
                                                                <em>{job.companyDescription}</em>
                                                            </div>
                                                            <div className='experience-location'><strong>{job.location}</strong></div>
                                                        </div>
                                                        <div className='output-experience-position-dates-container'>
                                                            <div className='experience-position'><em>{job.position}</em></div>
                                                            <div className='experience-dates'>
                                                                <em>{job.startDate}</em>
                                                                {job.startDate && job.endDate ? " - " : <span></span>} 
                                                                <em>{job.endDate}</em></div>
                                                        </div>
                                                    </div>
                                                    {job.jobDescription.length === 0
                                                                                    ?
                                                                                        <span></span>
                                                                                    :
                                                                                        <ul className='output-job-description-list'>
                                                                                            {job.jobDescription.map(bullet => (
                                                                                                <li key={bullet.id}>
                                                                                                    {bullet.content}
                                                                                                </li>
                                                                                            ))}
                                                                                        </ul>
                                                    }
                                                </div>
                                            </li>
                                        ))}
                                    </ul>

            }
        </div>
    )
}