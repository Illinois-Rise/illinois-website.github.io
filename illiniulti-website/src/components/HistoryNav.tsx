import { ArrowDropDown } from "@mui/icons-material";
import { Tab, Tabs } from "@mui/material";

import React, { useState } from "react";
import HistoryYearMenu from "./HistoryYearMenu";

import { HISTORY_DATA } from "../data/history/history.data";

function HistoryNav() {
  //use popover along with tabs to create dropdowns
  //This will be responsive to new data up until 2029, then you have to add a new tab
  //If this website is still on React by that time, I'll be really surprised

  const [anchor78_86, setAnchor78_86] = useState<null | HTMLElement>(null);
  const [open78_86, setOpen78_86] = useState(false);
  const [anchor94_99, setAnchor94_99] = useState<null | HTMLElement>(null);
  const [open94_99, setOpen94_99] = useState(false);
  const [anchor00_09, setAnchor00_09] = useState<null | HTMLElement>(null);
  const [open00_09, setOpen00_09] = useState(false);
  const [anchor10_19, setAnchor10_19] = useState<null | HTMLElement>(null);
  const [open10_19, setOpen10_19] = useState(false);
  const [anchor20_29, setAnchor20_29] = useState<null | HTMLElement>(null);
  const [open20_29, setOpen20_29] = useState(false);

  const dropdown78_86Click = (event: React.MouseEvent<HTMLElement>) => {
    setOpen78_86(!open78_86);
    setAnchor78_86(event.currentTarget);
  };
  const dropdown94_99Click = (event: React.MouseEvent<HTMLElement>) => {
    setOpen94_99(!open94_99);
    setAnchor94_99(event.currentTarget);
  };
  const dropdown00_09Click = (event: React.MouseEvent<HTMLElement>) => {
    setOpen00_09(!open00_09);
    setAnchor00_09(event.currentTarget);
  };
  const dropdown10_19Click = (event: React.MouseEvent<HTMLElement>) => {
    setOpen10_19(!open10_19);
    setAnchor10_19(event.currentTarget);
  };
  const dropdown20_29Click = (event: React.MouseEvent<HTMLElement>) => {
    setOpen20_29(!open20_29);
    setAnchor20_29(event.currentTarget);
  };

  const handleClose = () => {
    //set all the anchors and opens to false
    setOpen78_86(false);
    setAnchor78_86(null);
    setOpen94_99(false);
    setAnchor94_99(null);
    setOpen00_09(false);
    setAnchor00_09(null);
    setOpen10_19(false);
    setAnchor10_19(null);
    setOpen20_29(false);
    setAnchor20_29(null);
  };

  const createRecentDateRange = (startDate: number): string[] => {
    let dateRange: string[] = [];
    let year: number = startDate;
    while (HISTORY_DATA.find((data) => data.year >= year)) {
      dateRange.push(year.toString());
      year++;
    }
    return dateRange;
  };

  return (
    <>
      {/*Tabs value is a filler value, doesn't do anything*/}
      <Tabs
        centered={true}
        value={4}
        TabIndicatorProps={{
          style: {
            display: "none",
          },
        }}
      >
        <Tab
          label="1978-1986"
          icon={<ArrowDropDown fontSize="small" />}
          iconPosition="bottom"
          onClick={dropdown78_86Click}
          value={0}
        />
        <Tab
          label="1994-1999"
          icon={<ArrowDropDown fontSize="small" />}
          iconPosition="bottom"
          onClick={dropdown94_99Click}
          value={1}
        />
        <Tab
          label="2000-2009"
          icon={<ArrowDropDown fontSize="small" />}
          iconPosition="bottom"
          onClick={dropdown00_09Click}
          value={2}
        />
        <Tab
          label="2010-2019"
          icon={<ArrowDropDown fontSize="small" />}
          iconPosition="bottom"
          onClick={dropdown10_19Click}
          value={3}
        />
        <Tab
          label="2020-"
          icon={<ArrowDropDown fontSize="small" />}
          iconPosition="bottom"
          onClick={dropdown20_29Click}
          value={4}
        />
      </Tabs>
      <HistoryYearMenu
        open={open78_86}
        anchor={anchor78_86}
        onClose={handleClose}
        fromDate={1978}
        toDate={1986}
        dateStrings={["1978-1982", "1983-1984", "1985", "1986"]}
      />
      <HistoryYearMenu
        open={open94_99}
        anchor={anchor94_99}
        onClose={handleClose}
        fromDate={1994}
        toDate={1999}
      />
      <HistoryYearMenu
        open={open00_09}
        anchor={anchor00_09}
        onClose={handleClose}
        fromDate={2000}
        toDate={2009}
      />
      <HistoryYearMenu
        open={open10_19}
        anchor={anchor10_19}
        onClose={handleClose}
        fromDate={2010}
        toDate={2019}
      />
      <HistoryYearMenu
        open={open20_29}
        anchor={anchor20_29}
        onClose={handleClose}
        fromDate={2020}
        toDate={2029}
        dateStrings={createRecentDateRange(2020)}
      />
    </>
  );
}
export default HistoryNav;
