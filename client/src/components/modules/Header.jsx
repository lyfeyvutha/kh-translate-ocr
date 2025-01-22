import React, { useState } from "react";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import cambodiaFlagIcon from "../../assets/cambodia.png";
import usaFlagIcon from "../../assets/usa.png";
import "./Header.css";

const Header = () => {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <header className="header">
      <div className="button-group">
        <Button variant="contained" className="button-orange">
          អំពីយើង
        </Button>

        <FormControl>
          <Select
            className="select-dropdown"
            displayEmpty
            value={selectedValue}
            onChange={(event) => setSelectedValue(event.target.value)}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em>ស្វែងរកធាតុ</em>;
              }
              return selected;
            }}
          >
            <MenuItem disabled value="">
              <em>ស្វែងរកធាតុ</em>
            </MenuItem>
            <MenuItem value={"អត្ថបទ"}>អត្ថបទ</MenuItem>
            <MenuItem value={"ឯកសារ"}>ឯកសារ</MenuItem>
            <MenuItem value={"រូបភាព"}>រូបភាព</MenuItem>
            <MenuItem value={"សំឡេង"}>សំឡេង</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="Profile-avatar" />

      <div className="language-buttons">
        <Button
          variant="contained"
          className="button-orange"
          startIcon={<img src={cambodiaFlagIcon} alt="Cambodian Flag" className="flag-icon" />}
        >
          ភាសាខ្មែរ
        </Button>

        <Button
          variant="contained"
          className="button-blue"
          startIcon={<img src={usaFlagIcon} alt="USA Flag" className="flag-icon" />}
        >
          English
        </Button>
      </div>
    </header>
  );
};

export default Header;
