import Card from "./Card";

export default function CardManager() {
  return (
    <div className="bg-black w-screen h-full p-10">
      <h1 className="text-white">HTL Dornbirn 5bWI</h1>
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(16rem,_1fr))]">
        <Card
          imageUrl="https://picsum.photos/200/200"
          name="Luca Grabherr"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua."
        ></Card>
        <Card
          imageUrl="https://picsum.photos/200/200"
          name="Santiago Scheffknecht"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua."
        ></Card>
        <Card
          imageUrl="https://picsum.photos/200/200"
          name="Jonas Kronabitter"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua."
        ></Card>
            <Card
          imageUrl="https://picsum.photos/200/200"
          name="Luca Grabherr"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua."
        ></Card>
        <Card
          imageUrl="https://picsum.photos/200/200"
          name="Santiago Scheffknecht"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua."
        ></Card>
        <Card
          imageUrl="https://picsum.photos/200/200"
          name="Jonas Kronabitter"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua."
        ></Card>
            <Card
          imageUrl="https://picsum.photos/200/200"
          name="Luca Grabherr"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua."
        ></Card>
        <Card
          imageUrl="https://picsum.photos/200/200"
          name="Santiago Scheffknecht"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua."
        ></Card>
      </div>
    </div>
  );
}
