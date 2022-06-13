import { TextField } from "@mui/material";
import { Control, Controller, FieldValues } from "react-hook-form";
import React from "react";


interface FormInputTextProps {
    name: string
    control: Control<FieldValues, any>
    label: string
    multiline?: boolean
}
export const FormInputText = ({ name, control, label, multiline=false }: FormInputTextProps) => {
  return (
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value} }) => (
            <TextField required onChange={onChange} value={value} label={label} multiline={multiline}/>
        )}
      />
  )
};