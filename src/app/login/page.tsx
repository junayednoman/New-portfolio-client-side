"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useUserContext } from "../../context/auth.provider";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import PForm from "../components/form/PForm";
import PInput from "../components/form/PInput";
import Loading from "../components/ui/Loading";
import { useAuthMutation } from "../../hooks/mutation";
import { loginValidationSchema } from "../../validaiton/auth.validation";
import { ThemeProvider } from "../../providers/themeProvider";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import PButton from "../components/ui/PButton";

const LoginForm = () => {
  const { setLoading: setUserLoading } = useUserContext();
  const searchParams = useSearchParams();
  const redirectTo = searchParams?.get("redirect") || "/admin/create-project";
  const router = useRouter();

  const {
    mutate: handleLogin,
    isPending,
    isError,
    isSuccess,
  } = useAuthMutation("login", "/auth/login");

  // redirect if logged in
  useEffect(() => {
    if (!isPending && !isError && isSuccess) {
      router.push(redirectTo);
    }
  }, [isPending, isError, isSuccess]);

  const handleFormSubmit: SubmitHandler<FieldValues> = (data) => {
    handleLogin(data);
    setUserLoading(true);
    console.log("data, ", data);
  };

  return (
    <Container>
      <div>
        <Link
          href={"/"}
          className="font-semibold text-lg dark:text-white-100 flex items-center gap-2 md:pt-10 pt-6"
        >
          <span>
            <BiArrowBack size={22} />
          </span>
          <span>Back to home</span>
        </Link>
      </div>
      <div className="md:max-w-[500px] mx-auto w-full md:py-20 py-16">
        <SectionTitle>Login</SectionTitle>
        <PForm
          resolver={zodResolver(loginValidationSchema)}
          handleFormSubmit={handleFormSubmit}
        >
          <div className="space-y-3 mt-9">
            <PInput
              name="email"
              type="email"
              label="Email"
              placeholder="Enter your email"
            />
            <PInput
              name="password"
              label="Password"
              placeholder="Enter your password"
            />
            <PButton wFull disabled={isPending} htmlType="submit">
              {isPending ? "Logging in..." : "Login"}
              {/* login */}
            </PButton>
          </div>
        </PForm>
      </div>
    </Container>
  );
};

const Login = () => (
  <Suspense fallback={<Loading />}>
    <ThemeProvider
      defaultTheme="dark"
      attribute="class"
      enableSystem
      disableTransitionOnChange
    >
      <LoginForm />
    </ThemeProvider>
  </Suspense>
);

export default Login;
