import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { PORT_NAMES } from "../../constants";
import { Box } from "@mui/system";

type Props = {
  name: string;
  label: string;
};

export function PortSelect({ name, label }: Props) {
  return (
    <Box sx={{ paddingTop: 1, paddingBottom: 1 }}>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select name={name} label={label}>
          {PORT_NAMES.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
