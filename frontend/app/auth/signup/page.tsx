'use client';

import { useState } from 'react';
import Link from 'next/link';
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
  const [formData, setFormdata] = useState({
    username: '',
    password: '',
    password2: '',
    nickname: '',
    name: '',
    birthDate: '',
    phoneNumber: '',
    email: '',
  });

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('회원가입 성공!');
      } else {
        const errorData = await response.json();
        alert('회원가입 실패: ${errorData.message}');
      }
    } catch (error) {
      alert('회원가입 중 오류 발생');
      console.error(error);
    }
  };

  return (
    <div className="mx-auto my-2 w-[70%] min-w-[500px]">
      <CardHeader>
        <CardTitle className="p-2 text-center text-2xl font-bold">
          Sign Up
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form className="grid items-center gap-3">
          <div className="space-y-1.5">
            <Label htmlFor="username">
              User ID
              <span className="text-red-500">*</span>
            </Label>
            <Input
              id="username"
              placeholder="아이디"
              value={formData.username}
              onChange={(e) =>
                setFormdata({ ...formData, username: e.target.value })
              }
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="password">
              Password
              <span className="text-red-500">*</span>
            </Label>
            <Input
              id="password"
              placeholder="비밀번호"
              value={formData.password}
              onChange={(e) =>
                setFormdata({ ...formData, password: e.target.value })
              }
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="password2">
              Confirm Password
              <span className="text-red-500">*</span>
            </Label>
            <Input
              id="password2"
              placeholder="비밀번호 확인"
              value={formData.password2}
              onChange={(e) =>
                setFormdata({ ...formData, password2: e.target.value })
              }
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="nickname">
              Nickname
              <span className="text-red-500">*</span>
            </Label>
            <Input
              id="nickname"
              placeholder="닉네임"
              value={formData.nickname}
              onChange={(e) =>
                setFormdata({ ...formData, nickname: e.target.value })
              }
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="name">
              Name
              <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              placeholder="이름"
              value={formData.name}
              onChange={(e) =>
                setFormdata({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="birthdate">
              Birth Date
              <span className="text-red-500">*</span>
            </Label>
            <Input
              id="birthdate"
              placeholder="생년월일 8자리"
              value={formData.birthDate}
              onChange={(e) =>
                setFormdata({ ...formData, birthDate: e.target.value })
              }
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="phoneNumber">
              Phone Number
              <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phoneNumber"
              placeholder="휴대전화번호"
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormdata({ ...formData, phoneNumber: e.target.value })
              }
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email">[선택] E-mail</Label>
            <Input
              id="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={(e) =>
                setFormdata({ ...formData, email: e.target.value })
              }
            />
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex justify-between">
        <p className="text-center text-sm text-gray-500">
          이미 계정이 있으신가요?
          <Link href="#" className="px-1 text-blue-600 hover:underline">
            로그인
          </Link>
        </p>
        <Button onClick={handleSignup}>회원가입</Button>
      </CardFooter>
    </div>
  );
}
