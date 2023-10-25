export default function OutputAdditional(props) {
    const { additionals } = props;
    return (
        <div className='output-additional'>
            <h2>Additional</h2>
            <ul id='output-additional-list'>
                {additionals.map(additional => (
                    <li key={additional.id} className='output-additional-content-item'>
                            <em>{additional.title}</em>
                            {additional.title ? ": " : <span></span>}
                            {additional.content}
                    </li>
                ))}
            </ul>
        </div>
    )
}