import Box from "./Box";
import Button from "./Button";



function Exam03StyledComponent(props) {
  return(
    <div className="card">
      <div className="card-header">
        Exam03StyledComponent
      </div>
      <div className="card-body">
        <Box>
          BOx
          <Button></Button>
          <Button inverted={true}></Button>
        </Box>
      </div>
    </div>
  );
}
export default Exam03StyledComponent;