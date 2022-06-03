import React from "react";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./courses.css";

const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: "85%",
   height: "90vh",
   overflowY: "scroll",
   bgcolor: "background.paper",
   boxShadow: 24,
   border: "none",
   borderRadius: "0px 10px 10px 0px",
   p: 4,
};

const CourseCard = (props) => {
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   const {
      imgUrl,
      title,
      lesson,
      students,
      rating,
      duration,
      price,
      subjects,
   } = props.item;

   return (
      <div className="single__course__item" key={title}>
         <div className="course__img">
            <img src={imgUrl} alt="" className="w-100" />
         </div>

         <div className="course__details">
            <h6 className="course__title mb-4">{title}</h6>

            <div className=" d-flex justify-content-between align-items-center">
               <p className="lesson d-flex align-items-center gap-1">
                  <i className="ri-book-open-line"></i> {lesson} Lessons
               </p>

               <p className="students d-flex align-items-center gap-1">
                  <i className="ri-user-line"></i> {students}
               </p>
            </div>

            <div className=" d-flex justify-content-between align-items-center">
               <p className="rating d-flex align-items-center gap-1">
                  <i className="ri-star-fill"></i> {rating}
               </p>

               <div>
                  <Button variant="outlined" onClick={handleOpen}>
                     More info
                  </Button>
                  <Modal
                     aria-labelledby="transition-modal-title"
                     aria-describedby="transition-modal-description"
                     open={open}
                     onClose={handleClose}
                     closeAfterTransition
                     BackdropComponent={Backdrop}
                     classes={"modal"}
                     BackdropProps={{
                        timeout: 500,
                     }}
                  >
                     <Fade className="modal_scroll" in={open}>
                        <Box sx={style} classes={"modal"}>
                           <Typography
                              className="modal__title"
                              id="transition-modal-title"
                              variant="h6"
                              component="h2"
                           >
                              {title}
                           </Typography>
                           <Typography
                              id="transition-modal-description"
                              sx={{ mt: 2 }}
                           >
                              <ul>
                                 <li>Lessons: {lesson}</li>
                                 <li>
                                    Max students in group:{" "}
                                    {Math.floor(students / 3)}
                                 </li>
                                 <li>Price: {price} sum</li>
                                 <li>Lessons per week: 4 days</li>
                                 <li>Duration: {duration} months</li>
                                 <li>Hours per day: 2.5 hours</li>
                                 <li>
                                    Technologies:
                                    <ol>
                                       {subjects.map((val, key) => {
                                          return (
                                             <li key={key}>
                                                <h6>{val}</h6>
                                             </li>
                                          );
                                       })}
                                    </ol>
                                 </li>
                              </ul>
                           </Typography>
                        </Box>
                     </Fade>
                  </Modal>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CourseCard;
