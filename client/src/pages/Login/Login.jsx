import { Box , Typography, useMediaQuery } from '@mui/material';
import Form from '../../components/Form/Form';

const LoginPage = () => {

    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

    return (
        <Box

        >
           <Box width="100%" 
              backgroundColor="#1b1a1a"
            p="1rem 6%" textAlign="center">
        <Typography fontFamily="Josefin Sans"  fontWeight="bold" fontSize="32px" color="#ED9A42">
          A La Tarantazza
        </Typography>
      </Box>
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor="#362E2E"
      >
        <Typography fontFamily="Josefin Sans" fontWeight="500" variant="h5" sx={{ mb: "1.5rem" ,
        color: "white", textAlign: "center" }}>
          Welcome to A La Tarantazza
        </Typography> 
        <Form />
      </Box> 
        </Box>
    );
};

export default LoginPage;