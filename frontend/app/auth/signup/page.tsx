import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function signup() {
  return (
    <div className="mx-auto my-2 w-[70%] min-w-[500px]">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid items-center gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="username">User ID</Label>
              <Input id="username" placeholder="아이디" />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="비밀번호" />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="password2">Confirm Password</Label>
              <Input id="password2" placeholder="비밀번호 확인" />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="nickname">Nickname</Label>
              <Input id="nickname" placeholder="닉네임" />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="이름" />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="birthdate">Birth Date</Label>
              <Input id="birthdate" placeholder="생년월일 8자리 " />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input id="phoneNumber" placeholder="휴대전화번호" />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" placeholder="example@email.com" />
            </div>
          </div>
        </form>
      </CardContent>
    </div>
  );
}
