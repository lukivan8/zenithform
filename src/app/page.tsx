import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shad/ui/card";
import { ComboboxDemo } from "@/shad/ui/combobox";
import { Input } from "@/shad/ui/input";

export default function Home() {
  return (
    <main>
      <div className="mx-auto max-w-screen-md gap-4 flex flex-col mt-10">
        <Card>
          <CardHeader>
            <CardTitle>1. What do you want?</CardTitle>
          </CardHeader>
          <CardContent>
            <Input placeholder="Type your answer here..." disabled />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <ComboboxDemo />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
