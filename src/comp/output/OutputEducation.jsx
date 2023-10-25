export default function OutputEducation(props) {
    const { education } = props;
    return (
        <div className='output-education'>
            <h2>Education</h2>
            {education.length === 0
                                ?
                                    <span></span>
                                :
                                <ul>
                                    {education.map(school => (
                                        <li key={school.id}>
                                          <div className='output-education-content-item'>
                                            <div className='output-education-content-stats'>
                                              <div className='output-education-name-location-container'>
                                                <div id='education-name'><strong>{school.name}</strong></div>
                                                <div id='education-location'><strong>{school.location}</strong></div>
                                              </div>
                                              <div className='output-education-degree-date-container'>
                                                <div id='education-degree'><em>{school.degree}</em></div>
                                                <div id='education-grad-year'><em>{school.gradYear}</em></div>
                                              </div>
                                            </div>

                                            {school.subSections.length === 0
                                                                            ?
                                                                              <span></span>
                                                                            :
                                                                              <ul className='output-education-subsection-list'>
                                                                                {school.subSections.map(bullet => (
                                                                                  <li key={bullet.id}>
                                                                                    <u>{bullet.title}</u>
                                                                                    {bullet.title ? ': ' : <span></span>}
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