import { Pagination, Box } from "grommet";

const PaginationComponent = (props) => {
  return (
    <Box justify="center" alignContent="center">
      <Pagination
        background="#476172"
        numberItems={props.noOfPages}
        step={12}
        alignSelf="center"
        size="large"
        onChange={props.handlePagination}
      />
    </Box>
  );
};
export default PaginationComponent;
