import Button from "@/components/button";
import Input from "@/components/input";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { BsEyeSlash } from "react-icons/bs";

export default function LoginScreen() {
  return (
    <div className="container mx-auto columns-1 md:columns-2 flex min-h-screen items-center justify-center">
      <div className="w-full flex align-center justify-center hidden md:block m-20">
        <Image src="/logo.png" width={500} height={500} alt="Company Logo" />
      </div>
      <div className="w-full bg-white min-h-screen flex justify-center flex-col p-2 sm:p-12 lg:p-20">
        <p className="text-2xl font-bold text-primary mb-4">Faça seu login</p>
        <Input
          variant="startIcon"
          className="my-4"
          placeholder="Email"
          defaultValue="lorem@ipsum.com"
          startIcon={FaEnvelope}
        />
        <Input
          variant="bothIcons"
          className="my-4"
          placeholder="Senha"
          type="password"
          defaultValue="teste123"
          startIcon={IoMdLock}
          endIcon={BsEyeSlash}
        />
        <div className="my-4 columns-2 flex justify-between">
          <div className="flex items-center">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 accent-gray-default bg-gray-100 border-gray-300 rounded focus:ring-gray dark:focus:ring-gray dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ms-2 text-sm font-medium text-gray-900 text-gray-default"
            >
              Lembrar-me
            </label>
          </div>
          <div className="flex items-center justify-end">
            <Link className="text-link underline" href="#">
              Esqueci minha senha
            </Link>
          </div>
        </div>
        <div className="mt-4">
          <Button asChild>
            <Link href="/dashboard">Entrar</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
