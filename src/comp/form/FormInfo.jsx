export default function FormInfo(props) {
    const { handleChangeInfo } = props;
    return (
        <div className='form-section' id='form-info'>
            <h2>Personal Information</h2>
            <form>
                <div className='info-field'>
                    <label htmlFor='name'>Full Name</label>
                    <input type='text' id='name' onChange={handleChangeInfo}/>
                </div>
                <div className='info-field'>
                    <label htmlFor='address'>Address</label>
                    <input type='text' id='address' onChange={handleChangeInfo}/>
                </div>
                <div className='info-field'>
                    <label htmlFor='phone'>Phone Number</label>
                    <input type='tel' id='phone' onChange={handleChangeInfo}/>
                </div>
                <div className='info-field'>
                    <label htmlFor='email'>Email Address</label>
                    <input type='email' id='email' onChange={handleChangeInfo}/>
                </div>
            </form>
        </div>
    )
}