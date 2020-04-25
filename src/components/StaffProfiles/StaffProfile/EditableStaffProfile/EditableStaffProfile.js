import React from "react";

const EditableStaffProfile = (props) => {
    
    let form = formElementsArray.map(formElement => (
        <>
        <Input key={props.StaffId+1} 
                elementType='input' elementConfig={{ type: 'text', placeholder: props.FirstName}} value={props.FirstName}
                invalid={!formElement.config.valid} shouldValidate={{required: true,isEmail: false}} touched={false}
                changed={(event) => props.inputChangedHandler(event, "FirstName")}/>
        <Input key={props.StaffId+1} 
                elementType='input' elementConfig={{ type: 'text', placeholder: props.LastName}} value={props.LastName}
                invalid={!formElement.config.valid} shouldValidate={{required: true,isEmail: false}} touched={false}
                changed={(event) => props.inputChangedHandler(event, "LastName")}/>
        <Input key={props.StaffId+1} 
                elementType='input' elementConfig={{ type: 'text', placeholder: props.Salary}} value={props.Salary}
                invalid={!formElement.config.valid} shouldValidate={{required: true,isEmail: false}} touched={false}
                changed={(event) => props.inputChangedHandler(event, "Salary")}/>
        <Input key={props.StaffId+1} 
                elementType='input' elementConfig={{ type: 'text', placeholder: props.City}} value={props.City}
                invalid={!formElement.config.valid} shouldValidate={{required: true,isEmail: false}} touched={false}
                changed={(event) => props.inputChangedHandler(event, "City")}/>
        <Input key={props.StaffId+1} 
                elementType='input' elementConfig={{ type: 'text', placeholder: props.State}} value={props.State}
                invalid={!formElement.config.valid} shouldValidate={{required: true,isEmail: false}} touched={false}
                changed={(event) => props.inputChangedHandler(event, "State")}/>
        <Input key={props.StaffId+1} 
                elementType='input' elementConfig={{ type: 'text', placeholder: props.YearsExperience}} value={props.YearsExperience}
                invalid={!formElement.config.valid} shouldValidate={{required: true,isEmail: false}} touched={false}
                changed={(event) => props.inputChangedHandler(event, "YearsExperience")}/>
        <Input key={props.StaffId+1}
                elementType='input' elementConfig={{ type: 'text', placeholder: props.Education}} value={props.Education}
                invalid={!formElement.config.valid} shouldValidate={{required: true,isEmail: false}} touched={false}
                changed={(event) => props.inputChangedHandler(event, "Education")}/>
                </>
    ));

    return (
        <form onSubmit={props.sumbitHandler}>
            {form}}
            <Button btnType='Success'>SUBMIT</Button>
        </form>
    )
    
    };

export default EditableStaffProfile;