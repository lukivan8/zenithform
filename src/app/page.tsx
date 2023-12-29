import { MultipleCombobox } from "@/components/multiple-combobox";
import { SingleCombobox } from "@/components/single-combobox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shad/ui/card";

const foodSelect = [
  { value: "carbonara", label: "Пицца Карбонара" },
  { value: "carbonara1", label: "Пицца Карбонара" },
  { value: "carbonara2", label: "Пицца Карбонара" },
  { value: "carbonara3", label: "Пицца Карбонара" },
  { value: "carbonara4", label: "Пицца Карбонара" },
  { value: "carbonara5", label: "Пицца Карбонара" },
  { value: "carbonara6", label: "Пицца Карбонара" },
  { value: "carbonara7", label: "Пицца Карбонара" },
  { value: "carbonara8", label: "Пицца Карбонара" },
];

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-semibold text-center ">AsylSushi</h1>
      <div className="mx-auto max-w-screen-md gap-4 flex flex-col mt-6">
        <Card>
          <CardHeader>
            <CardTitle>1. Что хотите заказать?</CardTitle>
          </CardHeader>
          <CardContent>
            <MultipleCombobox list={foodSelect} placeholder="Выберите блюдо" />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
