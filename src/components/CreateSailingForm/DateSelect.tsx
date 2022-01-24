import TextField from "@mui/material/TextField";
import DateTimePicker from "@mui/lab/DateTimePicker";
import React from "react";
import { Box } from "@mui/system";

type Props = {
  label: string;
  name: string;
};

export function DateSelect({ label, name }: Props) {
  const [value, setValue] = React.useState<null | undefined>();

  return (
    <Box sx={{ paddingTop: 1, paddingBottom: 1 }}>
      <DateTimePicker
        value={value}
        onChange={(newValue) => setValue(newValue)}
        label={label}
        renderInput={(params) => <TextField {...params} name={name} />}
      />
    </Box>
  );
}
