import AppButton from "@/components/commons/appbutton/AppButton";
import { Box, Typography } from "@mui/material";
import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found | Joey Med</title>
        <meta name="description" content="The page you are looking for does not exist. Return to Joey Med for Telehealth services." />
        <meta property="og:title" content="Page Not Found - Joey Med" />
        <meta property="og:description" content="The page you are looking for does not exist. Head back to the Joey Med homepage." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        textAlign="center"
        sx={{
          padding: 4,
          backgroundColor: "var(--primary-background)",
        }}
      >
        <Box>
          <Typography variant="h1" component="h1">
            404
          </Typography>
          <Typography variant="h5" component="h5" sx={{ marginBottom: 2 }}>
            Oops! The page you're looking for isn't here.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 4 }}>
            It looks like the page you are trying to access doesn't exist or has been moved. Please check the URL or head back to our homepage.
          </Typography>
          <Box width={'10%'}><AppButton title="Back"  href="/"/></Box>
          <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
            Popular Pages:
          </Typography>
          <Box display="flex" justifyContent="center" gap={2}>
              <AppButton title="Weight Loss"  href="/weight-loss"/>
              <AppButton title="Sexual Health" href="/sexual-health" />
              <AppButton title="Hair Growth"  href="/hair-growth" />
          </Box>
        </Box>
      </Box>
    </>
  );
}
