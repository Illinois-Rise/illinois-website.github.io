
import { Tabs, Tab } from "@mui/material";
import { useState } from "react";
import { To, useNavigate } from "react-router-dom";
import { ROSTER_DATA } from "../data/roster/roster.data";
function RosterNav() {
    const reverseYears = ROSTER_DATA.slice(0).reverse()
    const navigate = useNavigate()

    const [tabValue, setTabValue] = useState(reverseYears.length - 1)
    const onYearClick = (year: number) => {
        setTabValue(reverseYears.findIndex(element => element.year === year))
        navigate(year.toString())
    }
    //since the ROSTER_DATA goes from recent to old, have to reverse for map to order in ascending order
    //creates a shallow copy using slice()
   
    return(
        <Tabs value={tabValue}
        variant="scrollable">
            {reverseYears.map((row, index) => (
                <Tab 
                label={row.year} 
                value={index}
                onClick={() => (onYearClick(row.year))}/>
            ))}
        </Tabs>
    )
}

export default RosterNav;