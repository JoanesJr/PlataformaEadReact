import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CourseImg from "../CourseImg";


const BodyUserPerfil = () => {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          backgroundColor="#000000ec"
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="flex-start"
          padding={5}
          overflow='hidden'
        >
          <Grid
            item
            xs={12}
            md={12}
            display="flex"
            justifyContent="space-around"
            flexDirection="column"
            alignItems="flex-start"
          >
            <Box>
              <h1
                style={{
                  color: "white",
                }}
              >
                Exclusivos
              </h1>
              <Box
                width="100vw"
                flex={1}
                // backgroundColor="gray"
                display="flex"
                justifyContent="center"
              >
                <CourseImg src="https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/5eee7ee977fc.png" />
                <CourseImg src="https://www.talentlms.com/blog/wp-content/uploads/2017/11/TLMS_20211122_1200x628.png" />
                <CourseImg src="https://www.talentlms.com/blog/wp-content/uploads/2017/11/TLMS_20211122_1200x628.png" />
                <CourseImg src="https://www.talentlms.com/blog/wp-content/uploads/2017/11/TLMS_20211122_1200x628.png" />
                <CourseImg src="https://www.talentlms.com/blog/wp-content/uploads/2017/11/TLMS_20211122_1200x628.png" />
                <CourseImg src="https://www.talentlms.com/blog/wp-content/uploads/2017/11/TLMS_20211122_1200x628.png" />
                <CourseImg src="https://www.talentlms.com/blog/wp-content/uploads/2017/11/TLMS_20211122_1200x628.png" />
                <CourseImg src="https://www.talentlms.com/blog/wp-content/uploads/2017/11/TLMS_20211122_1200x628.png" />
                <CourseImg src="https://www.talentlms.com/blog/wp-content/uploads/2017/11/TLMS_20211122_1200x628.png" />
              </Box>
            </Box>
            <Box>
              <h1
                style={{
                  color: "white",
                }}
              >
                Auxiliares
              </h1>
              <Box
                width="100vw"
                flex={1}
                // backgroundColor="gray"
                display="flex"
                justifyContent="center"
              >
                <CourseImg src="https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/5eee7ee977fc.png" />
                <CourseImg src="https://www.talentlms.com/blog/wp-content/uploads/2017/11/TLMS_20211122_1200x628.png" />
                <CourseImg src="https://www.talentlms.com/blog/wp-content/uploads/2017/11/TLMS_20211122_1200x628.png" />
                <CourseImg src="https://www.talentlms.com/blog/wp-content/uploads/2017/11/TLMS_20211122_1200x628.png" />
                <CourseImg src="https://www.talentlms.com/blog/wp-content/uploads/2017/11/TLMS_20211122_1200x628.png" />
                <CourseImg src="https://www.talentlms.com/blog/wp-content/uploads/2017/11/TLMS_20211122_1200x628.png" />
                <CourseImg src="https://www.talentlms.com/blog/wp-content/uploads/2017/11/TLMS_20211122_1200x628.png" />
                <CourseImg src="https://www.talentlms.com/blog/wp-content/uploads/2017/11/TLMS_20211122_1200x628.png" />
                <CourseImg src="https://www.talentlms.com/blog/wp-content/uploads/2017/11/TLMS_20211122_1200x628.png" />
                <CourseImg src="https://www.talentlms.com/blog/wp-content/uploads/2017/11/TLMS_20211122_1200x628.png" />
                <CourseImg src="https://www.talentlms.com/blog/wp-content/uploads/2017/11/TLMS_20211122_1200x628.png" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
}


export default BodyUserPerfil;