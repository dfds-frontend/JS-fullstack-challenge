import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSailingTimeContext } from "../../contexts/SailingTimeContext";
import { format } from "date-fns";
import { DATETIME_FORMAT } from "../../constants";
import { LabelledContainer } from "../LabelledContainer";

export function SailingTimeTable() {
  const { sailingTimes, selectedVessel } = useSailingTimeContext();

  const filteredSailingTimes = React.useMemo(() => {
    let filteredSailingTimes = sailingTimes;

    if (selectedVessel) {
      filteredSailingTimes = filteredSailingTimes.filter(
        (time) => time.name === selectedVessel
      );
    }

    return filteredSailingTimes;
  }, [sailingTimes, selectedVessel]);

  return (
    <LabelledContainer label="Sailing Times">
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="Sailing time table">
          <TableHead>
            <TableRow>
              <TableCell>Vessel name</TableCell>
              <TableCell>Departs</TableCell>
              <TableCell>Arrives</TableCell>
              <TableCell>From</TableCell>
              <TableCell>To</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredSailingTimes.map((time) => (
              <TableRow key={time.id}>
                <TableCell>{time.name}</TableCell>
                <TableCell>{format(time.departsAt, DATETIME_FORMAT)}</TableCell>
                <TableCell>{format(time.arrivesAt, DATETIME_FORMAT)}</TableCell>
                <TableCell>{time.portOfLoading}</TableCell>
                <TableCell>{time.portOfDischarge}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </LabelledContainer>
  );
}
