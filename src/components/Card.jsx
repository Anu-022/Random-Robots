
const Card = ({item}) => {
    const random = Math.floor(Math.random() * 6);
    const imgStyle= {
        height: '150px',
        width:'200px'
    }
     return (
        <div className="card">
            <ul>
                <li><img src={`https://robohash.org/${item.username}?set=set${random}`} style={imgStyle} alt='random robot' /></li>
                <li>{item.name}</li>
                <li>{item.email}</li>
            </ul>

        </div>
     )
};

export default Card;