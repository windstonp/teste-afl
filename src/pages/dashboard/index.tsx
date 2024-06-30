import DashboardLayout from "@/layouts/dashboardLayout";
import { ContractSummaryScreen } from "@/screens/ContractSummary";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <ContractSummaryScreen />
    </DashboardLayout>
  );
}
