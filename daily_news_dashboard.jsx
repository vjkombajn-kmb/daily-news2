import { useEffect, useState } from "react";

export default function DailyNewsDashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      // Mock data – in practice you’d fetch this from an API or your server cron job
      const today = new Date().toLocaleDateString("cs-CZ", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      setData({
        date: today,
        bitcoin: [
          {
            title: "Bitcoin oslabuje kvůli inflaci v USA",
            url: "https://www.kryptonovinky.sk/",
          },
          {
            title: "Michael Saylor plánuje Bitcoinový úvěr",
            url: "https://www.bloomberg.com/",
          },
        ],
        stocks: [
          {
            ticker: "PLTR",
            news: "Palantir oznámil nové partnerství s DoD.",
          },
          {
            ticker: "TSLA",
            news: "Tesla testuje novou platformu robotaxi.",
          },
          {
            ticker: "META",
            news: "Meta provádí další reorganizaci AI divize.",
          },
          {
            ticker: "INTC",
            news: "Trumpova administrativa zvažuje investici do Intelu.",
          },
          {
            ticker: "WPC",
            news: "Prudential PLC navýšil podíl ve WPC.",
          },
          {
            ticker: "GGB",
            news: "Gerdau hlásí růst produkce oceli.",
          },
        ],
        world: [
          {
            title: "Fed signalizuje možné snížení sazeb",
            url: "https://www.investors.com/",
          },
          {
            title: "Saúdský fond opustil pozice v Meta",
            url: "https://www.bloomberg.com/",
          },
        ],
        obituaries: [
          {
            name: "Významný ekonom John Doe zemřel ve věku 87 let",
          },
        ],
      });
    }
    fetchData();
  }, []);

  if (!data) return <div className="p-6">Načítám...</div>;

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Denní přehled zpráv</h1>
        <p className="mb-6 text-gray-600">{data.date}</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Bitcoin & Kryptoměny</h2>
          <ul className="list-disc pl-6">
            {data.bitcoin.map((item, i) => (
              <li key={i}>
                <a className="text-blue-600" href={item.url} target="_blank">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Akcie</h2>
          <ul className="list-disc pl-6">
            {data.stocks.map((s, i) => (
              <li key={i}>
                <strong>{s.ticker}:</strong> {s.news}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Ekonomika & Svět</h2>
          <ul className="list-disc pl-6">
            {data.world.map((w, i) => (
              <li key={i}>
                <a className="text-blue-600" href={w.url} target="_blank">
                  {w.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Úmrtí významných osobností</h2>
          <ul className="list-disc pl-6">
            {data.obituaries.map((o, i) => (
              <li key={i}>{o.name}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
