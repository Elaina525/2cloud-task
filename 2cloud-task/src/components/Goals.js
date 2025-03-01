export default function Goals() {
    const items = Array.from({ length: 7 }, (_, index) => ({
      id: index,
      image: "goals.svg",
      text: (
        <>
            Sustainable <br/> focus
        </>
      ),
    }));
  
    return (
      <div className="bg-about-blue px-20 py-10 text-black flex justify-between">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col items-center gap-2">
            <img src={item.image} alt={item.text} className="w-24 h-24" />
            <p className="text-center text-lg font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    );
  }
  