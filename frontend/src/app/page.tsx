import { Button } from "@/components/ui/button";
import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { CalendarIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex h-full flex-col sm:flex-row">
      <div className="flex h-[250px] w-full flex-row shadow-[4px_0_6px_-1px_rgba(0,0,0,0.1)] sm:h-full sm:w-[260px] sm:flex-col">
        <div className="flex w-[50%] flex-col items-center justify-center p-3 sm:h-[50%] sm:w-full">
          <div className="m-2 flex aspect-square h-2/3 max-h-[130px] max-w-[130px] items-center justify-center border-2 border-dotted sm:h-auto sm:w-2/3">
            사진
          </div>
          <span className="text-sm font-semibold sm:text-base">닉네임</span>
          <span className="text-xs sm:text-sm">상태메세지입니다.</span>
          <Button variant="outline" className="m-2 text-sm sm:text-base">
            프로필수정
          </Button>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="flex h-[85%] w-[80%] flex-col rounded-sm bg-gray-100 p-2 text-center">
            <div className="m-2 flex items-center gap-2">
              <CalendarIcon className="size-5" />
              <span className="text-sm font-semibold sm:text-base">
                오늘의 일정
              </span>
            </div>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="w-[20%] text-left text-xs sm:text-sm">
                    9:00
                  </TableCell>
                  <TableCell className="text-left text-xs break-words whitespace-normal sm:text-sm">
                    마트가기
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-left text-xs sm:text-sm">
                    10:00
                  </TableCell>
                  <TableCell className="text-left text-xs break-words whitespace-normal sm:text-sm">
                    도서관 가서 코딩 공부하기
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      <main className="flex-1">메인화면</main>
    </div>
  );
}
