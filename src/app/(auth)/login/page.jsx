import Link from 'next/link'

import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'

export const metadata = {
  title: 'Sign In',
}

export default function Login() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-gray-900">
        登 录
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        没有账号？{' '}去
        <Link
          href="/register"
          className="font-medium text-blue-600 hover:underline"
        >
          注册.
        </Link>{' '}
      </p>
      <form action="#" className="mt-10 grid grid-cols-1 gap-y-8">
        <TextField
          label="手机号"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <TextField
          label="密码"
          name="password"
          type="password"
          autoComplete="current-password"
          required
        />
        <div>
          <Button type="submit" variant="solid" color="blue" className="w-full">
            <span>
              登 录 <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
    </SlimLayout>
  )
}
