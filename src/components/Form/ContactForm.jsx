import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box } from '@mui/material';

// ✅ Label + Border styling
const inputStyles = {
  '& .MuiInputLabel-root': {
    color: '#fff', // default label color
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#FFF', // label on focus
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ccc',
    },
    '&:hover fieldset': {
      borderColor: '#1976d2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#1976d2',
    },
  },
};

// ✅ Button style
const buttonStyles = {
  backgroundColor: '#1976d2',
  color: '#fff',
  textTransform: 'none',
  fontWeight: 'bold',
  borderRadius: 0,
  '&:hover': {
    backgroundColor: '#115293',
  },
};

const validationSchema = Yup.object({
  name: Yup.string().required('नाम आवश्यक है'),
  contact: Yup.string().required('संपर्क आवश्यक है'),
  message: Yup.string().required('संदेश आवश्यक है'),
});

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      contact: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        fullWidth
        label="नाम"
        name="name"
        variant="outlined"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        sx={inputStyles}
      />

      <TextField
        fullWidth
        label="संपर्क"
        name="contact"
        variant="outlined"
        value={formik.values.contact}
        onChange={formik.handleChange}
        error={formik.touched.contact && Boolean(formik.errors.contact)}
        helperText={formik.touched.contact && formik.errors.contact}
        sx={inputStyles}
      />

      <TextField
        fullWidth
        multiline
        rows={4}
        label="संदेश"
        name="message"
        variant="outlined"
        value={formik.values.message}
        onChange={formik.handleChange}
        error={formik.touched.message && Boolean(formik.errors.message)}
        helperText={formik.touched.message && formik.errors.message}
        sx={inputStyles}
      />

      <Button type="submit"  sx={buttonStyles}>
        भेजें
      </Button>
    </Box>
  );
};

export default ContactForm;
