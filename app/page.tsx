import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <div className="flex justify-between">
      <h1 className="text-5xl font-bold">Font Urbanist</h1>
      <Button variant={"default"} size={"icon"}></Button>
      <Icon className="h-10 w-10 text-red-600" icon="mynaui:user" />
      <Button variant={"secondary"}>HEllo</Button>
      <Button variant={"outline"}>HEllo</Button>
      <Button variant={"ghost"}>HEllo</Button>
    </div>
  );
}
