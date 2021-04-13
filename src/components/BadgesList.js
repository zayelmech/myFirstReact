import React from 'react';
import './styles/BadgesList.css';
import { Link} from "react-router-dom";
import Gravatar from '../components/Gravatar';

function useSearchBadges(badges) {
    
    const [query,setQuery] = React.useState('');

    const [filteredBadges,setFilteredResults]=React.useState(badges);
    React.useMemo(
        ()=>{
        const result= badges.filter(badge=>{
            return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query);
        });
        setFilteredResults(result)
    },[badges,query]);
return {query,setQuery,filteredBadges}
}
function BadgesList(props) {
    const badges= props.badges;
    const {query,setQuery, filteredBadges}=useSearchBadges(badges);
    //const [query,setQuery] = React.useState('');
    
    /*const filteredBadges = badges.filter(badge=>{
        return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query);
    });*/
   
    if (filteredBadges.length === 0) {
        return(
            <React.Fragment>
                <div className="form-group">
                <label >Filter badges</label>
                <input type="text" className="form-control"
                    value ={query}
                    onChange={(e)=>{
                        setQuery(e.target.value)
                        console.log(e.target.value)
                    }}
                />
                </div>
                <div>
                    <h3>No encontramos ningún badge</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Crear nuevo badge
                    </Link>
                </div>
            </React.Fragment>
        )
    }
    return (
        <div className="BadgesList">
            <div className="form-group">
                <label >Filter badges</label>
                <input type="text" className="form-control"
                    value ={query}
                    onChange={(e)=>{
                        setQuery(e.target.value)
                        console.log(e.target.value)
                    }}
                />
            </div>
        <ul className="list-unstyled">
            {filteredBadges.map((badge)=>{
                return (
                    <li key={badge.id}>
                        <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                            <div className="badge">
                                <div className="badge_header">
                                    <Gravatar 
                                    className="badge_avatar"
                                    email={badge.email}
                                    alt="Avatar"
                                    />
                                    <div className="badge_section-info">
                                        <div className="badge_section-name">
                                            <h1 className="">{badge.firstName} {badge.lastName} </h1>                                          
                                        </div>
                                        <a href={`https://twitter.com/${badge.twitter}`}><span></span>@{badge.twitter} </a>
                                            <h3>{badge.jobTitle}</h3>    
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>
            
                    )
                })}
            </ul>
            </div>
    );

}

export default BadgesList
