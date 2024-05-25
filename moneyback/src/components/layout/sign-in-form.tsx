import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link";

export function SignInForm() {
  return (
    <div className="mx-auto max-w-sm space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Вход</h1>
        <p className="text-gray-500 dark:text-gray-400">Введите свои данные для входа в аккаунт</p>
      </div>
      <div className="space-y-4">
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="ivan@example.com" required type="email"/>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Пароль</Label>
          <Input id="password" required type="password"/>
        </div>
        <Button className="w-full" type="submit">
          Войти
        </Button>
        <div className="text-center">
          <Link className="text-sm font-medium underline underline-offset-4" href="/auth/sign-up">
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </div>
  )
}
