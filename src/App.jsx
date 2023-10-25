import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './comp/Form.jsx';
import Output from './comp/Output.jsx'
import html2pdf from 'html2pdf.js'

export default function App() {  
  const [info, setInfo] = useState({ name: '', address: '', phone: '', email: '' });
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [additionals, setAdditionals] = useState([]);

  const handleChangeInfo = (e) => {
    const id = e.target.id;
    const input = e.target.value;

    if (id === 'name') {
      const newInfo = { ...info, name: input };
      setInfo(newInfo);
    }

    if (id === 'address') {
      const newInfo = { ...info, address: input };
      setInfo(newInfo);
    }

    if (id === 'phone') {
      const newInfo = { ...info, phone: input };
      setInfo(newInfo);
    }

    if (id === 'email') {
      const newInfo = { ...info, email: input };
      setInfo(newInfo);
    }
  }

  const onAddExperience = (e) => {
    e.preventDefault();
    
    const nextExperience = {
      name: '',
      companyDescription: '',
      location: '',
      position: '',
      startDate: '',
      endDate: '',
      jobDescription: [],
      id: uuidv4(),
      isCollapsed: false,
    }

    const newExperience = experience.concat(nextExperience);
    setExperience(newExperience);
  }

  const onDeleteExperience = (e) => {
    e.preventDefault();
    const id = e.target.id;
    const newExperience = experience.filter(job => job.id !== id) 
    setExperience(newExperience);
  }

  const handleChangeExperience = (e) => {
    const id = e.target.id;
    const input = e.target.value;
    const key = e.target.parentNode.id;
    const selected = experience.filter(job => job.id === key)[0];

    let newSelected;
    if (id === 'company-name') { newSelected = {...selected, name: input} }
    if (id === 'company-description') { newSelected = {...selected, companyDescription: input} }
    if (id === 'company-location') { newSelected = {...selected, location: input} }
    if (id === 'position-title') { newSelected = {...selected, position: input} }
    if (id === 'start-date') { newSelected = {...selected, startDate: input} }
    if (id === 'end-date') { newSelected = {...selected, endDate: input} }

    const newExperience = experience.map(job => {
      if (job.id === key) { return newSelected }
      else return job;
    })

    setExperience(newExperience);
  }

  const onAddJobDescription = (e) => {
    e.preventDefault();
    const key = e.target.parentNode.id;
    const selectedJob = experience.filter(job => job.id === key)[0];
    const selectedJobDescription = selectedJob.jobDescription;

    const nextJobBullet = { content: '', id: uuidv4() };
    const newJobDescription = selectedJobDescription.concat(nextJobBullet);
    const newSelectedJob = { ...selectedJob, jobDescription: newJobDescription };
    const newExperience = experience.map(job => {
      if (job.id === key) { return newSelectedJob }
      else return job;
    })

    setExperience(newExperience);
  }

  const onDeleteJobDescription = (e) => {
    e.preventDefault();
    const experienceKey = e.target.parentNode.parentNode.parentNode.parentNode.id
    const bulletKey = e.target.id;
    const selectedExperience = experience.filter(job => job.id === experienceKey)[0];
    
    const newJobDescription = selectedExperience.jobDescription.filter(bullet => bullet.id !== bulletKey);
    const newSelectedExperience = { ...selectedExperience, jobDescription: newJobDescription };
    const newExperience = experience.map(job => {
      if (job.id === experienceKey) { return newSelectedExperience }
      else return job
    })

    setExperience(newExperience)
  }

  const handleChangeJobDescription = (e) => {
    const input = e.target.value;
    const experienceKey = e.target.parentNode.parentNode.parentNode.parentNode.id;
    const bulletKey = e.target.parentNode.id;
    const selectedExperience = experience.filter(job => job.id === experienceKey)[0];
    const selectedBullet = selectedExperience.jobDescription.filter(bullet => bullet.id === bulletKey)[0];

    const newBullet = { ...selectedBullet, content: input };
    const newJobDescription = selectedExperience.jobDescription.map(bullet => {
      if (bullet.id === bulletKey) { return newBullet }
      else return bullet;
    })
    const newSelectedExperience = { ...selectedExperience, jobDescription: newJobDescription };
    const newExperience = experience.map(job => {
      if (job.id === experienceKey) { return newSelectedExperience }
      else return job;
    })

    setExperience(newExperience);
  }

  const toggleCollapseExperience = (e) => {
    e.preventDefault();
    const id = e.target.id;
    const selectedExperience = experience.filter(job => job.id === id)[0];
    const newStatus = !selectedExperience.isCollapsed;
    const newSelectedExperience = { ...selectedExperience, isCollapsed: newStatus };
    const newExperience = experience.map(job => {
      if (job.id === id) { return newSelectedExperience }
      else return job;
    })

    setExperience(newExperience)
  }

  const onAddEducation = (e) => {
    e.preventDefault();
    const nextEducation = {
      name: '',
      location: '',
      degree: '',
      gradYear: '',
      subSections: [],
      id: uuidv4(),
      isCollapsed: false
    }

    const newEducation = education.concat(nextEducation);
    setEducation(newEducation);
  }

  const onDeleteEducation = (e) => {
    e.preventDefault();
    const id = e.target.id;
    const newEducation = education.filter(school => school.id !== id) 
    setEducation(newEducation);
  }

  const handleChangeEducation = (e) => {
    const id = e.target.id;
    const input = e.target.value;
    const key = e.target.parentNode.id;
    const selected = education.filter(school => school.id === key)[0];

    let newSelected;
    if (id === 'school-name') { newSelected = {...selected, name: input} }
    if (id === 'school-location') { newSelected = {...selected, location: input} }
    if (id === 'degree-major') { newSelected = {...selected, degree: input} }
    if (id === 'graduation-year') { newSelected = {...selected, gradYear: input} }

    const newEducation = education.map(school => {
      if (school.id === key) { return newSelected }
      else return school;
    })

    setEducation(newEducation);
  }

  const onAddEducationSubSection = (e) => {
    e.preventDefault();
    const key = e.target.parentNode.id;
    const selectedEducation = education.filter(school => school.id === key)[0];
    const selectedSubSection = selectedEducation.subSections;

    const nextSubSectionBullet = { title: '', content: '', id: uuidv4() };
    const newSubSection = selectedSubSection.concat(nextSubSectionBullet);
    const newSelectedEducation = { ...selectedEducation, subSections: newSubSection };
    const newEducation = education.map(school => {
      if (school.id === key) { return newSelectedEducation }
      else return school;
    })

    setEducation(newEducation)
  }

  const onDeleteEducationSubSection = (e) => {
    e.preventDefault();
    const educationKey = e.target.parentNode.parentNode.parentNode.parentNode.id
    const bulletKey = e.target.id;
    const selectedEducation = education.filter(school => school.id === educationKey)[0];
    
    const newSubSection = selectedEducation.subSections.filter(bullet => bullet.id !== bulletKey);
    const newSelectedEducation = { ...selectedEducation, subSections: newSubSection };
    const newEducation = education.map(school => {
      if (school.id === educationKey) { return newSelectedEducation }
      else return school
    })

    setEducation(newEducation)
  }

  const handleChangeEducationSubSection = (e) => {
    const id = e.target.id;
    const input = e.target.value;
    const educationKey = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
    const bulletKey = e.target.parentNode.parentNode.id;
    const selectedEducation = education.filter(school => school.id === educationKey)[0];
    const selectedBullet = selectedEducation.subSections.filter(bullet => bullet.id === bulletKey)[0];

    let newSelectedBullet;
    if (id === 'edu-sub-section-title') { newSelectedBullet = {...selectedBullet, title: input} }
    if (id === 'edu-sub-section-content') { newSelectedBullet = {...selectedBullet, content: input} }

    const newSubSections = selectedEducation.subSections.map(bullet => {
      if (bullet.id === bulletKey) { return newSelectedBullet }
      else return bullet;
    })

    const newSelectedEducation = { ...selectedEducation, subSections: newSubSections };
    const newEducation = education.map(school => {
      if (school.id === educationKey) { return newSelectedEducation }
      else return school;
    })

    setEducation(newEducation);
  }

  const toggleCollapseEducation = (e) => {
    e.preventDefault();
    const id = e.target.id;
    const selectedEducation = education.filter(school => school.id === id)[0];
    const newStatus = !selectedEducation.isCollapsed;
    const newSelectedEducation = { ...selectedEducation, isCollapsed: newStatus };
    const newEducation = education.map(school => {
      if (school.id === id) { return newSelectedEducation }
      else return school;
    })

    setEducation(newEducation)
  }

  const onAddAdditionalBullet = (e) => {
    e.preventDefault();
    
    const nextAdditional = {
      title: '',
      content: '',
      id: uuidv4()
    }

    const newAdditionals = additionals.concat(nextAdditional);    
    setAdditionals(newAdditionals);
  }

  const onDeleteAdditionalBullet = (e) => {
    e.preventDefault();
    const id = e.target.id;
    const newAdditionals = additionals.filter(additional => additional.id !== id) 
    setAdditionals(newAdditionals);
  }

  const handleChangeAdditional = (e) => {
    const id = e.target.id;
    const input = e.target.value;
    const key = e.target.parentNode.parentNode.id;
    const selected = additionals.filter(additional => additional.id === key)[0];
    
    let newSelected;
    if (id === 'additional-title') { newSelected = {...selected, title: input} }
    if (id === 'additional-content') { newSelected = {...selected, content: input} }

    const newAdditionals = additionals.map(additional => {
      if (additional.id === key) { return newSelected }
      else return additional;
    });

    setAdditionals(newAdditionals);
  }

  const generatePDF = (e) => {
    e.preventDefault();
    const pdfDiv = document.querySelector('.output-page');
    
    const opt = {
      margin: [0, 0, 0, 0.5],
      filename: 'mycv.pdf',
      image: {
        type: 'png',
        quality: 1,
      },
      jsPDF: {
        unit: 'in',
        format: 'letter',
        orientation: 'p'
      }
    }
    
    html2pdf().set(opt).from(pdfDiv).save();
  }

  return (
    <div className="container">
      <div className='header'>
          CV Builder React App
      </div>
      <div className='content'>
        <Form
          experience={experience}
          education={education}
          additionals={additionals}
          
          onAddExperience={onAddExperience}
          onAddJobDescription={onAddJobDescription}
          onDeleteJobDescription={onDeleteJobDescription}
          onDeleteExperience={onDeleteExperience}
          toggleCollapseExperience={toggleCollapseExperience}
          
          onAddEducation={onAddEducation}
          onAddEducationSubSection={onAddEducationSubSection}
          onDeleteEducationSubSection={onDeleteEducationSubSection}
          onDeleteEducation={onDeleteEducation}
          toggleCollapseEducation={toggleCollapseEducation}

          onAddAdditionalBullet={onAddAdditionalBullet}
          onDeleteAdditionalBullet={onDeleteAdditionalBullet}
          
          handleChangeInfo={handleChangeInfo}
          handleChangeExperience={handleChangeExperience}
          handleChangeJobDescription={handleChangeJobDescription}
          handleChangeEducation={handleChangeEducation}
          handleChangeEducationSubSection={handleChangeEducationSubSection}
          handleChangeAdditional={handleChangeAdditional}

        />
        <Output
          info={info}
          experience={experience}
          education={education}
          additionals={additionals}
          generatePDF={generatePDF}
        />
      </div>
    </div>
  )
}