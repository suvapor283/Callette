import { CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { CalendarForm } from '@/components/form/CalendarForm';

export default function DiaryCreatePage() {
  return (
    <form>
      <CardHeader>
        <CalendarForm />
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter></CardFooter>
    </form>
  );
}
