

function Footer(props) {
    function changeFilter(filter) {
        props.changeVisible(filter);
    }
    
    return (
        <div className="footer">
            filter:{' '} 
            <button onClick={() => changeFilter('ALL')}>All</button>
            <button onClick={() => changeFilter('ACTIVE')}>Active</button>
            <button onClick={() => changeFilter('COMPLETED')} >Completed</button>
        </div>
    )
}

export default Footer;