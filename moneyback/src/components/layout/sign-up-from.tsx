"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import {SubmitHandler, useForm} from "react-hook-form";

interface IFormInput {
  firstname: string
  username: string
  password: string
  repeated_password: string
}


export function SignUpFrom() {
  const { register, handleSubmit } = useForm<IFormInput >()
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const { password, repeated_password } = data
    if (password != repeated_password) {
      alert("Пароли не совпадают")
      return
    }

    try {
      const body = {
        name:     data.firstname,
        username: data.username,
        password: data.password
      };
      const res = await fetch(`/api/sign`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      console.log(res.body)
    } catch (error) {
      console.error(error);
    }


  }


  return (
    <form className="mx-auto max-w-sm space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Регистрация</h1>
        <p className="text-gray-500 dark:text-gray-400">Введите свои данные для создания аккаунта</p>
      </div>
      <div className="space-y-4">
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Имя</Label>
            <Input id="name" placeholder="Иван" {...register("firstname", { required: true })}/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="ivan@example.com" type="email"  {...register("username", { required: true })}/>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Пароль</Label>
          <Input id="password" type="password"  {...register("password", { required: true })}/>
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm-password">Подтвердите пароль</Label>
          <Input id="confirm-password" type="password"  {...register("repeated_password", { required: true })} />
        </div>
        <Button className="w-full" type="submit">
          Зарегистрироваться
        </Button>
      </div>
      <div className="text-center">
        <Link className="text-sm font-medium underline underline-offset-4" href="/auth/sign-in">
          Уже есть аккаунт? Войти
        </Link>
      </div>
    </form>
  )
}
