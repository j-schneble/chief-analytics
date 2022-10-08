import React from 'react';
import { Box, Alert, AlertIcon, AlertDescription } from '@chakra-ui/react';

const ErrorMessage = () => {
    return (
        <Box my={4}>
        <Alert status="error" borderRadius={4}>
          <AlertIcon />
          <AlertDescription>ErrorMessage</AlertDescription>
        </Alert>
      </Box>
    )
}

export default ErrorMessage;