import { MainLayout } from "@/components/layouts";

import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <MainLayout
      title={"Photo Gallery - Home"}
      pageDescription={"Photos categories"}
    >
      <Typography variant="h1">HelloWorld</Typography>;
    </MainLayout>
  );
}
