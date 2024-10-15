import Link from 'next/link'

import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'

export const metadata = {
  title: 'Sign Up',
}

export default function Register() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-gray-900">
        从现在开始
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        已经注册过？{' '}去
        <Link
          href="/login"
          className="font-medium text-blue-600 hover:underline"
        >
          登录
        </Link>{' '}
        
      </p>
      <form
        action="#"
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
      >
        <TextField
          label="姓名"
          name="first_name"
          type="text"
          autoComplete="given-name"
          required
        />
        <TextField
          label="年龄"
          name="last_name"
          type="text"
          autoComplete="family-name"
          required
        />
        <TextField
          className="col-span-full"
          label="手机号码"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <TextField
          className="col-span-full"
          label="密码"
          name="password"
          type="password"
          autoComplete="new-password"
          required
        />
        <SelectField
          className="col-span-full"
          label="您如何了解到我们的?"
          name="referral_source"
        >
          <option>搜索引擎</option>
          <option>朋友推荐</option>
          <option>三方广告</option>
        </SelectField>
        <div className="col-span-full">
          <Button type="submit" variant="solid" color="blue" className="w-full">
            <span>
              注 册 <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
    </SlimLayout>
  )
}
