import classes from "./MeetupList.module.css";
function MeetupList(props) {
  return <ul className={classes.list}>
    {props.meetups}
  </ul>;
}

export default MeetupList;
