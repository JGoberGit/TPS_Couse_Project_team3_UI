import React, { Component } from 'react';
import classes from './StaffProfiles.css';
import StaffProfile from './StaffProfile/StaffProfile';
import Axios from 'axios';

class StaffProfiles extends Component {

    state= {
        staffingProfiles: []
    };

    componentDidMount(){
        this.refreshProfileList();
    }

    refreshProfileList = ()=> {
        Axios.get('https://localhost:44340/Api/StaffProfiles/GetProfiles')
        .then(response => {
            this.setState({staffingProfiles: response.data})
            console.log(response.data);
        })
        .catch(err => {
            console.log(err);
        });
    }

    render(){
        
        let staffProfileItems = (
            <>
            {this.state.staffingProfiles.map( profile =>(
                <StaffProfile
                key={profile.StaffId}
                FirstName={profile.FirstName}
                LastName={profile.LastName}
                ProfileImage={profile.ProfileImage}
                Salary={profile.Salary}
                City={profile.City}
                State={profile.State}
                YearsExperience={profile.YearsExperience}
                Education={profile.Education}
                Resume={profile.Resume}                
                />
            ))}
            </>
        );

        return (
            <>
                
                <div className={classes.StaffProfiles}>
                <h2>All Staff Profiles</h2>
                    <ul>
                        {staffProfileItems}
                    </ul>
                </div>
            </>
        );
    }
}

export default StaffProfiles;
/*
<>
            <StaffProfile
            FirstName ='Jon'
            LastName = 'Gober'
            />
            <StaffProfile
            FirstName ='Jon'
            LastName = 'Gober'
            />
            <StaffProfile
            FirstName ='Jon'
            LastName = 'Gober'
            />
            </>*/