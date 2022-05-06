import "./styles.css";

export default function App() {
  const input = [
    "B$u$i$ld",
    "$t$$h$e",
    "N$e$x$t",
    "E$$ra",
    "$$o$f$",
    "S$$of$t$wa$r$e",
    "De$$ve$l$op$me$n$t"
  ];

  const ourVision = input.join(" ").replace(/\$/g, "").toUpperCase();

  return (
    <div className="App">
      <p>Our Vision</p>
      <code>{ourVision}</code>
    </div>
  );
}
