"use client";
import { ListElem, MultipleCombobox } from "@/components/multiple-combobox";
import { SingleCombobox } from "@/components/single-combobox";
import { Button } from "@/shad/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shad/ui/card";
import { Input } from "@/shad/ui/input";

const foodSelect: ListElem[] = [
  { value: "sausages", label: "Пицца с колбасками" },
  { value: "california+ugor", label: "Калифорния с угрем" },
];

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-semibold text-center ">Zenith Form</h1>
      <form className="mx-auto max-w-screen-md gap-4 flex flex-col mt-6">
        <Card>
          <CardHeader>
            <CardTitle>1. Что хотите заказать?</CardTitle>
          </CardHeader>
          <CardContent>
            <MultipleCombobox list={foodSelect} placeholder="Выберите блюдо" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>2. Адрес доставки</CardTitle>
          </CardHeader>
          <CardContent>
            <Input placeholder="ул.Пушкина дом. 20 кв. 24" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>3. Время доставки</CardTitle>
            <CardDescription>
              Оставьте пустым если по готовности
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Input type="time" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>4. Номер телефона</CardTitle>
            <CardDescription>
              Мы с вами свяжемся по Whatsapp для подтверждения заказа
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Input type="tel" placeholder="8(777)555-66-44" />
          </CardContent>
        </Card>
        <Button type="submit">Подтвердить</Button>
      </form>
    </main>
  );
}
