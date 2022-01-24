import { useMemo } from "react";
import { useSailingTimeContext } from "../../contexts/SailingTimeContext";
import { LabelledContainer } from "../LabelledContainer";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export function SailingTimeFilter() {
  const { sailingTimes, setSelectedVessel, selectedVessel } =
    useSailingTimeContext();

  const vesselNames = useMemo(
    () => Array.from(new Set(sailingTimes.map((time) => time.name))),
    [sailingTimes]
  );

  return (
    <LabelledContainer label="Filters">
      <Box sx={{ minWidth: 120, marginTop: 2 }}>
        <FormControl fullWidth>
          <InputLabel id="vessel-name-input">Vessel</InputLabel>
          <Select
            labelId="vessel-name-input"
            id="vessel-name-select"
            value={selectedVessel}
            label="vessel"
            onChange={(event) => {
              setSelectedVessel(event.target.value);
            }}
          >
            {vesselNames.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </LabelledContainer>
  );
}
