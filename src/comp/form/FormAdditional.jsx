export default function FormAdditional(props) {
    const { 
        additionals,
        handleChangeAdditional,
        onAddAdditionalBullet,
        onDeleteAdditionalBullet
    } = props;

    return (
        <div className='form-section' id='form-additional'>
            <h2>Additional</h2>
            {additionals.length === 0 
                                    ? 
                                        'No additionals added'
                                    :
                                        <ul>
                                            {additionals.map(additional => (
                                                <li key={additional.id}>
                                                    <AdditionalItem 
                                                        id={additional.id}
                                                        handleChangeAdditional={handleChangeAdditional}
                                                        onDeleteAdditionalBullet={onDeleteAdditionalBullet}
                                                    />
                                                </li>
                                            ))}
                                        </ul>
            }
            <button className='add-btn' onClick={onAddAdditionalBullet}>Add Additional</button>
        </div>
    )
}

const AdditionalItem = (props) => {
    const {
        id,
        handleChangeAdditional,
        onDeleteAdditionalBullet
    } = props;
    
    return (
        <div className='additional-item' id={id}>
            <div className='additional-inputs-child-container'>
                <label htmlFor='additional-title'>Title</label>
                <input type='text' id='additional-title' onChange={handleChangeAdditional}/>
            </div>
            <div className='additional-inputs-child-container' id='additional-inputs-child-container-content'>
                <label htmlFor='additional-content'>Content</label>
                <input type='text' id='additional-content' onChange={handleChangeAdditional}/>
            </div>
            <button className='delete-btn additional' id={id} onClick={onDeleteAdditionalBullet}>Delete</button>
        </div>
    )
}