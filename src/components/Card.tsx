type Props = {
  imageUrl: string;
  name: string;
  text: string;
};

export default function Card({imageUrl, name, text}: Props) {
  return (
    <div className="w-64 h-96 bg-white rounded-lg">
      <img className="w-full h-64" src={imageUrl} alt="profilepicture" />
      <h2 className="font-bold">{name}</h2>
      <p>
        {text}
      </p>
    </div>
  );
}
