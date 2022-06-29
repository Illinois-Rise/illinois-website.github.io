import { Menu, MenuItem } from "@mui/material";
import { To, useNavigate } from "react-router-dom";
interface HistoryYearMenuProps {
  open: boolean;
  anchor: null | HTMLElement;
  onClose: () => void;
  fromDate: number;
  toDate: number;
  dateStrings?: string[]; //override for fromDate - toDate
}
function HistoryYearMenu({
  open,
  anchor,
  onClose,
  fromDate,
  toDate,
  dateStrings,
}: HistoryYearMenuProps) {
  const navigate = useNavigate();

  const years: number[] = [];
  for (let i = fromDate; i <= toDate; i++) {
    years.push(i);
  }

  const handleNavClick = (nav: To) => {
    navigate(nav);
    onClose();
  };

  return (
    <Menu
      open={open}
      anchorEl={anchor}
      onClose={onClose}
      anchorOrigin={{
        horizontal: "center",
        vertical: "bottom",
      }}
      transformOrigin={{
        horizontal: "center",
        vertical: "top",
      }}
    >
      {dateStrings
        ? dateStrings.map((year) => (
            <MenuItem
              key={year}
              onClick={() => handleNavClick(year.slice(0, 4) + "/")}
            >
              {year}
            </MenuItem>
          ))
        : years.map((year) => (
            <MenuItem
              key={year}
              onClick={() => handleNavClick(year.toString() + "/")}
            >
              {year}
            </MenuItem>
          ))}
    </Menu>
  );
}

export default HistoryYearMenu;
