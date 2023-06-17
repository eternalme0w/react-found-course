import React from "react";

const MySelect = ({options, defaultOption}) => {

    return (

        <select>    

            <option disabled value="">{defaultOption}</option>

            {options.map(option =>
                
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
            
        </select>
    ) 
}

export default MySelect;