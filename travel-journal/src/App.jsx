import Entry from "./components/Entry";
import Header from "./components/Header";
import JapanImg from "./assets/Japan.jpg";
import data from "./data";

export default function App() {
  const entryElements = data.map((entry) => {
    return (
      <Entry
        img={entry.img}
        title={entry.title}
        country={entry.country}
        link={entry.link}
        date={entry.date}
        text={entry.text}
      />
    );
  });

  return (
    <>
      <Header />
      <main className="container">{entryElements}</main>
    </>
  );
}
