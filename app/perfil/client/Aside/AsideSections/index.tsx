"use client"

import PerfilPage from "@/app/src/Pages/PerfilPage";

export default function AsideSections() {
  const Aside = PerfilPage.Body.Aside;

  return (
    <>
      <Aside.Section title="Vistos Recentemente">
        <Aside.Section.Item>
          <Aside.Section.Item.Text
            icon="L"
            bgIcon="bg-yellow-400"
          >
            League of Legends
          </Aside.Section.Item.Text>
        </Aside.Section.Item>
      </Aside.Section>

      <Aside.Section title="Cabeleireiros Favoritados">
        <Aside.Section.Item>
          <Aside.Section.Item.Text
            icon="L"
            bgIcon="bg-yellow-400"
          >
            League of Legends
          </Aside.Section.Item.Text>
        </Aside.Section.Item>

        <Aside.Section.Item>
          <Aside.Section.Item.Text
            icon="K"
            bgIcon="bg-orange-500"
          >
            CS2 Global Offensive
          </Aside.Section.Item.Text>
        </Aside.Section.Item>

        <Aside.Section.Item>
          <Aside.Section.Item.Text
            icon="F"
            bgIcon="bg-purple-500"
          >
            Fortnite
          </Aside.Section.Item.Text>
        </Aside.Section.Item>

        <Aside.Section.Item>
          <Aside.Section.Item.Text
            icon="R"
            bgIcon="bg-cyan-500"
          >
            Rocket League
          </Aside.Section.Item.Text>
        </Aside.Section.Item>
      </Aside.Section>
    </>
  );
}