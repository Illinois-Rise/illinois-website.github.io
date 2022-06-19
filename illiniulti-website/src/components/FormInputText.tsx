import { TextField } from "@mui/material";
import { Control, Controller, FieldValues } from "react-hook-form";
import React from "react";


interface FormInputTextProps {
    name: string
    control: Control<FieldValues, any>
    label: string
    rules: {required: string} | {required: boolean}
    multiline?: boolean
}
export const FormInputText = ({ name, control, label, rules, multiline=false }: FormInputTextProps) => {
  return (
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field: { onChange, value} }) => (
            <TextField required 
              size="small" 
              onChange={onChange} 
              value={value}  
              label={label} 
              multiline={multiline}/>
        ) //need to format the popup so that it anchors on the textfield
      }
        rules={rules}
      />
  )
};