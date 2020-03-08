import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import DoneIcon from "@material-ui/icons/Done";
import MenuIcon from "@material-ui/icons/Menu";
import Select from "react-select";
import { Link } from "react-router-dom";

const schoolOptions = [
  { value: "weinberg", label: "Weinberg College of Arts and Sciences" },
  { value: "soc", label: "School of Communication" },
  { value: "sesp", label: "School of Education & Social Policy" },
  { value: "mccormick", label: "McCormick School of Engineering" },
  { value: "medill", label: "Medill School of Journalism" },
  { value: "bienen", label: "Bienen School of Music" }
];

const WinebergMajors = [
  { value: "economics", label: "Economics" },
  { value: "history", label: "History" },
  { value: "biology", label: "Biology" },
  { value: "maths", label: "Maths" }
];

 const McCormickMajors = [
  { value: "computer_science", label: "Computer Science" },
  { value: "mechancial", label: "Mechancial" },
  { value: "industrial", label: "Industrial" },
  { value: "chemical", label: "Chemical" }
];

 const groupedMajorOptions = [
  {
    label: "Wineberg",
    options: WinebergMajors
  },
  {
    label: "Mccormick",
    options: McCormickMajors
  }
];

const primaryTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#4a148c"
    },
    secondary: {
      main: "#1b5e20"
    }
  },
  status: {
    danger: "orange"
  },
  Error: {
    main: "#f44336"
  }
});
class TopBar extends React.Component {
  render() {
    const classes = makeStyles(theme => ({
      topbar: {
        flexGrow: 0
      },
      menuButton: {
        marginRight: theme.spacing(2)
      },
      title: {
        flexGrow: 0
      },
      appBar: {
        color: "primary"
      }
    }));

    return (
      <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
        <IconButton
        style={{width:50,height:"100%"}}
        edge = "end"
                color="inherit"
                component={Link} 
                to="/"
              >
                <ArrowBackIosIcon />
              </IconButton>
        <Typography variant="h6" className={classes.title}>
            Customisation
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
      // <ThemeProvider theme={primaryTheme}>
      //   <div className={classes.topbar}>
      //     <AppBar position="static" elevation={1} className={classes.appBar}>
      //       <Toolbar>
      //         <IconButton
      //           edge="start"
      //           className={classes.menuButton}
      //           color="inherit"
      //           aria-label="menu"
      //         >
      //           <ArrowBackIosIcon />
      //         </IconButton>
      //         <Typography variant="h6" className={classes.title}>
      //           Registrations
      //         </Typography>
      //       </Toolbar>
      //     </AppBar>
      //   </div>
      // </ThemeProvider>
    );
  }
}

const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};
const groupBadgeStyles = {
  backgroundColor: "#EBECF0",
  borderRadius: "2em",
  color: "#172B4D",
  display: "inline-block",
  fontSize: 12,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  padding: "0.16666666666667em 0.5em",
  textAlign: "center"
};

const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);
const graduationYears = [
  { value: "2020", label: "2020" },
  { value: "2021", label: "2021" },
  { value: "2022", label: "2022" },
  { value: "2023", label: "2023" },
  { value: "2024", label: "2024" }
];

const CustomisationInfo = () => {
  return (
    <div>
      <TopBar />
      <Paper
        elevation={1}
        style={{
          marginLeft: "2%",
          marginRight: "2%",
          marginTop: "2%",
          marginBottom: "2%",
          paddingLeft: "3%",
          paddingRight: "3%",
          paddingTop: "3%",
          paddingBottom: "3%"
        }}
      >
        <Typography variant="h6">Graduation Year</Typography>
        <Select options={graduationYears} />
      </Paper>
      <Paper
        elevation={1}
        style={{
          marginLeft: "2%",
          marginRight: "2%",
          marginTop: "2%",
          marginBottom: "2%",
          paddingLeft: "3%",
          paddingRight: "3%",
          paddingTop: "3%",
          paddingBottom: "3%"
        }}
      >
        <Typography variant="h6">Your School</Typography>
        <Select options={schoolOptions} />
      </Paper>
      <Paper
        elevation={1}
        style={{
          marginLeft: "2%",
          marginRight: "2%",
          marginTop: "2%",
          marginBottom: "2%",
          paddingLeft: "3%",
          paddingRight: "3%",
          paddingTop: "3%",
          paddingBottom: "3%"
        }}
      >
        <Typography variant="h6">Your Major(s)</Typography>
        <Select
          isMulti
          options={groupedMajorOptions}
          formatGroupLabel={formatGroupLabel}
        />
      </Paper>
      <Fab
        color="primary"
        aria-label="Done"
        style={{ position: "fixed", bottom: 10 }}
        component={Link}
        to="/"
      >
        <DoneIcon />
      </Fab>
    </div>
  );
};
export default CustomisationInfo;