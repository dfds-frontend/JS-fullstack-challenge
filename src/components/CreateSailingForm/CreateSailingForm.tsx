import * as React from "react";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import { PortSelect } from "./PortSelect";
import Button from "@mui/material/Button";
import { LabelledContainer } from "../LabelledContainer";
import { useSailingTimeContext } from "../../contexts/SailingTimeContext";
import { SailingTime } from "../../types";
import { v4 as uuid } from "uuid";
import { DateSelect } from "./DateSelect";

export function CreateSailingForm() {
  const { setSailingTimes } = useSailingTimeContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { vesselName, portOfLoading, portOfDischarge, arrivesAt, departsAt } =
      e.target as HTMLFormElement;

    const newSailingTime: SailingTime = {
      id: uuid(),
      name: vesselName.value,
      departsAt: new Date(departsAt.value),
      arrivesAt: new Date(arrivesAt.value),
      portOfLoading: portOfLoading.value,
      portOfDischarge: portOfDischarge.value,
    };

    setSailingTimes((currentSailingTimes) => [
      newSailingTime,
      ...currentSailingTimes,
    ]);
  };

  return (
    <LabelledContainer label="Create sailing">
      <Box component="form" onSubmit={handleSubmit}>
        <Box sx={{ paddingTop: 1, paddingBottom: 1 }}>
          <TextField label="Vessel name" name="vesselName" />
        </Box>
        <PortSelect name="portOfLoading" label="From" />
        <PortSelect name="portOfDischarge" label="To" />
        <DateSelect label="Departs" name="departsAt" />
        <DateSelect label="Arrives" name="arrivesAt" />
        <Button type="submit" variant="contained">
          Create
        </Button>
      </Box>
    </LabelledContainer>
  );
}
