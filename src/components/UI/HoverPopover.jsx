// import React from 'react';
// import Popover from '@mui/material/Popover';
// import Typography from '@mui/material/Typography';

// const HoverPopover = ({ trigger, content, placement = 'bottom-start' }) => {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handlePopoverOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handlePopoverClose = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);

//   const [vertical, horizontal] = placement.split('-');

//   return (
//     <div>
//       <div
//         onMouseEnter={handlePopoverOpen}
//         onMouseLeave={handlePopoverClose}
//         aria-owns={open ? 'hover-popover' : undefined}
//         aria-haspopup="true"
//       >
//         {trigger}
//       </div>
//       <Popover
//         id="hover-popover"
//         sx={{ pointerEvents: 'none' }}
//         open={open}
//         anchorEl={anchorEl}
//         anchorOrigin={{
//           vertical: vertical || 'bottom',
//           horizontal: horizontal || 'left',
//         }}
//         transformOrigin={{
//           vertical: 'top',
//           horizontal: 'left',
//         }}
//         onClose={handlePopoverClose}
//         disableRestoreFocus
//       >
//         <Typography sx={{ p: 1 }}>
//           {content}
//         </Typography>
//       </Popover>
//     </div>
//   );
// };

// export default HoverPopover;


// import React from 'react';
// import Popover from '@mui/material/Popover';

// const HoverPopover = ({ trigger, children }) => {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handlePopoverOpen = (event) => setAnchorEl(event.currentTarget);
//   const handlePopoverClose = () => setAnchorEl(null);
//   const open = Boolean(anchorEl);

//   return (
//     <div onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
//       <div>{trigger}</div>
//       <Popover
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handlePopoverClose}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
//         transformOrigin={{ vertical: 'top', horizontal: 'left' }}
//         disableRestoreFocus
//         sx={{ pointerEvents: 'none' }}
//         PaperProps={{ sx: { pointerEvents: 'auto', p: 1 } }}
//       >
//         <div>{children}</div>
//       </Popover>
//     </div>
//   );
// };

// export default HoverPopover;


import React from 'react';
import Popover from '@mui/material/Popover';

const HoverPopover = ({ trigger, children }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => setAnchorEl(event.currentTarget);
  const handlePopoverClose = () => setAnchorEl(null);
  const open = Boolean(anchorEl);

  return (
    <div onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
      <div>{trigger}</div>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        disableRestoreFocus
        sx={{ pointerEvents: 'none' }}
        PaperProps={{
          sx: {
            pointerEvents: 'auto',
            backgroundColor: '#000', 
            borderRadius: 1,
            boxShadow: 3,
            px: 1,
            py: 1,
          },
        }}
      >
        <div>{children}</div>
      </Popover>
    </div>
  );
};

export default HoverPopover;
