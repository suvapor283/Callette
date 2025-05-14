import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="m-auto w-full max-w-[430px]">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">Login</CardTitle>
      </CardHeader>

      <CardContent>
        <form className="space-y-6">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="username" className="font-semibold text-gray-600">
              ID
            </Label>
            <Input
              id="username"
              placeholder="아이디를 입력해주세요"
              className="w-full"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <Label htmlFor="password" className="font-semibold text-gray-600">
              PASSWORD
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              className="w-full"
            />
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex flex-col items-center pt-4">
        <Button className="w-full">로그인</Button>
        <div className="mt-5 flex items-center space-x-4 text-sm text-gray-500">
          <Link href="#" className="hover:text-gray-800">
            아이디 찾기
          </Link>
          <span>|</span>
          <Link href="#" className="hover:text-gray-800">
            비밀번호 찾기
          </Link>
          <span>|</span>
          <Link href="/auth/signup" className="hover:text-gray-800">
            회원가입
          </Link>
        </div>
      </CardFooter>
    </div>
  );
}
