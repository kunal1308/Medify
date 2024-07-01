import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import styles from "./DropDown.module.css";

const Dropdown = ({ label, options, value, onChange, onFocus }) => {
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 200,
        width: 150,
      },
    },
  };
  return (
    <FormControl className={styles.dropdown} onFocus={onFocus}>
      <InputLabel style={{ fontSize: "small" }}>{label}</InputLabel>
      <Select
        value={value}
        MenuProps={MenuProps}
        onChange={onChange}
        className={styles.select}
      >
        {options.map((option, index) => (
          <MenuItem
            className={styles.menuItem}
            key={option.id || index}
            value={option.id || option}
          >
            {option.name || option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
