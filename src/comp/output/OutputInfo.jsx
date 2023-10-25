export default function OutputInfo(props) {
    const { info } = props;
    return (
        <div className="output-header-container">
            <h1 className='output-header'>{info.name}</h1>
            <div className='output-content'>
                {info.address}
                {info.address && info.phone ?
                                                " | "
                                            : 
                                                info.address && info.email
                                            ? 
                                                " | "
                                            :
                                                <span></span>}
                {info.phone}
                {info.phone && info.email ? " | " : <span></span>}
                {info.email}
            </div>
        </div>
    )
}