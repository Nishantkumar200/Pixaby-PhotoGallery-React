import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  container: {
    marginTop: 60,
    display: "flex",
    alignItems:'center',
    justifyContent:'center'
  },

  imageSize: {
    display:'flex',
    objectFit: "contain",
    width:305,
    borderRadius:10
  },
});
