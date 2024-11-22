import Person from "./Person";


const PersonsList = ({persons, style}) => {
    return (
        <div style={{...containerStyle, ...style}}>
            {persons.map((v, i) => (
                <Person person={v}/>
            ))}
        </div>
    )
}

const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    width: 'calc(100% - 40px)'
}

export default PersonsList;