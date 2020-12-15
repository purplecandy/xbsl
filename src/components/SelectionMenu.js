import React, { useState } from "react";
import {
  Paper,
  Grid,
  Button,
  makeStyles,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
  Divider
} from "@material-ui/core";

import { Send } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  formControl: {
    padding: theme.spacing(1),
    width: "100%"
  },
  selectionContainer: {
    padding: theme.spacing(1)
  },
  selectionFooter: {
    margin: theme.spacing(1),
    display: "flex"
  }
}));

function SelectionItem() {
  const [queryType, setQueryType] = useState("Select query type");
  const classes = useStyles();
  const handleChange = (event) => {
    setQueryType(event.target.value);
  };
  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel>Select</InputLabel>
        <Select
          value={queryType}
          onChange={handleChange}
          label="Select"
          defaultValue="Query type"
        >
          <MenuItem aria-label="None" value="" />
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Please select your query type</FormHelperText>
      </FormControl>
    </div>
  );
}

export default function SelectionMenu() {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.selectionContainer}>
        <Grid container spacing={2} justify="space-evenly">
          <Grid item sm={3}>
            <SelectionItem />
          </Grid>
          <Grid item sm={3}>
            <SelectionItem />
          </Grid>
          <Grid item sm={3}>
            <SelectionItem />
          </Grid>
          <Grid item sm={3}>
            <SelectionItem />
          </Grid>
        </Grid>
        <Divider />
        <div className={classes.selectionFooter}>
          <div style={{ flexGrow: 1 }}></div>
          <Button>Cancel</Button>
          <Button disabled startIcon={<Send />}>
            Apply
          </Button>
        </div>
      </Paper>
    </div>
  );
}
