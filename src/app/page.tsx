"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Authentication from "@/components/auth/Authentication";
import MainPage from "@/components/MainPage";
import MedicalHomePage from "@/components/MedicalHomePage";
import useUserStore from "@/stores/userStore";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const showMedicalHome = searchParams?.get("medical");
  const { role } = useUserStore();

  // إذا كان المستخدم أدمن، يمكن إضافة توجيه للوحة التحكم
  useEffect(() => {
    if (role === "admin" && showMedicalHome === "admin") {
      router.push("/admin");
    }
  }, [role, showMedicalHome, router]);

  return (
    <Authentication>
      {showMedicalHome === "true" ? <MedicalHomePage /> : <MainPage />}
    </Authentication>
  );
}
