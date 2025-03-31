import DashboardLayout from '@/components/layout/DashboardLayout'

export default function InstructorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <DashboardLayout>{children}</DashboardLayout>
} 