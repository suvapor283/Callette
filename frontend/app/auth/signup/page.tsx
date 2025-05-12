'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
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
import { Key, Vault } from 'lucide-react';

interface SignupFormData {
  username: string;
  password: string;
  password2: string;
  nickname: string;
  name: string;
  birthDate: string;
  phoneNumber: string;
  email: string;
}

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormdata] = useState<SignupFormData>({
    username: '',
    password: '',
    password2: '',
    nickname: '',
    name: '',
    birthDate: '',
    phoneNumber: '',
    email: '',
  });

  const [errorMessages, setErrorMessages] = useState<
    Partial<Record<keyof SignupFormData, string>>
  >({});

  const validateField = (name: string, value: string) => {
    let error = '';

    switch (name) {
      case 'username':
        if (!value) error = '아이디는 필수 정보입니다.';
        else if (!/^[a-z0-9_-]{5,20}$/.test(value))
          error =
            '아이디는 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.';
        break;

      case 'password':
        if (!value) error = '비밀번호는 필수 정보입니다.';
        else if (
          !/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=-]).{8,16}$/.test(value)
        )
          error =
            '비밀번호는 8~16자의 영문 대/소문자, 숫자, 특수문자를 모두 포함해야 합니다.';
        break;

      case 'password2':
        if (value !== formData.password)
          error = '비밀번호가 일치하지 않습니다.';
        break;

      case 'nickname':
        if (!value) error = '닉네임은 필수 정보입니다.';
        break;

      case 'name':
        if (!value) error = '이름은 필수 정보입니다.';
        else if (!/^[a-zA-Z가-힣]+$/.test(value))
          error = '이름은 한글, 영문 대/소문자만 사용 가능합니다.';
        break;

      case 'birthDate':
        if (!value) error = '생년월일은 필수 정보입니다.';
        else if (!/^\d{8}$/.test(value))
          error = '생년월일은 8자리 숫자여야 합니다.';
        break;

      case 'phoneNumber':
        if (!value) error = '휴대폰 번호는 필수 정보입니다.';
        else if (!/^[0-9]{10,11}$/.test(value))
          error = '휴대폰 번호는 10~11자리 숫자여야 합니다.';
        break;

      case 'email':
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = '유효한 이메일 형식이 아닙니다.';
        break;

      default:
        break;
    }

    setErrorMessages((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));

    validateField(name, value);
  };

  const handleSignup = async () => {
    Object.entries(formData).forEach(([Key, Value]) =>
      validateField(Key, Value)
    );

    const hasError = Object.values(errorMessages).some((msg) => msg);
    if (hasError) {
      alert('입력한 정보를 다시 확인해주세요.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8081/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setErrorMessages({});
        alert('회원가입을 축하합니다!');
        router.push('/');
      } else {
        const errorData = await response.json();
        setErrorMessages(errorData);
      }
    } catch (error) {
      alert('회원가입 중 오류가 발생했습니다');
      console.error(error);
    }
  };

  const formFields = [
    {
      id: 'username',
      label: 'User ID',
      placeholder: '아이디를 입력하세요',
      required: true,
    },
    {
      id: 'password',
      label: 'Password',
      placeholder: '비밀번호를 입력하세요',
      required: true,
    },
    {
      id: 'password2',
      label: 'Confirm Password',
      placeholder: '비밀번호를 다시 입력하세요',
      required: true,
    },
    {
      id: 'nickname',
      label: 'Nickname',
      placeholder: '사용할 닉네임을 입력하세요',
      required: true,
    },
    {
      id: 'name',
      label: 'Name',
      placeholder: '이름을 입력하세요',
      required: true,
    },
    {
      id: 'birthDate',
      label: 'Birth Date',
      placeholder: '예: 19950101',
      required: true,
    },
    {
      id: 'phoneNumber',
      label: 'Phone Number',
      placeholder: '예: 01012345678',
      required: true,
    },
    {
      id: 'email',
      label: 'E-mail',
      placeholder: '예: example@email.com',
      required: false,
    },
  ];

  return (
    <div className="mx-auto my-2 w-[70%] min-w-[500px]">
      <CardHeader>
        <CardTitle className="p-2 text-center text-2xl font-bold">
          Sign Up
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form className="items-center space-y-3">
          {formFields.map((field) => (
            <div className="space-y-1.5" key={field.id}>
              <Label htmlFor={field.id}>
                {field.label}
                {field.required && <span className="text-red-500">*</span>}
              </Label>
              <Input
                id={field.id}
                name={field.id}
                placeholder={field.placeholder}
                value={formData[field.id as keyof SignupFormData]}
                onChange={handleChange}
              />
              {errorMessages[field.id as keyof SignupFormData] && (
                <span className="text-sm text-red-500">
                  {errorMessages[field.id as keyof SignupFormData]}
                </span>
              )}
            </div>
          ))}
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
